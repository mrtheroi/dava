<?php

namespace Database\Seeders;

use App\Models\SiteImage;
use App\Models\User;
use Illuminate\Database\Seeder;

class SiteImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->admin()->create([
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'password' => bcrypt('universal'),
        ]);

        $slots = [
            ['slot' => 'home_hero_bg', 'label' => 'Hero - Imagen de fondo', 'section' => 'home', 'alt_text' => 'Mobiliario elegante en sala de estar'],
            ['slot' => 'home_about_1', 'label' => 'Sobre nosotros - Imagen 1', 'section' => 'home', 'alt_text' => 'Detalle de mobiliario a medida'],
            ['slot' => 'home_about_2', 'label' => 'Sobre nosotros - Imagen 2', 'section' => 'home', 'alt_text' => 'Espacio de diseno interior'],
            ['slot' => 'home_about_3', 'label' => 'Sobre nosotros - Imagen 3', 'section' => 'home', 'alt_text' => 'Acabados y materiales'],
            ['slot' => 'home_gallery_1', 'label' => 'Galeria - Imagen 1', 'section' => 'home', 'alt_text' => 'Proyecto de diseno completado'],
            ['slot' => 'home_gallery_2', 'label' => 'Galeria - Imagen 2', 'section' => 'home', 'alt_text' => 'Interior de sala moderna'],
            ['slot' => 'home_gallery_3', 'label' => 'Galeria - Imagen 3', 'section' => 'home', 'alt_text' => 'Diseno de cocina personalizada'],
            ['slot' => 'home_process', 'label' => 'Proceso - Imagen', 'section' => 'home', 'alt_text' => 'Proceso de fabricacion artesanal'],
            ['slot' => 'home_cta_bg', 'label' => 'CTA - Imagen de fondo', 'section' => 'home', 'alt_text' => 'Espacio de trabajo de diseno'],

            ['slot' => 'services_hero_bg', 'label' => 'Hero - Imagen de fondo', 'section' => 'servicios', 'alt_text' => 'Salon con mobiliario a medida'],
            ['slot' => 'services_furniture', 'label' => 'Mobiliario - Imagen', 'section' => 'servicios', 'alt_text' => 'Mobiliario personalizado'],
            ['slot' => 'services_decor', 'label' => 'Decoracion - Imagen', 'section' => 'servicios', 'alt_text' => 'Accesorios decorativos'],

            ['slot' => 'nosotros_hero_bg', 'label' => 'Hero - Imagen de fondo', 'section' => 'nosotros', 'alt_text' => 'Fachada de casa de diseno'],
            ['slot' => 'nosotros_who', 'label' => 'Quienes somos - Imagen', 'section' => 'nosotros', 'alt_text' => 'Equipo DAVA Design trabajando'],
            ['slot' => 'nosotros_design', 'label' => 'Como entendemos el diseno', 'section' => 'nosotros', 'alt_text' => 'Proceso de diseno en detalle'],
            ['slot' => 'nosotros_process', 'label' => 'Acompanamiento - Imagen', 'section' => 'nosotros', 'alt_text' => 'Acompanamiento en el proceso'],

            ['slot' => 'contacto_image', 'label' => 'Contacto - Imagen', 'section' => 'contacto', 'alt_text' => 'Interior de espacio de diseno'],
        ];

        foreach ($slots as $slot) {
            SiteImage::create(array_merge($slot, ['path' => null]));
        }
    }
}