"use client";
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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

    const getLinkClass = (path) => (
        path === activePath ? 'text-[#d11e82]' : 'text-white'
    );

    return (
        <nav className="h-screen font-Cabin font-semibold text-lg leading-8 bg-[#12214d]">
            {!!navItems?.length && (
                <ul className="h-screen">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            {item.href && (
                                <Link href={item.href} className={`${getLinkClass(item.href)} hover:text-[#d11e82] no-underline`}>
                                    {item.linkText}
                                </Link>
                            )}
                            {item.subTitulos && (
                                <details className='details-reset'>
                                    <summary className={`${getLinkClass(item.href)} hover:text-[#d11e82] cursor-pointer`}>
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
            )}
        </nav>
    );
}
