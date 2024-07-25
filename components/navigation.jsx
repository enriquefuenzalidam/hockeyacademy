"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import identityLogo from 'public/images/identitylogo.png';
import facebookIcon from 'public/images/facebook.svg';
import instagramIcon from 'public/images/instagram.svg';
import tiktokIcon from 'public/images/tiktok.svg';
import youtubeIcon from 'public/images/youtube.svg';

const navItems = [
    { linkText: 'Inicio', href: '/' },
    { linkText: 'Viajes Deportivos',
        subTitulos: [
            { linkText: 'Eurohockey 2025', href: '/eurohockey2025' },
            { linkText: 'Hockey Tecnificación', href: '/hockeytecnificacion' }
        ]
     },
    { linkText: 'Campus de Tecnificación',
        subTitulos: [
            { linkText: 'Hockey Hierba Barcelona', href: '/hockeyhierbabarcelona' },
            { linkText: 'Hockey  Hierba Valencia', href: '/hockeyhierbavalencia' }
        ]
     },
    { linkText: 'Nosotros', href: '/nosotros' },
    { linkText: '¿Qué es un campus deportivo?', href: '/queesuncampodeportivo' },
    { linkText: 'Novedades', href: '/novedades' },
    { linkText: 'Classics', href: '/classics' }
];

export function Navigation() {
    const pathname = usePathname();
    const [activePath, setActivePath] = useState(pathname);

    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);

    const isSubItemActive = (subTitulos) => {
        return subTitulos.some(subItem => subItem.href === activePath);
    };

    const getLinkClass = (path, subTitulos) => {
        if (path === activePath) {
            return 'text-[#d11e82]';
        }
        if (subTitulos && isSubItemActive(subTitulos)) {
            return 'text-[#d11e82]';
        }
        return 'text-white';
    };

    return (
        <nav className="flex flex-grow font-Cabin font-semibold text-lg leading-8 bg-[#12214d] h-screen ">

            <div className="w-32 h-full inline-flex flex-col">{/* this block should cover the entire height of the screen */}

                <div className=" aspect-1 p-2">{/* this one has a given with and height */}
                    <Image className="w-full object-contain" src={identityLogo} alt="" />
                </div>
                <div className=" h-auto flex flex-grow items-center justify-center">{/* this one should cover all the rest of the height, and have its elements centered in the middle*/}
                    <span className=' font-Cabin text-white text-lg uppercase'>Menú</span>
                </div>
                <div className=" aspect-1 grid grid-cols-2 grid-rows-2 gap-6 p-7">{/* this one has also a given with and height */}
                    <Link href="" className="inline-block "><Image src={facebookIcon} alt="" /></Link>
                    <Link href="" className="inline-block "><Image src={instagramIcon} alt="" /></Link>
                    <Link href="" className="inline-block "><Image src={tiktokIcon} alt="" /></Link>
                    <Link href="" className="inline-block "><Image src={youtubeIcon} alt="" /></Link>
                </div>

            </div>

            {!!navItems?.length && (
                <ul className="h-screen inline-block">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            {item.href && (
                                <Link href={item.href} className={`${getLinkClass(item.href)} hover:text-[#d11e82] no-underline`}>
                                    {item.linkText}
                                </Link>
                            )}
                            {item.subTitulos && (
                                <details className='details-reset'>
                                    <summary className={`${getLinkClass(item.href, item.subTitulos)} hover:text-[#d11e82] cursor-pointer`}> 
                                        {item.linkText}
                                    </summary>
                                    <ul className="ml-3">
                                        {item.subTitulos.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link href={subItem.href} className={`${getLinkClass(subItem.href)} hover:text-[#d11e82] no-underline text-base`}>
                                                    {subItem.linkText}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}
                        </li>
                    ))}
                </ul>
            )} {/* */}
            
        </nav>
    );
}
