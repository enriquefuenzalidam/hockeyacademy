"use client";
import VerticalVideo from 'components/verticalvideo';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Footer } from 'components/footer';
import Image from 'next/image';

import ViajesGaleria from 'components/viajesgaleria';

import hockeyacademycampimagen01 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_01.jpg';
import hockeyacademycampimagen02 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_02.jpg';
import hockeyacademycampimagen03 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_03.jpg';
import hockeyacademycampimagen04 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_04.jpg';
import hockeyacademycampimagen05 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_05.jpg';
import hockeyacademycampimagen06 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_06.jpg';
import hockeyacademycampimagen07 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_07.jpg';
import hockeyacademycampimagen08 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_08.jpg';
import hockeyacademycampimagen09 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_09.jpg';
import hockeyacademycampimagen10 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_10.jpg';
import hockeyacademycampimagen11 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_11.jpg';
import hockeyacademycampimagen12 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_12.jpg';
import hockeyacademycampimagen13 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_13.jpg';
import hockeyacademycampimagen14 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_14.jpg';
import hockeyacademycampimagen15 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_15.jpg';
import hockeyacademycampimagen16 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_16.jpg';
import hockeyacademycampimagen17 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_17.jpg';
import hockeyacademycampimagen18 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_18.jpg';
import hockeyacademycampimagen19 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_19.jpg';
import hockeyacademycampimagen20 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_20.jpg';
import hockeyacademycampimagen21 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_21.jpg';
import hockeyacademycampimagen22 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_22.jpg';
import hockeyacademycampimagen23 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_23.jpg';
import hockeyacademycampimagen24 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_24.jpg';
import hockeyacademycampimagen25 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_25.jpg';

const hockeyacademycampimagenes = [
    hockeyacademycampimagen01,
    hockeyacademycampimagen02,
    hockeyacademycampimagen03,
    hockeyacademycampimagen04,
    hockeyacademycampimagen05,
    hockeyacademycampimagen06,
    hockeyacademycampimagen07,
    hockeyacademycampimagen08,
    hockeyacademycampimagen09,
    hockeyacademycampimagen10,
    hockeyacademycampimagen11,
    hockeyacademycampimagen12,
    hockeyacademycampimagen13,
    hockeyacademycampimagen14,
    hockeyacademycampimagen15,
    hockeyacademycampimagen16,
    hockeyacademycampimagen17,
    hockeyacademycampimagen18,
    hockeyacademycampimagen19,
    hockeyacademycampimagen20,
    hockeyacademycampimagen21,
    hockeyacademycampimagen22,
    hockeyacademycampimagen23,
    hockeyacademycampimagen24,
    hockeyacademycampimagen25

];


import hockeyacademycampsponsor01 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_01.png';
import hockeyacademycampsponsor02 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_02.png';
import hockeyacademycampsponsor03 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_03.png';
import hockeyacademycampsponsor04 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_04.png';
import hockeyacademycampsponsor05 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_05.png';
import hockeyacademycampsponsor06 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_06.png';
import hockeyacademycampsponsor07 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_07.png';
import hockeyacademycampsponsor08 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_08.png';

const sponsorsha = [
    hockeyacademycampsponsor01,
    hockeyacademycampsponsor02,
    hockeyacademycampsponsor03,
    hockeyacademycampsponsor04,
    hockeyacademycampsponsor05,
    hockeyacademycampsponsor06,
    hockeyacademycampsponsor07
];

const alianzestrtgha = [
    hockeyacademycampsponsor08
];


export default function Capacitaciones() {


    return (

        <main className={`block relative z-0 w-full pl-0 md:pl-32 mt-[4.4rem] md:mt-0`}>

            <section className={` block relative w-full h-[50vh] bg-black `}>
                <div className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full `}>
                    <video poster='hockeyacademycamp/hockeyacademyinicio.jpg' className='object-cover object-center w-full h-full aspect-[24/11]' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src='hockeyacademycamp/hockeyacademyinicio_b.mp4' type="video/mp4" />
                    </video>
                </div>
                <div className={` block absolute left-0 top-0 w-full h-full bg-black opacity-60 `} />
                <div className={` relative z-30 flex flex-col justify-center items-center w-full h-full `}>
                    <h2 data-aos-once="true" data-aos="zoom-out-down" className={` block w-full relative text-center tracking-wide font-BebasNeue text-[#BAECFF] text-6xl mx-8 `} style={{ textShadow: `0 0 1rem rgba(0,0,0,1),0 0 2rem rgba(0,0,255,0.5)` }}>Capacitaciones</h2>
                </div>
            </section>

            <div className={` relative bg-otoFondo `}>
                <div className={` absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0)] `} />
                <div className={` absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0)] `} />
                <div className={` absolute inset-0 opacity-10 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />


                <div className={` relative z-30 pt-16 `}>
                    <section className={` relative text-white text-center max-w-5xl mx-auto `} >
                                <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 mb-6 text-[#000] `}>En construcción</h2>
                                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#BAECFF] mb-6 `} />
                    </section>
                </div>
                <div className={`  bg-whiteFadedFondo`}>
                    <section className={` relative mx-auto max-w-5xl z-30 pt-28 pb-10`}>
                        <h2 data-aos-once="true" data-aos="zoom-out-down" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>En construcción</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />

                    </section>

                </div>
                <Footer />
            </div>
        </main>

    );
}
