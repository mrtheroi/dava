import type { SiteImage as SiteImageType } from '@/types/site-image';

interface HeroSectionProps {
    image: SiteImageType | undefined;
    title: string;
    subtitle?: string;
    ctaText?: string;
    ctaHref?: string;
}

export default function HeroSection({ image, title, subtitle, ctaText, ctaHref }: HeroSectionProps) {
    const bgImage = image?.path ? `/storage/${image.path}` : undefined;

    return (
        <section
            className="dava-hero-overlay relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-[100px] text-center"
            style={bgImage ? { background: `url('${bgImage}') center/cover no-repeat` } : { background: '#555555' }}
        >
            <div className="relative z-[2] flex max-w-[844px] flex-col items-center gap-10">
                <h1 className="m-0 font-[Montserrat] text-[clamp(2.5rem,5vw,50px)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
                    {title}
                </h1>
                {subtitle && (
                    <p className="m-0 max-w-[844px] font-[Montserrat] text-[clamp(1rem,2vw,24px)] font-semibold leading-[1.5] text-white">
                        {subtitle}
                    </p>
                )}
                {ctaText && ctaHref && (
                    <a
                        href={ctaHref}
                        className="inline-block rounded-lg bg-[#C8BEB5] px-10 py-[18px] font-[Montserrat] text-[clamp(1rem,2vw,24px)] font-bold leading-[1.5] text-white no-underline transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-white hover:text-[#C8BEB5]"
                    >
                        {ctaText}
                    </a>
                )}
            </div>
        </section>
    );
}