import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-white px-12 pb-8 max-md:px-5">
            <div className="mx-auto grid max-w-[1200px] grid-cols-[2fr_1fr_1fr] items-start gap-12 max-[992px]:grid-cols-2 max-md:grid-cols-1 max-md:gap-8">
                {/* Brand */}
                <div>
                    <Link href="/" className="inline-block">
                        <img
                            src="/images/dava-logo-footer.svg"
                            alt="DAVA Design"
                            className="h-[57px] w-[256px]"
                        />
                    </Link>
                    <p className="mt-6 font-[Montserrat] text-base font-normal leading-6 text-[#8D8989]">
                        Diseño y fabricación de mobiliario a medida en El Salvador.
                    </p>
                </div>

                {/* Services */}
                <div>
                    <h5 className="mb-6 font-[Montserrat] text-base font-medium leading-6 text-[#444444]">
                        Servicios
                    </h5>
                    <Link href="/servicios" className="mb-6 block font-[Montserrat] text-base font-medium text-[#8D8989] no-underline transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#C4A882]">
                        Mobiliario a medida
                    </Link>
                    <Link href="/servicios" className="mb-6 block font-[Montserrat] text-base font-medium text-[#8D8989] no-underline transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#C4A882]">
                        Accesorios y decoración
                    </Link>
                    <Link href="/contacto" className="block font-[Montserrat] text-base font-medium text-[#8D8989] no-underline transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#C4A882]">
                        Asesoría de diseño
                    </Link>
                </div>

                {/* Contact */}
                <div>
                    <h5 className="mb-6 font-[Montserrat] text-base font-medium leading-6 text-[#444444]">
                        Contacto
                    </h5>
                    <a href="https://wa.me/5037875944" target="_blank" rel="noopener noreferrer" className="mb-6 block font-[Montserrat] text-base font-medium text-[#8D8989] no-underline transition-all duration-350 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#C4A882]">
                        WhatsApp: 7875 9449
                    </a>
                    <p className="mb-6 font-[Montserrat] text-base font-medium text-[#8D8989]">
                        Lunes a Viernes, 9am – 6pm
                    </p>

                    {/* Social */}
                    <div className="mt-6 flex gap-2">
                        <a href="#" className="inline-flex h-10 w-10 items-center justify-center hover:opacity-70">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#828282">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                        <a href="#" className="inline-flex h-10 w-10 items-center justify-center hover:opacity-70">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#828282">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}