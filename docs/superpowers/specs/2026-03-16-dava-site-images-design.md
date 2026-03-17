# DAVA Design — Sitio Publico + Panel de Admin para Imagenes

**Fecha:** 2026-03-16
**Estado:** Aprobado

---

## Contexto

DAVA Design es un estudio de diseno y fabricacion de mobiliario a medida en El Salvador. Existe un archivo HTML estatico (`dava-design-website.html`) con el diseno completo del sitio: 4 paginas (Home, Servicios, Nosotros, Contacto). El proyecto Laravel ya tiene autenticacion con Fortify, Inertia+React, y Tailwind 4.

Se necesita recrear el sitio HTML como aplicacion Laravel/Inertia, agregando un panel de administracion para que el admin pueda reemplazar las imagenes del sitio.

## Decisiones de diseno

- **Solo imagenes editables.** Los textos quedan fijos en el codigo.
- **Posiciones fijas.** El admin solo reemplaza imagenes en slots predefinidos, no agrega ni quita.
- **Rol simple.** Campo `is_admin` boolean en la tabla `users`. Sin paquetes de roles/permisos.
- **Registro publico activo.** Usuarios nuevos se registran como `user` por defecto. El admin se crea via seeder.
- **Solo PNG.** El admin solo puede subir archivos `.png`.
- **CSS pixel-perfect.** Se convierte el CSS del HTML a Tailwind respetando exactamente los mismos valores. Si algo no se puede replicar con utilidades de Tailwind, se usa CSS personalizado.

---

## 1. Base de datos

### Migracion: `add_is_admin_to_users_table`

Agrega campo `is_admin` (boolean, default `false`) a la tabla `users`.

### Modelo `SiteImage`

| Campo      | Tipo              | Descripcion                                       |
|------------|-------------------|---------------------------------------------------|
| `id`       | bigIncrements     | Primary key                                       |
| `slot`     | string, unique    | Identificador unico del slot (ej: `home_hero_bg`) |
| `label`    | string            | Nombre descriptivo para el admin                  |
| `section`  | string            | Agrupacion: home, servicios, nosotros, contacto   |
| `path`     | string, nullable  | Ruta relativa en storage (null = placeholder)     |
| `alt_text` | string, nullable  | Texto alternativo para la imagen (fijo via seeder)|
| timestamps |                   | created_at, updated_at                            |

### Slots definidos (17 total)

**Home (9):**
| Slot               | Label                          |
|---------------------|-------------------------------|
| `home_hero_bg`      | Hero - Imagen de fondo        |
| `home_about_1`      | Sobre nosotros - Imagen 1     |
| `home_about_2`      | Sobre nosotros - Imagen 2     |
| `home_about_3`      | Sobre nosotros - Imagen 3     |
| `home_gallery_1`    | Galeria - Imagen 1            |
| `home_gallery_2`    | Galeria - Imagen 2            |
| `home_gallery_3`    | Galeria - Imagen 3            |
| `home_process`      | Proceso - Imagen              |
| `home_cta_bg`       | CTA - Imagen de fondo         |

**Servicios (3):**
| Slot                  | Label                          |
|------------------------|-------------------------------|
| `services_hero_bg`    | Hero - Imagen de fondo        |
| `services_furniture`  | Mobiliario - Imagen           |
| `services_decor`      | Decoracion - Imagen           |

**Nosotros (4):**
| Slot                  | Label                          |
|------------------------|-------------------------------|
| `nosotros_hero_bg`    | Hero - Imagen de fondo        |
| `nosotros_who`        | Quienes somos - Imagen        |
| `nosotros_design`     | Como entendemos el diseno     |
| `nosotros_process`    | Acompanamiento - Imagen       |

**Contacto (1):**
| Slot                  | Label                          |
|------------------------|-------------------------------|
| `contacto_image`      | Contacto - Imagen             |

### Seeder

- Crea usuario admin: `admin@admin.com` / `universal` / `is_admin = true` (credenciales de desarrollo, cambiar en produccion)
- Crea los 17 registros de `SiteImage` con `path = null` y `alt_text` predefinido segun el contenido de cada slot

---

## 2. Backend

### Middleware `EnsureIsAdmin`

- Verifica `auth` y `$request->user()->is_admin === true`
- Si no cumple, redirige a `/`

### Controller publico: `PublicController`

- `home()` — Pasa SiteImages de section `home` a la vista
- `servicios()` — Pasa SiteImages de section `servicios`
- `nosotros()` — Pasa SiteImages de section `nosotros`
- `contacto()` — Pasa SiteImages de section `contacto`

Cada metodo consulta `SiteImage::where('section', $section)->get()` y lo pasa como prop a Inertia.

### Controller admin: `AdminImageController`

- `index()` — Retorna todas las SiteImages agrupadas por section
- `update(UpdateSiteImageRequest $request, SiteImage $image)` — Guarda archivo en storage, actualiza `path` en DB (dentro de transaccion), luego elimina imagen anterior si existe. Si el guardado falla, no se modifica la DB.

### Form Request: `UpdateSiteImageRequest`

- `image`: required, file, mimes:png, max:5120 (5MB), dimensions max 4000x4000

### Rutas

```
// Publicas
GET /            → PublicController@home       (name: home)
GET /servicios   → PublicController@servicios  (name: servicios)
GET /nosotros    → PublicController@nosotros   (name: nosotros)
GET /contacto    → PublicController@contacto   (name: contacto)

// Admin (middleware: auth, is_admin)
GET  /admin              → AdminImageController@index   (name: admin.index)
POST /admin/images/{image} → AdminImageController@update (name: admin.images.update)
```

### Storage

- Disco: `public` (storage/app/public)
- Directorio: `site-images/`
- Requiere `php artisan storage:link` (prerequisito de setup)
- Nombres de archivo: `{slot}_{timestamp}.png` para evitar cache del navegador

---

## 3. Frontend publico

### Layout: `PublicLayout`

Layout compartido con:
- `Navbar` — fijo, efecto scroll, version dark/light segun pagina
- `Footer` — logo, links, redes sociales, contacto
- `WhatsAppFloat` — boton flotante fijo abajo a la derecha

### Paginas Inertia

Cada pagina replica exactamente el contenido y estructura del HTML original:

- `resources/js/pages/public/home.tsx`
- `resources/js/pages/public/servicios.tsx`
- `resources/js/pages/public/nosotros.tsx`
- `resources/js/pages/public/contacto.tsx`

### Componentes compartidos

- `Navbar` — links de navegacion, hamburger mobile, logo
- `Footer` — 3 columnas (brand, servicios, contacto + redes)
- `WhatsAppFloat` — boton flotante con icono SVG
- `HeroSection` — hero con imagen de fondo, overlay, contenido centrado
- `CtaBand` — seccion CTA con imagen de fondo y overlay
- `SiteImage` — componente que renderiza la imagen del slot o un placeholder gris SVG si `path` es null

### CSS

Se convierte a Tailwind respetando exactamente:
- Colores: `#FFFFFF`, `#F7F6F3`, `#F0EDE8`, `#2D2D2D`, `#555555`, `#9A9A9A`, `#C4A882`, `#A88E6A`, `#D4C4A8`, `#E8E5E0`, `#C8BEB5`, `#8D8989`
- Fuentes: Montserrat, Cormorant Garamond, DM Sans (cargadas via Google Fonts)
- Espaciados, border-radius, sombras, transiciones del HTML original
- Breakpoints responsive: 992px (custom en tailwind config) y 768px (md)
- Animaciones de reveal con IntersectionObserver (CSS custom si necesario)
- Pseudo-elementos ::before/::after para overlays (CSS custom)
- Scrollbar personalizado y ::selection (CSS custom)

### Placeholders

Cuando `path` es null, el componente `SiteImage` renderiza un `<div>` gris con las proporciones correctas del slot y un icono de imagen centrado.

---

## 4. Frontend admin

### Layout: `AdminLayout`

Header simple con:
- Logo DAVA Design
- Link "Volver al sitio" (→ `/`)
- Boton "Cerrar sesion"

### Pagina: `resources/js/pages/admin/index.tsx`

- Imagenes agrupadas por seccion (Home, Servicios, Nosotros, Contacto)
- Cada grupo tiene un heading con el nombre de la seccion
- Cada imagen muestra:
  - Label descriptivo
  - Preview de la imagen actual (o placeholder gris)
  - Proporciones del preview reflejan las proporciones reales en el sitio
  - Boton "Cambiar imagen"

### Flujo de reemplazo

1. Admin hace clic en "Cambiar imagen"
2. Se abre un Dialog (Radix UI, ya disponible en el proyecto) con input de archivo
3. Input acepta solo `.png`
4. Al seleccionar, se sube via POST con Inertia form
5. Se guarda en storage, se actualiza la DB, se elimina la imagen anterior
6. El preview se actualiza sin recargar la pagina (Inertia preserva estado)

---

## 5. Lo que NO se modifica

- Autenticacion Fortify (login, registro, 2FA, password reset)
- Dashboard existente (`/dashboard`)
- Settings (profile, security, appearance)
- Rutas de settings
- Middlewares existentes
- Cualquier componente o layout existente del dashboard

---

## 6. Tests

- **Feature test:** Admin puede acceder a `/admin`
- **Feature test:** Usuario no-admin es redirigido desde `/admin`
- **Feature test:** Admin puede subir PNG y reemplaza imagen
- **Feature test:** Admin no puede subir archivos que no sean PNG
- **Feature test:** Admin no puede subir archivos mayores a 5MB
- **Feature test:** Paginas publicas cargan correctamente con imagenes
- **Feature test:** Paginas publicas cargan correctamente sin imagenes (placeholders)

---

## 7. Notas de setup

- Ejecutar `php artisan storage:link` antes de usar el admin
- Ejecutar `php artisan migrate --seed` para crear el admin y los slots
- La pagina de contacto no tiene formulario: usa enlace directo a WhatsApp (igual que el HTML original)
