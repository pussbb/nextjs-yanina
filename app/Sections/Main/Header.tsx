'use client'

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import useWindowSize from '@/hooks/useWindowSize';

const Header = () => {

    const pathname = usePathname();

    const [navOpen, setNavOpen] = useState(false);

    const { width } = useWindowSize();

    return (
        <header className="header fixed top-0 w-full shadow-md z-50	bg-theme-light">
            <nav className="navbar container">
                {/* logo */}
                <div className="order-0">
                    <Image
                        width={width > 768 ? 250 : 177}
                        height={57}
                        loading={'lazy'}
                        src={'/images/logo_name.svg'}
                        alt="website logo"
                    />
                </div>

                {/* navbar toggler */}
                <button
                    id="show-button"
                    className="order-2 flex cursor-pointer items-center md:hidden md:order-1 float-right"
                    onClick={() => setNavOpen(!navOpen)}
                >
                    {navOpen ? (
                        <svg className="h-6 fill-current" viewBox="0 0 20 20">
                            <title>Відкрити</title>
                            <polygon
                                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                                transform="rotate(45 10 10)"
                            />
                        </svg>
                    ) : (
                        <svg className="h-6 fill-current" viewBox="0 0 20 20">
                            <title>Закрити</title>
                            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
                        </svg>
                    )}
                </button>

                <div
                    id="nav-menu"
                    className={`order-3 md:order-1 ${
                        navOpen ? "max-h-[1000px]" : "max-h-0"
                    }`}
                >
                    <ul className="navbar-nav block w-full md:flex md:w-auto lg:space-x-2">
                        <li className="nav-item">
                            <Link
                                href={'/'}
                                className={`nav-link block py-1 ${
                                    pathname === '/' ? "nav-link-active" : ""
                                }`}
                            >
                                Головна
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href={'/online/demo'}
                                className={`nav-link block py-1 ${
                                    pathname === '/online/demo' ? "nav-link-active" : ""
                                }`}
                            >
                                Консультація
                            </Link>
                        </li>
                    </ul>

                </div>
                <div
                    className="d-flex order-1 ml-auto hidden min-w-[200px] items-center justify-end md:ml-0 md:flex md:order-2">
                    <Link className="btn btn-primary z-0 py-[14px]" href={'/order'} rel="">
                        Замовити
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
