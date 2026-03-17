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

export default function Home({ images }: Props) {
    return (
        <PublicLayout darkHero>
            <Head title="Inicio" />

            {/* Hero */}
            <HeroSection
                image={getImage(images, 'home_hero_bg')}
                title="Diseño que se adapta a ti"
                subtitle="Mobiliario a medida que transforma cada espacio en una experiencia única, funcional y con personalidad propia."
                ctaText="Conversemos sobre tu proyecto"
                ctaHref="https://wa.me/5037875944?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20dise%C3%B1o."
            />

            {/* About Preview */}
            <section className="bg-white px-12 py-[100px] max-[992px]:px-8 max-[992px]:py-[72px] max-md:px-5 max-md:py-14">
                <div className="dava-reveal mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-[60px] max-[992px]:grid-cols-1 max-[992px]:gap-10">
                    <div>
                        <h2 className="mb-5 font-[Montserrat] text-[clamp(1.8rem,3.5vw,40px)] font-semibold leading-normal tracking-[-0.02em] text-[#8D8989]">
                            Diseño con propósito
                        </h2>
                        <p className="max-w-[600px] font-[Montserrat] text-xl font-normal leading-[1.2] text-[#8D8989]">
                            Cada proyecto nace de escucharte. Diseñamos mobiliario que refleja tu estilo de vida.
                        </p>
                        <div className="mt-6 flex flex-col gap-2.5">
                            {['Diseño a tu medida', 'Calidad en cada detalle', 'Acompañamiento total', 'Soluciones completas'].map((value) => (
                                <span key={value} className="dava-value-bullet inline-flex items-center gap-2 font-[Montserrat] text-xl font-semibold leading-[1.2] text-[#8D8989]">
                                    {value}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-md:grid-cols-2">
                        <div className="overflow-hidden rounded-[10px] max-md:row-span-1 md:row-span-2">
                            <SiteImage image={getImage(images, 'home_about_1')} className="h-full w-full object-cover transition-transform duration-600 ease-out hover:scale-[1.04]" />
                        </div>
                        <div className="aspect-[3/4] overflow-hidden rounded-[10px]">
                            <SiteImage image={getImage(images, 'home_about_2')} className="h-full w-full object-cover transition-transform duration-600 ease-out hover:scale-[1.04]" />
                        </div>
                        <div className="aspect-[3/4] overflow-hidden rounded-[10px]">
                            <SiteImage image={getImage(images, 'home_about_3')} className="h-full w-full object-cover transition-transform duration-600 ease-out hover:scale-[1.04]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Statement */}
            <section className="bg-white px-12 py-20 text-center max-md:px-5">
                <div className="dava-reveal">
                    <h2 className="font-[Montserrat] text-[clamp(1.5rem,2.5vw,32px)] font-semibold leading-[1.5] text-[#C8BEB5]">
                        Diseño que transforma, fabricación que perdura
                    </h2>
                </div>
            </section>

            {/* Gallery */}
            <section className="bg-white px-12 pt-5 pb-[100px] max-md:px-5">
                <div className="dava-reveal mx-auto grid max-w-[1200px] grid-cols-2 grid-rows-[260px_260px] gap-5 max-[992px]:grid-rows-[280px_280px] max-md:grid-cols-1 max-md:grid-rows-[240px_240px_240px]">
                    <div className="col-start-1 row-span-2 overflow-hidden rounded-[10px] max-md:col-auto max-md:row-auto">
                        <SiteImage image={getImage(images, 'home_gallery_1')} className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]" />
                    </div>
                    <div className="overflow-hidden rounded-[10px]">
                        <SiteImage image={getImage(images, 'home_gallery_2')} className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]" />
                    </div>
                    <div className="overflow-hidden rounded-[10px]">
                        <SiteImage image={getImage(images, 'home_gallery_3')} className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]" />
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="bg-white px-12 py-[100px] max-[992px]:px-8 max-[992px]:py-[72px] max-md:px-5 max-md:py-14">
                <div className="mx-auto grid max-w-[1200px] grid-cols-2 items-start gap-20 max-[992px]:grid-cols-1 max-[992px]:gap-10">
                    <div>
                        <h2 className="dava-reveal mb-5 font-[Montserrat] text-[clamp(1.8rem,3.5vw,40px)] font-semibold leading-normal tracking-[-0.02em] text-[#8D8989]">
                            Nuestro proceso
                        </h2>
                        <div className="flex flex-col gap-9">
                            {[
                                { title: 'Consulta y Brief', desc: 'Escuchamos tus ideas, necesidades y estilo de vida para entender el proyecto.' },
                                { title: 'Diseño y Propuestas', desc: 'Creamos propuestas de diseño personalizadas con renders y materiales.' },
                                { title: 'Fabricación', desc: 'Fabricamos cada pieza con atención al detalle y materiales de calidad.' },
                                { title: 'Entrega e Instalación', desc: 'Coordinamos la entrega e instalación profesional en tu espacio.' },
                                { title: 'Garantía y Acompañamiento', desc: 'Te acompañamos después de la entrega con garantía y soporte.' },
                            ].map((step, i) => (
                                <div
                                    key={step.title}
                                    className={`dava-reveal dava-process-step dava-reveal-delay-${i + 1} relative border-l-2 border-[#C8BEB5] pl-8 transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#C4A882]`}
                                >
                                    <h4 className="mb-1.5 font-[Montserrat] text-xl font-bold text-[#C8BEB5]">
                                        {step.title}
                                    </h4>
                                    <p className="font-[Montserrat] text-[0.92rem] leading-[1.7] text-[#8D8989]">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sticky top-[120px] overflow-hidden rounded-2xl">
                        <SiteImage image={getImage(images, 'home_process')} className="block h-auto w-full" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CtaBand
                image={getImage(images, 'home_cta_bg')}
                title="¿Tenés un proyecto en mente?"
                subtitle="Conversemos y hagamos realidad el espacio que siempre quisiste."
                ctaText="Escríbenos por WhatsApp"
                ctaHref="https://wa.me/5037875944?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20de%20dise%C3%B1o."
            />
        </PublicLayout>
    );
}