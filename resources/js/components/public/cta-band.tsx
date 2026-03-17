import type { SiteImage as SiteImageType } from '@/types/site-image';

interface CtaBandProps {
    image?: SiteImageType | undefined;
    title: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
}

export default function CtaBand({ image, title, subtitle, ctaText, ctaHref }: CtaBandProps) {
    const bgImage = image?.path ? `/storage/${image.path}` : undefined;

    return (
        <section className="relative overflow-hidden bg-white px-12 pt-[60px] pb-20 text-center max-md:px-5">
            <div
                className="dava-cta-overlay relative mx-auto max-w-[1100px] overflow-hidden rounded-[20px] px-12 py-20"
                style={bgImage ? { background: `url('${bgImage}') center/cover no-repeat` } : { background: '#777777' }}
            >
                <div className="relative z-[2] mx-auto max-w-[1200px]">
                    <h2 className="mb-3 font-[Montserrat] text-[clamp(1.1rem,2vw,24px)] font-bold leading-[1.5] text-white">
                        {title}
                    </h2>
                    <p className="mb-8 font-[Montserrat] text-[clamp(1rem,2vw,24px)] font-bold leading-[1.5] text-white">
                        {subtitle}
                    </p>
                    <a
                        href={ctaHref}
                        className="inline-block rounded-lg bg-[#C8BEB5] px-6 py-3.5 font-[Montserrat] text-[clamp(1rem,2vw,24px)] font-bold leading-[1.5] text-white no-underline transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-white hover:text-[#C8BEB5]"
                    >
                        {ctaText}
                    </a>
                </div>
            </div>
            <hr className="mx-auto mt-10 max-w-[1100px] border-t border-[#E8E5E0]" />
        </section>
    );
}