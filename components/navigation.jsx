"use client";

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import hockeyAcademyLogoB from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_09.png';
import hockeyAcademyLogo from 'public/hockeyacademycamp/hockeyacademycamp_logo.png';
import facebookIcon from 'public/images/facebook.svg';
import instagramIcon from 'public/images/instagram.svg';
import tiktokIcon from 'public/images/tiktok.svg';
import youtubeIcon from 'public/images/youtube.svg';

// { linkText: 'Eurohockey 2025', href: '/eurohockey' },
// { linkText: 'Hockey Tecnificación', href: '/hockeytecnificacion' }

const navItems = [
    { linkText: 'Inicio', href: '/' },
    { linkText: 'Próximos Eventos', href: '/eventosproximos' },
    { linkText: 'Campus Tecnificación Europa',
        subTitulos: [,
            { linkText: 'Campus Eurohockey', href: '/eurohockey' },
            { linkText: 'Hockey de Tecnificación', href: '/hockeytecnificacion' }
        ]
     },
     { linkText: 'Qué es Hockey Academy',
         subTitulos: [,
            { linkText: 'Acerca de HA', href: '/queeshockeyacademy' },
            { linkText: 'Quiénes Somos', href: '/quienessomos' },
            { linkText: 'Nuestro Staff', href: '/staff' },
         ]
      },
    { linkText: 'Benefecios HA Card', href: '/beneficioshacard' },
    { linkText: 'Imágenes de HA', href: '/haenimagenes' },
    { linkText: 'Capacitaciones', href: '/capacitaciones' },
    { linkText: 'Sponsors y Alianzas', href: '/sponsors' },
//    { linkText: 'Novedades', href: '/novedades' },
    { linkText: 'Contacto', href: '/contacto' }
];

const remToPixels = (rem) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

export function Navigation() {
    const pathname = usePathname();
    const [activePath, setActivePath] = useState(pathname);
    const [subMenuOpening, setOpenSubMenu] = useState(null); 
    const [menuOpen, setMenuOpen] = useState(false);

    const subMenuRefs = useRef([]);

    useEffect(() => {
        setActivePath(pathname);
    }, [pathname]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSubMenuToggle = (index) => {
        if (subMenuOpening === index) {
            closeSubMenu(index);
            setOpenSubMenu(null);
        } else {
            
            if (subMenuOpening !== null) {
                closeSubMenu(subMenuOpening);
            }
            openSubMenu(index);
            setOpenSubMenu(index);
        }
    };

    const handleLinkClick = () => {
        if (subMenuOpening !== null) {
            closeSubMenu(subMenuOpening);
            setOpenSubMenu(null);
        }
        // Close the entire menu when a link is clicked
        setMenuOpen(false);
    };

    const closeSubMenu = (index) => {
        const subMenu = subMenuRefs.current[index];
        const marginBottomPixels = remToPixels(0.75);
        subMenu.style.height = `${subMenu.scrollHeight + marginBottomPixels}px`;
        requestAnimationFrame(() => {
            subMenu.style.transition = 'height 0.382s ease-in-out, opacity 0.382s ease-in-out';
            subMenu.style.height = '0';
            subMenu.style.opacity = '0';
        });
    };

    const openSubMenu = (index) => {
        const subMenu = subMenuRefs.current[index];
        subMenu.style.height = '0';
        subMenu.style.opacity = '0';
        requestAnimationFrame(() => {
            const marginBottomPixels = remToPixels(0.75); 
            subMenu.style.transition = 'height 0.382s ease-in-out, opacity 0.382s ease-in-out';
            subMenu.style.height = `${subMenu.scrollHeight + marginBottomPixels}px`;
            subMenu.style.opacity = '1';
        });
    };

    const isSubItemActive = (subTitulos) => {
        return subTitulos.some(subItem => subItem.href === activePath);
    };

    const getLinkClass = (path, subTitulos) => {
        if (path === activePath) return 'text-[#53CDF8]';
        if (subTitulos && isSubItemActive(subTitulos)) return 'text-[#53CDF8]';
        return 'text-[rgba(255,255,255,0.8)]';
    };

    return (
        <nav className={` bg-transparent fixed top-0 left-0 inline-flex font-Cabin w-full h-20 md:w-min md:h-screen `}>

            <div className={` h-min inline-flex flex-row bg-[#12214d] z-50 md:pb-6 md:w-32 md:h-full md:flex-col transition-all ease-in-out duration-500 w-full `}>

                <div className={` py-2 px-4 flex     md:p-2 md:inline-block md:aspect-1 md:w-full `}>
                    <Link href='.\'>
                        <Image src={hockeyAcademyLogoB} alt={` `} className={` object-cover object-center h-14 w-auto md:w-24 md:h-auto md:mx-auto`} />
                    </Link>
                </div>
                <div className={` queverguenzaMenu pr-3 h-auto flex flex-grow items-center justify-end    md:flex-col md:p-0 md:justify-center `}>
                    <div className={` flex flex-raw cursor-pointer m-1.5   md:m-0 md:flex-col `} onClick={toggleMenu}>
                        <div className={` inline-block mx-3 font-semibold text-white text-lg uppercase md:my-1.5      md:block md:mx-0 `}>Menú</div>
                        <div className={` inline-flex h-6 w-7 relative cursor-pointer transition-all ease-in-out duration-200    md:m-auto `}>
                            <div className={`block mx-auto w-7 h-1 absolute         left-0 z-20 transition-all ease-in-out duration-[380ms] bg-white ${menuOpen ? 'top-2.5 queverguenzaMenuIconoBarraSupOpen' : ' top-0 queverguenzaMenuIconoBarraSupClose'} `}></div> 
                            <div className={`      mx-auto w-7 h-1 absolute top-2.5 left-0 z-10 transition-all ease-in-out duration-[380ms]            ${menuOpen ? ' bg-[#12214d]' : ' bg-white'} `}></div> 
                            <div className={`block mx-auto w-7 h-1 absolute         left-0 z-20 transition-all ease-in-out duration-[380ms] bg-white ${menuOpen ? 'top-2.5 queverguenzaMenuIconoBarraInfOpen' : ' top-5 queverguenzaMenuIconoBarraInfClose'} `}></div> 
                        </div>
                    </div>
                </div>
                <div className={` hidden grid-cols-2 grid-rows-2 gap-6 p-7    md:grid md:aspect-1 md:w-32 `}>
                    <Link href={` https://www.facebook.com/identity.campus.arg/ `} className={`inline-block `}><Image src={facebookIcon} alt={` `} className={` mx-auto `} /></Link>
                    <Link href={` https://www.instagram.com/hockeyacademyok/ `} className={`inline-block `}><Image src={instagramIcon} alt={` `} className={` mx-auto `} /></Link>
                    <Link href={` https://www.tiktok.com/@hockeyacademyok `} className={`inline-block `}><Image src={tiktokIcon} alt={` `} className={` mx-auto `} /></Link>
                    <Link href={` https://www.youtube.com/channel/UCug1CBwhTNIJ9rZFNGuu0_A `} className={` inline-block `}><Image src={youtubeIcon} alt={` `} className={` mx-auto `} /></Link>
                </div>

            </div>

            {!!navItems?.length && (
                <ul className={` inline-flex  font-semibold text-lg text-left md:text-right w-min px-8 z-40 h-screen     bg-[#12214d] items-start md:items-end justify-center transition-all ease-in-out duration-[382ms] leading-relaxed flex-col ${menuOpen ? 'mx-0 opacity-100 ' : 'opacity-0 -mr-96 md:-ml-96'} `}  >
                    {navItems.map((item, index) => (
                        <li key={index}>
                            {item.href && (
                                <Link href={item.href} onClick={handleLinkClick} className={`${getLinkClass(item.href)} hover:text-[#53CDF8] no-underline whitespace-nowrap`}>
                                    {item.linkText}
                                </Link>
                            )}
                            {item.subTitulos && (
                                <div>
                                    <div onClick={() => handleSubMenuToggle(index)} className={`${getLinkClass(item.href, item.subTitulos)} hover:text-[#53CDF8] cursor-pointer whitespace-nowrap `}> 
                                        {item.linkText}
                                    </div>
                                    <ul ref={el => subMenuRefs.current[index] = el} className={`h-0 opacity-0 leading-tight transition-all overflow-hidden `}>
                                        {item.subTitulos.map((subItem, subIndex) => (
                                            <li key={subIndex} className={` ml-3 md:mr-3 `}>
                                                <Link href={subItem.href} onClick={handleLinkClick} className={`${getLinkClass(subItem.href)} hover:text-[#53CDF8] no-underline text-sm whitespace-nowrap `}>
                                                    {subItem.linkText}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )} 

        </nav>
    );
}
