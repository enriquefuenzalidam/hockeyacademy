"use client";
import { useEffect, useState } from 'react';

import { Portadacabecera } from '../components/portadaCabecera';
import { Footer } from '../components/footer';
import { Partners } from 'components/partners';
import { Novedades } from 'components/novedades';

import chevronRight from 'public/images/chevronRight.svg';
import Link from 'next/link';
import Image from 'next/image';

import proximoEvento2024A from 'public/images/proximoEvento2024_hockeyTecnificacionBarcelona.jpg';
import proximoEvento2024B from 'public/images/proximoEvento2024_hockeyTecnificacion.jpg';
import proximoEvento2024C from 'public/images/proximoEvento2024_hockeyBarcelonaYParis.jpg';


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

]


import hockeyacademycampsponsor01 from 'public/hockeyacademycamp/ockeyacademycamp_sponsor_01.png';
import hockeyacademycampsponsor02 from 'public/hockeyacademycamp/ockeyacademycamp_sponsor_02.png';
import hockeyacademycampsponsor03 from 'public/hockeyacademycamp/ockeyacademycamp_sponsor_03.png';
import hockeyacademycampsponsor04 from 'public/hockeyacademycamp/ockeyacademycamp_sponsor_04.png';
import hockeyacademycampsponsor05 from 'public/hockeyacademycamp/ockeyacademycamp_sponsor_05.png';
import hockeyacademycampsponsor06 from 'public/hockeyacademycamp/ockeyacademycamp_sponsor_06.png';
import hockeyacademycampsponsor07 from 'public/hockeyacademycamp/ockeyacademycamp_sponsor_07.png';
import hockeyacademycampsponsor08 from 'public/hockeyacademycamp/ockeyacademycamp_sponsor_08.png';
import hockeyacademycampsponsor09 from 'public/hockeyacademycamp/ockeyacademycamp_sponsor_09.png';

const sponsors = [
    hockeyacademycampsponsor01,
    hockeyacademycampsponsor02,
    hockeyacademycampsponsor03,
    hockeyacademycampsponsor04,
    hockeyacademycampsponsor05,
    hockeyacademycampsponsor06,
    hockeyacademycampsponsor07,
    hockeyacademycampsponsor08,
    hockeyacademycampsponsor09
]



export default function Page() {
    return (

            <main className={`block relative z-0 w-full pl-0 md:pl-32 mt-[4.4rem] md:mt-0`}>
                <Portadacabecera />
                <div className={` relative bg-fucsiaAzulFondo `}>
                    <div className={` absolute inset-0 opacity-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />

                    
                    <div className={` relative z-30 pt-16 `}>
                        <section data-aos-once="true" data-aos="fade-up" className={` text-white text-center max-w-5xl mx-auto `} >
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 mb-6`}>Eventos próximos</h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-6 `} />
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#F6BB0E] `}>Summer Camp sub-13</h2>
                            <p className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto indent-5 `} >Diciembre de 2024 desde 16 hasta el 19.</p>
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#F6BB0E] mt-6 `}>Summer Camp +13</h2>
                            <p className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto indent-5 `} >Diciembre de 2024 desde 20 hasta el 22.</p>
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#F6BB0E] mt-6 `}>Summer Camp</h2>
                            <p className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto indent-5 `} >Enero de 2025 desde 10 hasta el 13.</p>
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#F6BB0E] mt-6 `}>Actividad Especial</h2>
                            <p className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto indent-5 `} >Febrero de 2025 desde 17 en adelante.</p>
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#F6BB0E] mt-6 `}>Comienzo Academia 2025</h2>
                            <p className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto indent-5 `} >Marzo de 2025, lunes 3.</p>
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 mt-24 mb-6`}>Fechas de viajes 2025</h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-6 `} />
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#F6BB0E] `}>Campus de Tecnificación</h2>
                            <p className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto indent-5 `} >Julio de 2025 desde 12 hasta el 23.</p>
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#F6BB0E] mt-6 `}>Campus Eurohockey Alemania</h2>
                            <p className={` font-Roboto text-xl mx-8 leading-relaxed text-center hyphens-auto indent-5 mb-24 `} >Agosto de 2025 desde 9 hasta el 20.</p>
                        </section>
                        </div>
                    <div className={`  bg-whiteFadedFondo`}>
                        <section className={` relative mx-auto max-w-5xl z-30 pt-28 pb-10`}>
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Hockey Academy Camp en Videos</h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-12 `} />
                            <div className={`grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-2 px-4 gx:px-0`}>
                                <div>
                                        <video className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                                            <source src='hockeyacademycamp/hockeyacademycamp_video_01.mp4' type="video/mp4" />
                                        </video>
                                </div>
                                <div>
                                        <video className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                                            <source src='hockeyacademycamp/hockeyacademycamp_video_02.mp4' type="video/mp4" />
                                        </video>
                                </div>
                                <div>
                                        <video className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                                            <source src='hockeyacademycamp/hockeyacademycamp_video_03.mp4' type="video/mp4" />
                                        </video>
                                </div>
                                <div>
                                        <video className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                                            <source src='hockeyacademycamp/hockeyacademycamp_video_04.mp4' type="video/mp4" />
                                        </video>
                                </div>
                            </div>
                        </section>

                        <ViajesGaleria
                            viajesgalerialist={hockeyacademycampimagenes}
                            titulo="Hockey Academy Camp en Imágenes" />

                        <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto mt-20 max-w-5xl z-30 pb-32`}>
                            <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Hockey Academy Camp Sponsors</h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-12 `} />
                            <div className={` mx-auto text-center overflow-visible `}>
                            {sponsors.map((src, index) => (
                                    <span key={index} className={` relative inline-block aspect-1 bg-neutral-500 rounded-full w-36 overflow-hidden m-8`}>
                                        <Image className={` absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-9/12 h-auto `} src={src} alt='' />
                                    </span>
                                ))}
                            </div>
                        </section>
                        </div>
                    <div className={` relative z-30 pt-24 `}>
                        <section data-aos-once="true" data-aos="fade-up" className={` text-white text-center max-w-5xl mx-auto `} >
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 mb-6`}>Campus de Hockey Hierba en Europa y EEUU</h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-6 `} />
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#F6BB0E] mb-6`}>Tecnificaciones - Deportistas olímpicos - Turismo deportivo</h2>
                            <p className={` font-Roboto text-xl mx-8 leading-relaxed text-justify hyphens-auto indent-5 `} >Nuestras viajes y campus son experiencias de vida inolvidables para jóvenes amantes del hockey. En ellos combinamos la asistencia a los mejores eventos, entrenamientos a nivel profesional, diferentes competiciones con la participación de deportistas olímpicos y con el objetivo de que todos los deportistas adquieran conocimientos nuevos y perfeccionamientos técnicos y logren un mayor entendimiento del juego.</p>
                        </section>
                        <section data-aos-once="true" data-aos="fade-up" className={` text-white text-center max-w-5xl mx-auto my-24`} >
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` font-BebasNeue text-4xl text-[#F6BB0E] mx-8 mb-6`}>¿Qué Viaje de Hockey preferís?</h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-6 `} />
                            <div className={` my-16 mx-8 grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 max-w-7xl `}>
                                <div>
                                    <h3 data-aos-once="true" data-aos="zoom-out-down" className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey con <br className={` hidden md:inline `} />Evento</h3>
                                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[rgb(211,0,126)] mb-6 `} />
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >Campus deportivo para jóvenes de 12 a 17 años en Barcelona y Monchengladbach (Alemania), combinando la práctica deportiva con la asistencia al EuroHockey en agosto 2025.</p>
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >Entrenamientos en las instalaciones del Real Club de Polo y en clubes alemanes, deportista de élite invitada y visitas a las principales atracciones turísticas de ambas ciudades.</p>
                                    <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300`} href="./eurohockey">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                                </div>
                                <div>
                                    <h3 data-aos-once="true" data-aos="zoom-out-down" className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey <br className={` hidden md:inline `} />Tecnificación</h3>
                                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[rgb(211,0,126)] mb-6 `} />
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >Campus deportivo para jóvenes de 12 a 17 años en el mes de julio. Viajamos a Barcelona para realizar 14 sesiones de entrenamiento técnico en las instalaciones del Real Club de Polo.</p>
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >Participan 4 deportistas de Olímpicos y entrenadores europeos. Visitamos las principales atracciones turísticas de la ciudad Condal y Port Aventura World.</p>
                                    <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300`} href="./hockeytecnificacion">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                                </div>
                                <div>
                                    <h3 data-aos-once="true" data-aos="zoom-out-down" className={` font-BebasNeue text-4xl italic mb-6 `}>Torneos <br className={` hidden md:inline `} />Internacionales</h3>
                                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[rgb(211,0,126)] mb-6 `} />
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >En Barcelona participaremos del Torneo Inmaculada, en el cual 1200 deportistas de todo Europa compiten en las categorías U10 - U12 y U14.</p>
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >En el ESPN Complex de Orlando, EEUU, nuestro equipo participará del torneo de Disney que ofrece Becas en las universidades más prestigiosas de USA, en Sub 16 y sub 14.</p>
                                    <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300 `} href="">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                                </div>
                            </div>
                        </section>
                        <section data-aos-once="true" data-aos="fade-up" className={` text-white text-center mx-auto mt-28 max-w-5xl `} >
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` tracking-wide font-BebasNeue text-4xl mx-8 text-[#F6BB0E] mb-6`}>¿Qué campus de Hockey Tecnificación preferís?</h2>
                            <p className={` font-Roboto text-2xl mx-auto mb-6 leading-normal max-w-xl w-full `} >Si estas en Europa y queres ser parte del mejor Campus de Hockey esta es tu oportunidad.</p>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-6 `} />
                            <div className={` mt-16 mx-8 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 max-w-7xl `}>
                                <div>
                                    <h3 data-aos-once="true" data-aos="zoom-out-down" className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey Hierba Valencia</h3>
                                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[rgb(211,0,126)] mb-6 `} />
                                    <p className={` font-Roboto font-bold text-md leading-relaxed mb-4 uppercase `} >Julio 2025</p>
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >Experiencia orientada a deportistas de 12 a 18 años. Campus de verano con 10 sesiones de entrenamientos con entrenadores internacionales y la participación especial de  3 jugadoras olímpicas, en las instalaciones del Polideportivo Virgen del Carmen Beteró, Valencia.</p>
                                    <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black  shadow-sm transition-all ease-in-out duration-300 `} href="./hockeyhierbavalencia">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                                </div>
                                <div>
                                    <h3 data-aos-once="true" data-aos="zoom-out-down" className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey Hierba Barcelona</h3>
                                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-28 border-none bg-[rgb(211,0,126)] mb-6 `} />
                                    <p className={` font-Roboto font-bold text-md leading-relaxed mb-4 uppercase `} >Julio 2025</p>
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >Experiencia orientada a deportistas de 12 a 18 años. Campus de verano con 14 sesiones de entrenamientos con entrenadores de selección y la participación especial de  jugadoras de talla mundial, olímpicas y/o mundialistas, en las instalaciones del Real Club de Polo de Barcelona.</p>
                                    <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black  shadow-sm transition-all ease-in-out duration-300 `} href="./hockeyhierbabarcelona">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className={`  bg-whiteFadedFondo`}>
                        <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto mt-20 max-w-5xl z-30 pt-28 pb-10`}>
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Próximos eventos deportivos</h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-12 `} />
                            <div className={` mx-auto text-center overflow-hidden pb-6 `}>
                                {[proximoEvento2024A, proximoEvento2024B, proximoEvento2024C].map((src, index) => (
                                    <span key={index} className={` inline-block rounded-full md:w-64 lg:w-72 overflow-hidden m-8 md:m-8 lg:m-4 `}>
                                        <Image src={src} alt='' />
                                    </span>

                                ))}
                            </div>
                        </section>
                        <section data-aos-once="true" data-aos="fade-up" className={` relative z-30 py-12 bg-center bg-cover clip-triangle `} style={{ backgroundImage: `url('images/hockey05.jpg')`, clipPath: 'polygon(0 0, calc(50% - 25px) 0, 50% 10%, calc(50% + 25px) 0, 100% 0, 100% 100%, 0 100%)' }}>
                            <div className={` absolute inset-0 opacity-90 z-40 bg-fucsiaAzulRatioFondo bg-center bg-cover `} />
                            <h2 data-aos-once="true" data-aos="fade-up" className={` relative z-50 text-center tracking-wide font-BebasNeue text-white text-5xl italic mx-8`}>¿Querés saber más?</h2>
                            <p className={` relative z-50 text-center font-Roboto font-bold text-md text-white leading-loose mt-6`}><Link className={` mx-auto inline-block py-1 px-6 hover:bg-[rgb(141,0,91)] bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-sm shadow-black transition-all ease-in-out duration-300 `} href="/contacto">Contactanos</Link></p>
                        </section>
                        {/*
                        <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto mt-20 max-w-5xl z-30 py-6`}>
                            <h2 data-aos-once="true" data-aos="zoom-out-down" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Novedades</h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-12 `} />
                            <div className={`  mt-16 mx-8 grid grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl `}>
                                <Novedades />
                            </div>
                        </section>
                        */}
                        <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto mt-20 max-w-5xl z-30 pb-32`}>
                            <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Nuestros partners</h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-12 `} />
                            <div className={` mx-auto text-center overflow-visible `}>
                                <Partners />
                            </div>
                        </section>



                    </div>
                    <Footer />
                </div>
            </main>

    );
}

 