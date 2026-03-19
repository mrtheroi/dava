import CtaBand from '@/components/public/cta-band';
import HeroSection from '@/components/public/hero-section';
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

const furnitureTags = [
    { label: 'Sala', icon: 'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' },
    { label: 'Comedor', icon: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3' },
    { label: 'Cocina', icon: 'M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2M7 2v20M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7' },
    { label: 'Dormitorios', icon: 'M2 4v16M2 8h18a2 2 0 012 2v10M2 17h20M6 8v9' },
    { label: 'Bares', icon: 'M8 21h8M12 15v6M1.5 3h21l-2 9H3.5z' },
    { label: 'Baño', icon: 'M9 6l3-3 3 3M12 3v12M3 17h18M6 21h12' },
    { label: 'Oficina', icon: 'M20 7H4a2 2 0 00-2 2v10h20V9a2 2 0 00-2-2zM9 3h6v4H9z' },
    { label: 'Exterior y Jardines', icon: 'M12 2a10 10 0 0110 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM2 12h20' },
];

const decorTags = [
    { label: 'Decorativos', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { label: 'Luminarias', icon: 'M9 18h6M10 22h4M12 2v1M4.2 4.2l.7.7M1 12h1M19.8 4.2l-.7.7M23 12h-1M15 9a3 3 0 11-6 0 6 6 0 006 0z' },
    { label: 'Accesorios', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
    { label: 'Detalles únicos', icon: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 6v6l4 2' },
];

export default function Servicios({ images }: Props) {
    return (
        <PublicLayout darkHero>
            <Head title="Servicios" />

            {/* Hero */}
            <HeroSection
                image={getImage(images, 'services_hero_bg')}
                title="Servicios de diseño y fabricación a medida"
                subtitle="Transformamos tus ideas en piezas únicas, funcionales y con la calidad que tu espacio merece."
            />

            {/* Mobiliario a Medida */}
            <section className="bg-white px-12 py-[100px] max-[992px]:px-8 max-[992px]:py-[72px] max-md:px-5 max-md:py-14">
                <div className="dava-reveal mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-[60px] max-[992px]:grid-cols-1 max-[992px]:gap-10">
                    <div>
                        <h2 className="mb-5 font-[Montserrat] text-[clamp(1.8rem,3.5vw,40px)] font-semibold leading-normal tracking-[-0.02em] text-[#8D8989]">
                            Muebles diseñados para ti
                        </h2>
                        <p className="max-w-[600px] font-[Montserrat] text-2xl font-normal leading-[1.5] text-[#8D8989]">
                            Diseñamos y fabricamos mobiliario único para cada espacio de tu hogar o negocio, con materiales de primera y acabados impecables.
                        </p>
                    </div>
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                        <SiteImage image={getImage(images, 'services_furniture')} className="block h-full w-full object-cover transition-transform duration-600 ease-out hover:scale-[1.03]" />
                    </div>

                    {/* Tags */}
                    <div className="col-span-full mt-12 grid grid-cols-4 gap-y-6 max-[992px]:grid-cols-2 max-[992px]:gap-y-5">
                        {furnitureTags.map((tag) => (
                            <div
                                key={tag.label}
                                className="inline-flex items-center gap-2.5 font-[Montserrat] text-2xl font-normal leading-[1.5] text-[#8D8989] transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#C4A882]"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8BEB5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                    <path d={tag.icon} />
                                </svg>
                                {tag.label}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Accesorios y Decoración */}
            <section className="bg-white px-12 py-[100px] max-[992px]:px-8 max-[992px]:py-[72px] max-md:px-5 max-md:py-14">
                <div className="dava-reveal mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-[60px] max-[992px]:grid-cols-1 max-[992px]:gap-10">
                    <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                        <SiteImage image={getImage(images, 'services_decor')} className="block h-full w-full object-cover transition-transform duration-600 ease-out hover:scale-[1.03]" />
                    </div>
                    <div>
                        <h2 className="mb-5 font-[Montserrat] text-[clamp(1.8rem,3.5vw,40px)] font-semibold leading-normal tracking-[-0.02em] text-[#8D8989]">
                            Accesorios y Decoración
                        </h2>
                        <p className="max-w-[600px] font-[Montserrat] text-2xl font-normal leading-[1.5] text-[#8D8989]">
                            Complementamos tu espacio con accesorios decorativos, luminarias y detalles que le dan vida y personalidad a cada rincón.
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="col-span-full mt-12 grid grid-cols-4 gap-y-6 max-[992px]:grid-cols-2 max-[992px]:gap-y-5">
                        {decorTags.map((tag) => (
                            <div
                                key={tag.label}
                                className="inline-flex items-center gap-2.5 font-[Montserrat] text-2xl font-normal leading-[1.5] text-[#8D8989] transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#C4A882]"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8BEB5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                    <path d={tag.icon} />
                                </svg>
                                {tag.label}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CtaBand
                title="¿Listo para transformar tu espacio?"
                subtitle="Cuéntanos tu proyecto y diseñemos algo único juntos."
                ctaText="Escríbenos por WhatsApp"
                ctaHref="https://wa.me/5037875944?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20dise%C3%B1o."
            />
        </PublicLayout>
    );
}