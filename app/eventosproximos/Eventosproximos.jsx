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

const sponsors = [
    hockeyacademycampsponsor01,
    hockeyacademycampsponsor02,
    hockeyacademycampsponsor03,
    hockeyacademycampsponsor04,
    hockeyacademycampsponsor05,
    hockeyacademycampsponsor06,
    hockeyacademycampsponsor07,
    hockeyacademycampsponsor08
];


export default function Eventosproximos() {


    return (

        <main className={`block relative z-0 w-full pl-0 md:pl-32 mt-[4.4rem] md:mt-0`}>

            <section className={` block relative w-full aspect-[16/7] bg-black z-30 `}>
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <video poster='images/Hockey-22-Entrenamiento-II.jpg' className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src='images/IDentity-Campus-Tecnificacion-2023.mp4' type="video/mp4" />
                    </video>
                </div>
            </section>

            <div className={` relative bg-otoFondo `}>
                <div className={` absolute inset-0 opacity-15 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />


                <div className={` relative z-30 pt-16 `}>
                    <div className={` absolute top-0 left-0 w-full h-14 bg-gradient-to-b from-[rgba(0,0,0,0.6)] to-transparent `} />
                    <section className={` relative text-white text-center max-w-5xl mx-auto `} >
                        <div className={` flex flex-col gap-24 md:gap-5 mb-24 items-center justify-center `}>
                            <div>
                                <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 mb-6 text-[#000] `}>Eventos próximos</h2>
                                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#BAECFF] mb-6 `} />
                                <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] `}>Summer Camp sub-13</h2>
                                <p className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >Diciembre de 2024<br />desde 16 hasta el 19.</p>
                                <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Summer Camp +13</h2>
                                <p className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >Diciembre de 2024<br />desde 20 hasta el 22.</p>
                                <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Summer Camp</h2>
                                <p className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >Enero de 2025<br />desde 10 hasta el 13.</p>
                                <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Actividad Especial</h2>
                                <p className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >Febrero de 2025<br />desde 17 en adelante.</p>
                                <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-4 italic text-[#5fd2ff] mt-6 `}>Comienzo Academia 2025</h2>
                                <p className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto `} >Marzo de 2025, lunes 3.</p>
                            </div>
                        </div>

                        <p className={` font-RobotoCondensed font-bold text-md sm:text-lg md:text-xl uppercase leading-loose mt-6 mb-24 `}>
                            <Link className={` text-white text-opacity-80 hover:text-opacity-100 hover:text-black inline-block py-1 px-3 sm:px-4 md:px-6 bg-blue-950 hover:bg-[#BAECFF] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300 `} href="mailto:hockeyacademychile@gmail.com">
                                Escríbenos y reserva tu cupo
                                <svg className={` inline-block w-6 sm:w-8 md:w-12 ml-4`} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
                                    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg></Link></p>

                    </section>
                </div>
                <div className={`  bg-whiteFadedFondo`}>
                    <section className={` relative mx-auto max-w-5xl z-30 pt-28 pb-10`}>
                        <h2 data-aos-once="true" data-aos="zoom-out-down" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Hockey Academy Camp en Videos</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />

                        <div className={` grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-2 px-4 gx:px-0 `}>

                            {['hockeyacademycamp/hockeyacademycamp_video_01.mp4',
                                'hockeyacademycamp/hockeyacademycamp_video_02.mp4',
                                'hockeyacademycamp/hockeyacademycamp_video_03.mp4',
                                'hockeyacademycamp/hockeyacademycamp_video_04.mp4'
                            ].map((videoSrc, index) => (<VerticalVideo key={index} videoSrc={videoSrc} />))}

                        </div>
                    </section>

                    <ViajesGaleria
                        viajesgalerialist={hockeyacademycampimagenes}
                        titulo="Hockey Academy Camp en Imágenes" />

                    <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto mt-20 max-w-5xl z-30 pb-32`}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Hockey Academy Camp Sponsors</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />
                        <div className={` mx-auto text-center overflow-visible `}>
                            {sponsors.map((src, index) => (
                                <span data-aos-once="true" data-aos="zoom-in" key={index} className={` relative inline-block aspect-1 bg-[#76b2cc] rounded-full w-36 overflow-hidden m-2 sm:m-6 md:m-8 `}>
                                    <Image className={` absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-9/12 h-auto `} src={src} alt='' />
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </main>

    );
}
