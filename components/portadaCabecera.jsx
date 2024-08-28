"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import proximamente from 'public/images/proximamente.jpg';
import chevronLeft from 'public/images/chevronLeft.svg';
import chevronRight from 'public/images/chevronRight.svg';

import eurohockey2023 from 'public/images/IDentity-Campus-Eurohockey-2023.mp4';
import tecnificacion2023 from 'public/images/IDentity-Campus-Tecnificacion-2023.mp4';
import capsulaTecnificacioin from 'public/images/IDentity-Campus-Capsula-Tecnificacion.mp4';

import eurohockeyviajesgaleria01 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria01.webp';
import eurohockeyviajesgaleria02 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria02.webp';
import eurohockeyviajesgaleria03 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria03.webp';
import eurohockeyviajesgaleria04 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria04.webp';
import eurohockeyviajesgaleria05 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria05.webp';
import eurohockeyviajesgaleria06 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria06.webp';
import eurohockeyviajesgaleria07 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria07.webp';
import eurohockeyviajesgaleria08 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria08.webp';
import eurohockeyviajesgaleria09 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria09.webp';
import eurohockeyviajesgaleria10 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria10.webp';
import eurohockeyviajesgaleria11 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria11.webp';
import eurohockeyviajesgaleria12 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria12.webp';
import eurohockeyviajesgaleria13 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria13.webp';
import eurohockeyviajesgaleria14 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria14.webp';
import eurohockeyviajesgaleria15 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria15.webp';
import eurohockeyviajesgaleria16 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria16.webp';
import eurohockeyviajesgaleria17 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria17.webp';
import eurohockeyviajesgaleria18 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria18.webp';
import eurohockeyviajesgaleria19 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria19.webp';
import eurohockeyviajesgaleria20 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria20.webp';
import eurohockeyviajesgaleria21 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria21.webp';
import eurohockeyviajesgaleria22 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria22.webp';
import eurohockeyviajesgaleria23 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria23.webp';
import eurohockeyviajesgaleria24 from 'public/eurohockeyviajesgaleria/euroHockeyViajesGaleria24.webp';

const eurohockeyviajesgaleria = [
    eurohockeyviajesgaleria01,
    eurohockeyviajesgaleria02,
    eurohockeyviajesgaleria03,
    eurohockeyviajesgaleria04,
    eurohockeyviajesgaleria05,
    eurohockeyviajesgaleria06,
    eurohockeyviajesgaleria07,
    eurohockeyviajesgaleria08,
    eurohockeyviajesgaleria09,
    eurohockeyviajesgaleria10,
    eurohockeyviajesgaleria11,
    eurohockeyviajesgaleria12,
    eurohockeyviajesgaleria13,
    eurohockeyviajesgaleria14,
    eurohockeyviajesgaleria15,
    eurohockeyviajesgaleria16,
    eurohockeyviajesgaleria17,
    eurohockeyviajesgaleria18,
    eurohockeyviajesgaleria19,
    eurohockeyviajesgaleria20,
    eurohockeyviajesgaleria21,
    eurohockeyviajesgaleria22,
    eurohockeyviajesgaleria23,
    eurohockeyviajesgaleria24
]


export function Portadacabecera() {
    const enlaceRefs = useRef([]);
    const enlaceRefsB = useRef([]);
    const fondoRefs = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fondoCambio = (index) => {
        return () => fondoRefs.current.forEach((videoRef, idx) => videoRef && (idx === index ? (videoRef.classList.remove('opacity-0'), videoRef.classList.add('opacity-100')) : (videoRef.classList.add('opacity-0'), videoRef.classList.remove('opacity-100'))));
    };

    useEffect(() => {
        const currentRefs = enlaceRefs.current; // Store the current value of enlaceRefs.current

        currentRefs.forEach((linkRef, index) => {
            if (linkRef) {
                const changeBackground = fondoCambio(index); // Create the handler once
                linkRef.addEventListener('mouseover', changeBackground);
                // Store the handler function on the element, so it can be used in cleanup
                linkRef._changeBackground = changeBackground;
            }
        });

        return () => {
            currentRefs.forEach((linkRef) => {
                if (linkRef && linkRef._changeBackground) {
                    linkRef.removeEventListener('mouseover', linkRef._changeBackground);
                }
            });
        };
    }, []);

    useEffect(() => {

        enlaceRefsB.current.forEach((linkRef, idx) => {
            linkRef && (
                linkRef.classList.toggle('opacity-100', idx === currentIndex),
                linkRef.classList.toggle('opacity-0', idx !== currentIndex))
        });

        fondoRefs.current.forEach((videoRef, idx) => {
            videoRef && (
                videoRef.classList.toggle('opacity-100', idx === currentIndex),
                videoRef.classList.toggle('opacity-0', idx !== currentIndex))
        });

    }, [currentIndex]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? enlaceRefsB.current.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === enlaceRefsB.current.length - 1 ? 0 : prevIndex + 1));
    };

    const links = [
        { text: 'Viaje Hockey con Evento', href: '/eurohockey' },
        { text: 'Viaje Hockey Tecnificación', href: '/' },
        { text: 'Tecnificaciones España', href: '/' },
        { text: 'Torneos Internacionales', href: '/' },
    ];

    return (
        <section className='block relative w-full h-screen bg-black'>

            <div className="relative hidden md:grid md:grid-cols-4 w-full h-full z-30">
                {links.map((link, index) => (
                    <Link
                        href={link.href}
                        key={index}
                        ref={el => enlaceRefs.current[index] = el}
                        className={`pb-8 text-opacity-100 border-opacity-40 hover:pb-24 hover:text-opacity-50 transition-all ease-linear duration-200 px-6 font-semibold text-left text-white text-2xl flex items-end justify-center leading-tight ${index !== 0 ? 'border-opacity-4 border-l-2 border-solid border-white' : ''}`}
                    >
                        {link.text}
                    </Link>
                ))}
            </div>

            <div className="relative md:hidden w-full h-full z-30">
                <span onClick={handlePrev} className="z-20 transition-all ease-linear duration-[236ms] cursor-pointer flex items-center justify-center absolute md:hidden left-0 top-1/2 -translate-y-1/2 h-24 w-auto opacity-60 hover:opacity-100">
                    <Image src={chevronLeft} className="h-24 w-auto" alt='' />
                </span>
                <span onClick={handleNext} className="z-20 transition-all ease-linear duration-[236ms] cursor-pointer flex items-center justify-center absolute md:hidden right-0 top-1/2 -translate-y-1/2 h-24 w-auto opacity-60 hover:opacity-100">
                    <Image src={chevronRight} className="h-24 w-auto" alt='' />
                </span>

                {links.map((link, index) => (
                    <Link key={index} href={link.href} ref={el => enlaceRefsB.current[index] = el} className={`z-10 absolute left-0 top-0 p-8 text-opacity-100 transition-all ease-linear duration-[236ms] font-semibold text-left text-white text-2xl w-full h-full flex items-end justify-start leading-tight ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                        {link.text}
                    </Link>
                ))}
            </div>

            {['Hockey-22-Entrenamiento.jpg', 'Hockey-22-Entrenamiento-II.jpg', '3.jpg', proximamente].map((src, index) => (
                <div key={index} ref={el => fondoRefs.current[index] = el} className={`opacity-0 transition-all ease-linear duration-[382ms] absolute top-0 left-0 w-full h-full z-10 ${index === 0 ? 'opacity-100' : ''}`}>
                    {index < 3 ? (
                        <video poster={`images/${src}`} className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                            <source src={`${index === 0 ? eurohockey2023 : index === 1 ? tecnificacion2023 : capsulaTecnificacioin}`} type="video/mp4" />
                        </video>
                    ) : (
                        <Image src={src} className='object-cover object-center w-full h-full' alt="" />
                    )}
                </div>
            ))}

        </section>
    );
}
