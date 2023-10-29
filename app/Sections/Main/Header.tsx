'use client'

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {

    const pathname = usePathname();

    return (
        <header className="header">
            <nav className="navbar container sticky">
                {/* logo */}
                <div className="order-0">
                    <Image
                        priority
                        width={364}
                        height={77}
                        src={'/images/logo_name.svg'}
                        alt="website logo"
                    />
                </div>
                <div id="nav-menu" className={`order-3 md:order-1 max-h-0`} >
                    <ul className="navbar-nav block w-full md:flex md:w-auto lg:space-x-2">
                        <li className="nav-item">
                        <Link
                                href={'/'}
                                className={`nav-link block py-1 ${
                                    pathname === '/' ? "nav-link-active" : ""
                                }`}
                            >
                                Домашня
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex order-1 ml-auto hidden min-w-[200px] items-center justify-end md:ml-0 md:flex md:order-2">
                    <Link className="btn btn-primary z-0 py-[14px]" href={'/order'} rel="">
                        Купити
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
