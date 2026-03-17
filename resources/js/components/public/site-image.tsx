import type { SiteImage as SiteImageType } from '@/types/site-image';

interface SiteImageProps {
    image: SiteImageType | undefined;
    className?: string;
}

export default function SiteImage({ image, className = '' }: SiteImageProps) {
    if (image?.path) {
        return (
            <img
                src={`/storage/${image.path}`}
                alt={image.alt_text ?? ''}
                className={className}
            />
        );
    }

    return (
        <div
            className={`flex items-center justify-center bg-[#E8E5E0] ${className}`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9A9A9A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
        </div>
    );
}