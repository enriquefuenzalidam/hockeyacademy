"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Footer } from 'components/footer';

import ExperienciaGaleria from 'components/experienciaGaleria';
import ViajesGaleria from 'components/viajesgaleria';

import hockeytecnificacionVid from 'public/images/IDentity-Campus-Tecnificacion-2023.mp4';

import cabeceraFoto from 'public/images/Hockey-22-Entrenamiento.jpg';
import chevronRight from 'public/images/chevronRight.svg';

import hockeytecnificacion01 from 'public/hockeytecnificacion/hockeytecnificacion01.webp';
import hockeytecnificacion02 from 'public/hockeytecnificacion/hockeytecnificacion02.webp';
import hockeytecnificacion03 from 'public/hockeytecnificacion/hockeytecnificacion03.webp';
import hockeytecnificacion04 from 'public/hockeytecnificacion/hockeytecnificacion04.webp';
import hockeytecnificacion05 from 'public/hockeytecnificacion/hockeytecnificacion05.webp';
import hockeytecnificacion06 from 'public/hockeytecnificacion/hockeytecnificacion06.webp';
import hockeytecnificacion07 from 'public/hockeytecnificacion/hockeytecnificacion07.webp';
import hockeytecnificacion08 from 'public/hockeytecnificacion/hockeytecnificacion08.webp';
import hockeytecnificacion09 from 'public/hockeytecnificacion/hockeytecnificacion09.webp';
import hockeytecnificacion10 from 'public/hockeytecnificacion/hockeytecnificacion10.webp';
import hockeytecnificacion11 from 'public/hockeytecnificacion/hockeytecnificacion11.webp';

const imagenesCuadro = [
    hockeytecnificacion01,
    hockeytecnificacion02,
    hockeytecnificacion03,
    hockeytecnificacion04,
    hockeytecnificacion05,
    hockeytecnificacion06,
    hockeytecnificacion07,
    hockeytecnificacion08,
    hockeytecnificacion09,
    hockeytecnificacion10,
    hockeytecnificacion11 ]


import mejorExperienciaJ from 'public/images/mejorExperienciaJ.png';
import mejorExperienciaK from 'public/images/mejorExperienciaK.png';
import mejorExperienciaL from 'public/images/mejorExperienciaL.png';
import mejorExperienciaM from 'public/images/mejorExperienciaM.png';
import mejorExperienciaN from 'public/images/mejorExperienciaN.png';
import mejorExperienciaO from 'public/images/mejorExperienciaO.png';

const mejorExperienciaImgs = [
    mejorExperienciaO,
    mejorExperienciaN,
    mejorExperienciaM,
    mejorExperienciaL,
    mejorExperienciaK,
    mejorExperienciaJ
]


export default function Eurohockey() {


    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white`}>

            <section className={` block relative w-full h-screen bg-black z-30 `}>
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <img src={cabeceraFoto.src} className='object-cover object-center w-full h-full' alt='' />
                </div>
            </section>

            <div className={` relative bg-fucsiaAzulFondoTres `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <section data-aos-once="true" data-aos="fade-up" className={` relative z-30 text-white text-center max-w-5xl mx-auto py-24`} >
                    <h2 data-aos-once="true" data-aos="zoom-out-down" className={` font-BebasNeue text-5xl text-white mx-8 mb-6`}>Campus de Hockey Hierba en España</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-6 `} />
                    <p className={` mx-auto max-w-lg font-Roboto text-2xl leading-normal mb-4 `} >Si estas en Europa y queres ser parte del mejor Campus de Hockey esta es tu oportunidad</p>
                    <div className={` my-16 mx-8 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 max-w-7xl `}>
                        <div>
                            <h3 data-aos-once="true" data-aos="zoom-out-down" className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey Hierba Valencia</h3>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[rgb(211,0,126)] mb-6 `} />
                            <p className={` font-Roboto text-md font-bold leading-relaxed mb-4 uppercase `} >Julio 2025</p>
                            <p className={` font-Roboto text-lg leading-relaxed mb-4 `} >Experiencia orientada a deportistas de 12 a 18 años. Campus de verano con 10 sesiones de entrenamientos con entrenadores internacionales y la participación especial de  3 jugadoras olímpicas, en las instalaciones del Polideportivo Virgen del Carmen Beteró, Valencia.</p>
                            <p className={` font-Roboto font-bold text-lg leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300`} href="./hockeyhierbavalencia">Más información <img className={` inline-block h-8 w-auto `} src={chevronRight.src} alt='' /></Link></p>
                        </div>
                        <div>
                            <h3 data-aos-once="true" data-aos="zoom-out-down" className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey Hierba Barcelona</h3>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[rgb(211,0,126)] mb-6 `} />
                            <p className={` font-Roboto text-md font-bold leading-relaxed mb-4 uppercase `} >Julio 2025</p>
                            <p className={` font-Roboto text-lg leading-relaxed mb-4 `} >Experiencia orientada a deportistas de 12 a 18 años. Campus de verano con 14 sesiones de entrenamientos con entrenadores de selección y la participación especial de  jugadoras de talla mundial, olímpicas y/o mundialistas, en las instalaciones del Real Club de Polo de Barcelona.</p>
                            <p className={` font-Roboto font-bold text-lg leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300`} href="./hockeyhierbabarcelona">Más información <img className={` inline-block h-8 w-auto`} src={chevronRight.src} alt='' /></Link></p>
                        </div>
                    </div>
                </section>
            </div>

            <ExperienciaGaleria
                ExperienciaImgs={mejorExperienciaImgs}
                title="La mejor experiencia de hockey de vida"
            />

            <section className={` relative pb-0 gx:pb-24`}>
                <div className={` max-w-5xl w-full mx-auto `}>
                    <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>
                        Conoce más sobre nuestro Campus de Verano Hockey Hierba
                    </h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
                </div>
                <div className={` max-w-5xl w-full mx-auto `}>
                    <video poster='images/Hockey-22-Entrenamiento-II.jpg' className='object-cover object-center w-full h-auto' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src={hockeytecnificacionVid} type="video/mp4" />
                    </video>
                    </div>
            </section>

            <ViajesGaleria
                viajesgalerialist={imagenesCuadro}
                titulo='Nuestros campus en imágenes' />

            <div className={` relative bg-fucsiaAzulFondoDos clear-both `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>
        
        </main>
    );
}


