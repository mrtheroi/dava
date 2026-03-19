import { Link, usePage } from '@inertiajs/react';
import { useCallback, useEffect, useState } from 'react';

interface NavbarProps {
    darkHero?: boolean;
}

export default function Navbar({ darkHero = false }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { url } = usePage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMobile = useCallback(() => setMobileOpen(false), []);

    const isActive = (path: string) => url === path;

    const linkColor = darkHero && !scrolled ? 'text-white/85 hover:text-white' : 'text-[#8D8989] hover:text-[#2D2D2D]';
    const btnBorder = darkHero && !scrolled ? 'border-white text-white hover:bg-white hover:text-[#2D2D2D]' : 'border-[#2D2D2D] text-[#2D2D2D] hover:bg-[#2D2D2D] hover:text-white';
    const hamburgerColor = darkHero && !scrolled ? 'bg-white' : 'bg-[#2D2D2D]';
    const logoFilter = darkHero && !scrolled ? 'brightness(0) invert(1)' : 'brightness(0.3)';

    return (
        <>
            <nav
                className={`fixed top-0 right-0 left-0 z-[1000] flex items-center justify-between transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    scrolled
                        ? 'mt-0 bg-white/95 px-12 py-[18px] shadow-[0_1px_20px_rgba(0,0,0,0.06)] backdrop-blur-[20px]'
                        : 'mt-[52px] px-12 py-[18px]'
                }`}
            >
                <Link href="/" className="flex items-center gap-2.5 no-underline">
                    <img
                        src="/images/dava-logo.png"
                        alt="DAVA Design"
                        className={`h-[90px] w-auto object-contain transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] ${scrolled ? '!h-[70px]' : ''}`}
                        style={{ filter: scrolled ? 'brightness(0.3)' : logoFilter }}
                    />
                </Link>

                <div className="hidden h-[56px] w-[426px] items-center justify-end gap-9 lg:flex">
                    {[
                        { href: '/servicios', label: 'Servicios' },
                        { href: '/nosotros', label: 'Nosotros' },
                    ].map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`dava-nav-link relative font-[Montserrat] text-xl font-semibold leading-[30px] no-underline transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] ${linkColor} ${isActive(href) ? '!text-[#2D2D2D]' : ''} ${darkHero && !scrolled ? 'dava-dark-hero' : ''}`}
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        href="/contacto"
                        className={`rounded-md border-[1.5px] px-[22px] py-2 font-[Montserrat] text-base font-black uppercase leading-6 no-underline transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] ${btnBorder}`}
                    >
                        Contáctanos
                    </Link>
                </div>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className={`z-[1001] flex flex-col gap-[5px] cursor-pointer p-2 lg:hidden ${mobileOpen ? 'active' : ''}`}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block h-[2px] w-6 transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] ${mobileOpen ? 'translate-x-[5px] translate-y-[5px] rotate-45 bg-[#2D2D2D]' : hamburgerColor}`}
                    />
                    <span
                        className={`block h-[2px] w-6 transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] ${mobileOpen ? 'opacity-0' : hamburgerColor}`}
                    />
                    <span
                        className={`block h-[2px] w-6 transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] ${mobileOpen ? 'translate-x-[5px] -translate-y-[5px] -rotate-45 bg-[#2D2D2D]' : hamburgerColor}`}
                    />
                </button>
            </nav>

            {/* Mobile Nav */}
            <div
                className={`fixed top-0 z-[999] flex h-screen w-full flex-col items-center justify-center gap-8 bg-white transition-[right] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden ${
                    mobileOpen ? 'right-0' : '-right-full'
                }`}
            >
                {[
                    { href: '/servicios', label: 'Servicios' },
                    { href: '/nosotros', label: 'Nosotros' },
                    { href: '/contacto', label: 'Contáctanos' },
                ].map(({ href, label }) => (
                    <Link
                        key={href}
                        href={href}
                        onClick={closeMobile}
                        className="font-[Cormorant_Garamond] text-3xl font-normal text-[#2D2D2D] no-underline transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#C4A882]"
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </>
    );
}