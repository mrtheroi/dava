import Footer from '@/components/public/footer';
import Navbar from '@/components/public/navbar';
import { useReveal } from '@/hooks/use-reveal';
import type { PropsWithChildren } from 'react';

interface PublicLayoutProps extends PropsWithChildren {
    darkHero?: boolean;
}

export default function PublicLayout({ darkHero = false, children }: PublicLayoutProps) {
    useReveal();

    return (
        <div className="dava-site bg-white font-[DM_Sans] leading-[1.7] text-[#555555] antialiased">
            <Navbar darkHero={darkHero} />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
