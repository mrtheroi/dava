import SiteImage from '@/components/public/site-image';
import PublicLayout from '@/layouts/public/public-layout';
import type { SiteImage as SiteImageType } from '@/types/site-image';
import { Head } from '@inertiajs/react';

interface Props {
    images: SiteImageType[];
}

function getImage(images: SiteImageType[], slot: string) {
    return images.find((i) => i.slot === slot);
}

export default function Contacto({ images }: Props) {
    return (
        <PublicLayout>
            <Head title="Contacto" />

            <section className="flex min-h-screen items-center bg-white px-12 pt-[120px] pb-20 max-[992px]:px-8 max-md:px-5">
                <div className="dava-reveal mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-[60px] max-[992px]:grid-cols-1 max-[992px]:gap-10">
                    <div>
                        <h1 className="mb-6 font-[Montserrat] text-[clamp(2.5rem,5vw,50px)] font-bold leading-normal tracking-[-0.02em] text-[#8D8989]">
                            Hablemos de tu proyecto
                        </h1>
                        <p className="mb-4 font-[Montserrat] text-2xl font-semibold leading-[1.5] text-[#8D8989]">
                            ¿Tenés una idea, un espacio o un sueño que querés hacer realidad?
                        </p>
                        <p className="mb-4 font-[Montserrat] text-2xl font-normal leading-[1.5] text-[#8D8989]">
                            Escribinos por <strong className="font-semibold">WhatsApp</strong> y conversemos. Sin compromiso, sin formularios — solo una conversación directa para entender lo que necesitás.
                        </p>

                        <a
                            href="https://wa.me/5037875944?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20dise%C3%B1o."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-[DM_Sans] text-[0.95rem] font-medium text-white no-underline transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:bg-[#1ea952] hover:shadow-[0_8px_24px_rgba(37,211,102,0.3)]"
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Iniciar conversación por WhatsApp
                        </a>

                        <p className="mt-6 font-[Montserrat] text-base font-normal leading-[1.5] text-[#8D8989]">
                            Respondemos de lunes a viernes, de 9am a 6pm.
                        </p>
                    </div>
                    <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                        <SiteImage image={getImage(images, 'contacto_image')} className="h-full w-full object-cover" />
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}