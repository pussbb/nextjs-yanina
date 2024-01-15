import Image from "next/image";
import Link from "next/link";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import Social from '@/app/components/Social';

const Footer = () => {
    const { footer } = menu;
    return (
        <footer className="section bg-theme-light pb-0">
            <div className="container">
                {/* footer menu */}
                <div className="row">
                    {footer.map((col) => {
                        return (
                            <div className="mb-12 sm:col-6 lg:col-3" key={col.name}>
                                <b>{ col.name }</b>
                                <ul className="mt-6">
                                    {col?.menu.map((item: Record<string, any>) => (
                                        <li className="mb-1" key={item.text}>
                                            <Link href={item.url} rel="">
                                                {item.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                    {/* social icons */}
                    <div className="md-12 sm:col-6 lg:col-3">
                        <Link href="/" aria-label="Bigspring">
                            <Image
                                width={364}
                                height={77}
                                loading={'lazy'}
                                src={'/images/logo_name.svg'}
                                alt="website logo"
                            />
                        </Link>
                        <Social source={social} className="social-icons mt-4 mb-8" />
                    </div>
                </div>
                {/* copyright */}
                <div className="border-t border-border py-6">
                    Designed and Developed for Yanina Popesko. Copyright © { new Date().getFullYear() }
                </div>
            </div>
        </footer>
    );
};

export default Footer;
