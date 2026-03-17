import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { update } from '@/routes/admin/images';
import { logout } from '@/routes';
import type { SiteImage } from '@/types/site-image';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEvent, useRef, useState } from 'react';

interface Props {
    images: Record<string, SiteImage[]>;
}

const sectionLabels: Record<string, string> = {
    home: 'Home',
    servicios: 'Servicios',
    nosotros: 'Nosotros',
    contacto: 'Contacto',
};

function ImageCard({ image }: { image: SiteImage }) {
    const [open, setOpen] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);
    const { data, setData, post, processing, errors, reset } = useForm<{ image: File | null }>({
        image: null,
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!data.image) return;

        post(update.url(image.id), {
            forceFormData: true,
            onSuccess: () => {
                setOpen(false);
                reset();
            },
        });
    }

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <p className="mb-2 text-sm font-medium text-gray-700">{image.label}</p>
            <div className="mb-3 aspect-video overflow-hidden rounded-md bg-gray-100">
                {image.path ? (
                    <img src={`/storage/${image.path}`} alt={image.alt_text ?? ''} className="h-full w-full object-cover" />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#E8E5E0]">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9A9A9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                    </div>
                )}
            </div>
            <p className="mb-3 text-xs text-gray-400">{image.slot}</p>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full">
                        Cambiar imagen
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Cambiar: {image.label}</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <input
                                ref={fileRef}
                                type="file"
                                accept=".png"
                                onChange={(e) => setData('image', e.target.files?.[0] ?? null)}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-gray-100 file:px-4 file:py-2 file:text-sm file:font-medium hover:file:bg-gray-200"
                            />
                            {errors.image && <p className="mt-1 text-sm text-red-600">{errors.image}</p>}
                        </div>
                        {data.image && (
                            <div className="aspect-video overflow-hidden rounded-md bg-gray-100">
                                <img src={URL.createObjectURL(data.image)} alt="Preview" className="h-full w-full object-cover" />
                            </div>
                        )}
                        <Button type="submit" disabled={processing || !data.image} className="w-full">
                            {processing ? 'Subiendo...' : 'Subir imagen'}
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default function AdminIndex({ images }: Props) {
    return (
        <>
            <Head title="Admin - Imágenes" />
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <header className="border-b border-gray-200 bg-white px-6 py-4">
                    <div className="mx-auto flex max-w-7xl items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img src="/images/dava-logo.png" alt="DAVA Design" className="h-12" style={{ filter: 'brightness(0.3)' }} />
                            <span className="text-lg font-semibold text-gray-700">Panel de Administración</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
                                Volver al sitio
                            </Link>
                            <Link
                                href={logout.url()}
                                method="post"
                                as="button"
                                className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200"
                            >
                                Cerrar sesión
                            </Link>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="mx-auto max-w-7xl px-6 py-8">
                    <h1 className="mb-8 text-2xl font-bold text-gray-800">Imágenes del sitio</h1>

                    {['home', 'servicios', 'nosotros', 'contacto'].map((section) => (
                        <div key={section} className="mb-10">
                            <h2 className="mb-4 text-lg font-semibold text-gray-600">{sectionLabels[section]}</h2>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {(images[section] ?? []).map((image) => (
                                    <ImageCard key={image.id} image={image} />
                                ))}
                            </div>
                        </div>
                    ))}
                </main>
            </div>
        </>
    );
}