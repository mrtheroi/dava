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

const differentiators = [
    {
        title: 'Proceso cuidado de principio a fin',
        desc: 'Desde la primera conversación hasta la instalación, cada etapa recibe atención personalizada.',
        icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    },
    {
        title: 'Funcionalidad duradera',
        desc: 'Diseñamos pensando en cómo vivís, creando piezas que combinan belleza con uso real.',
        icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    },
    {
        title: 'Ejecución precisa',
        desc: 'Cada corte, cada unión, cada acabado se realiza con estándares de calidad artesanal.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
        title: 'Calidad visible',
        desc: 'Trabajamos con materiales de primera y acabados que se notan al primer contacto.',
        icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    },
];

export default function Nosotros({ images }: Props) {
    return (
        <PublicLayout darkHero>
            <Head title="Nosotros" />

            {/* Hero */}
            <HeroSection
                image={getImage(images, 'nosotros_hero_bg')}
                title="Detrás de cada espacio, hay una historia"
                subtitle="Somos un estudio de diseño y fabricación que cree en crear con propósito."
            />

            {/* Quiénes somos */}
            <section className="bg-white px-12 py-[100px] max-[992px]:px-8 max-[992px]:py-[72px] max-md:px-5 max-md:py-14">
                <div className="dava-reveal mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-[60px] max-[992px]:grid-cols-1 max-[992px]:gap-10">
                    <div>
                        <h2 className="mb-5 font-[Montserrat] text-[clamp(1.8rem,3.5vw,40px)] font-semibold leading-normal tracking-[-0.02em] text-[#8D8989]">
                            Un estudio con visión propia
                        </h2>
                        <p className="max-w-[600px] font-[Montserrat] text-2xl font-normal leading-[1.5] text-[#8D8989]">
                            En DAVA Design creemos que un buen espacio cambia la forma en que vivís. Nos dedicamos a diseñar y fabricar mobiliario que no solo se ve bien — funciona, dura y tiene sentido.
                        </p>
                    </div>
                    <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                        <SiteImage image={getImage(images, 'nosotros_who')} className="block h-full w-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Cómo entendemos el diseño */}
            <section className="bg-white px-12 py-[100px] max-[992px]:px-8 max-[992px]:py-[72px] max-md:px-5 max-md:py-14">
                <div className="dava-reveal mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-[60px] max-[992px]:grid-cols-1 max-[992px]:gap-10">
                    <div className="order-first aspect-[3/4] overflow-hidden rounded-2xl max-[992px]:order-none">
                        <SiteImage image={getImage(images, 'nosotros_design')} className="block h-full w-full object-cover" />
                    </div>
                    <div>
                        <h2 className="mb-5 font-[Montserrat] text-[clamp(1.8rem,3.5vw,40px)] font-semibold leading-normal tracking-[-0.02em] text-[#8D8989]">
                            Cómo entendemos el diseño
                        </h2>
                        <p className="max-w-[600px] font-[Montserrat] text-2xl font-normal leading-[1.5] text-[#8D8989]">
                            El diseño no es solo lo que se ve. Es lo que se siente, lo que funciona y lo que perdura. Cada pieza que creamos tiene un pensamiento detrás: hacer tu vida más cómoda y tu espacio más tuyo.
                        </p>
                    </div>
                </div>
            </section>

            {/* Acompañamiento */}
            <section className="bg-white px-12 py-[100px] max-[992px]:px-8 max-[992px]:py-[72px] max-md:px-5 max-md:py-14">
                <div className="dava-reveal mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-[60px] max-[992px]:grid-cols-1 max-[992px]:gap-10">
                    <div>
                        <h2 className="mb-5 font-[Montserrat] text-[clamp(1.8rem,3.5vw,40px)] font-semibold leading-normal tracking-[-0.02em] text-[#8D8989]">
                            Acompañamiento en todo el proceso
                        </h2>
                        <p className="max-w-[600px] font-[Montserrat] text-2xl font-normal leading-[1.5] text-[#8D8989]">
                            No solo diseñamos y fabricamos. Estamos presentes en cada etapa: desde la idea inicial hasta la instalación final, asegurándonos de que todo sea exactamente como lo imaginaste.
                        </p>
                    </div>
                    <div className="aspect-[3/4] overflow-hidden rounded-2xl">
                        <SiteImage image={getImage(images, 'nosotros_process')} className="block h-full w-full object-cover" />
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section className="bg-white px-12 py-[100px] max-[992px]:px-8 max-[992px]:py-[72px] max-md:px-5 max-md:py-14">
                <div className="mx-auto max-w-[1200px]">
                    <h2 className="dava-reveal mb-5 font-[Montserrat] text-[clamp(1.8rem,3.5vw,40px)] font-semibold leading-normal tracking-[-0.02em] text-[#8D8989]">
                        Nuestros valores
                    </h2>
                    <div className="mt-12 grid grid-cols-2 gap-8 max-[992px]:grid-cols-1">
                        {differentiators.map((diff) => (
                            <div key={diff.title} className="dava-reveal py-6 transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5">
                                <div className="mb-4 h-12 w-12 text-[#C8BEB5]">
                                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={diff.icon} />
                                    </svg>
                                </div>
                                <h4 className="mb-2.5 font-[Montserrat] text-2xl font-bold leading-[1.5] text-[#C8BEB5]">
                                    {diff.title}
                                </h4>
                                <p className="font-[Montserrat] text-2xl font-normal leading-[1.5] text-[#8D8989]">
                                    {diff.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CtaBand
                title="Creemos que un buen espacio cambia todo."
                subtitle="Dejanos ser parte de tu próximo proyecto."
                ctaText="Escríbenos por WhatsApp"
                ctaHref="https://wa.me/5037875944?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20dise%C3%B1o."
            />
        </PublicLayout>
    );
}