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

export default function Page() {
    return (

            <main className={`block relative z-0 w-full pl-0 md:pl-32`}>
                <Portadacabecera />
                <div className={` relative bg-fucsiaAzulFondo `}>
                    <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                    <div className={` relative z-30 pt-24 `}>
                        <section className={` text-white text-center max-w-5xl mx-auto `} >
                            <h2 className={` tracking-wide font-BebasNeue text-4xl mx-8 mb-6`}>Campus de Hockey Hierba en Europa y EEUU</h2>
                            <hr className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-6 `} />
                            <h2 className={` tracking-wide font-BebasNeue text-4xl mx-8 italic text-[#F6BB0E] mb-6`}>Tecnificaciones - Deportistas olímpicos - Turismo deportivo</h2>
                            <p className={` font-Roboto text-xl mx-8 leading-relaxed `} >Nuestras viajes y campus son experiencias de vida inolvidables para jóvenes amantes del hockey. En ellos combinamos la asistencia a los mejores eventos, entrenamientos a nivel profesional, diferentes competiciones con la participación de deportistas olímpicos y con el objetivo de que todos los deportistas adquieran conocimientos nuevos y perfeccionamientos técnicos y logren un mayor entendimiento del juego.</p>
                        </section>
                        <section className={` text-white text-center max-w-5xl mx-auto my-24`} >
                            <h2 className={` font-BebasNeue text-4xl text-[#F6BB0E] mx-8 mb-6`}>¿Qué Viaje de Hockey preferís?</h2>
                            <hr className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-6 `} />
                            <div className={` my-16 mx-8 grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 max-w-7xl `}>
                                <div>
                                    <h3 className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey con <br className={` hidden md:inline `} />Evento</h3>
                                    <hr className={` block mx-auto h-1 max-w-28 border-none bg-[rgb(211,0,126)] mb-6 `} />
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 `} >Campus deportivo para jóvenes de 12 a 17 años en Barcelona y Monchengladbach (Alemania), combinando la práctica deportiva con la asistencia al EuroHockey en agosto 2025.</p>
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 `} >Entrenamientos en las instalaciones del Real Club de Polo y en clubes alemanes, deportista de élite invitada y visitas a las principales atracciones turísticas de ambas ciudades.</p>
                                    <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300`} href="">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                                </div>
                                <div>
                                    <h3 className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey <br className={` hidden md:inline `} />Tecnificación</h3>
                                    <hr className={` block mx-auto h-1 max-w-28 border-none bg-[rgb(211,0,126)] mb-6 `} />
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 `} >Campus deportivo para jóvenes de 12 a 17 años en el mes de julio. Viajamos a Barcelona para realizar 14 sesiones de entrenamiento técnico en las instalaciones del Real Club de Polo.</p>
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 `} >Participan 4 deportistas de Olímpicos y entrenadores europeos. Visitamos las principales atracciones turísticas de la ciudad Condal y Port Aventura World.</p>
                                    <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300`} href="">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                                </div>
                                <div>
                                    <h3 className={` font-BebasNeue text-4xl italic mb-6 `}>Torneos <br className={` hidden md:inline `} />Internacionales</h3>
                                    <hr className={` block mx-auto h-1 max-w-28 border-none bg-[rgb(211,0,126)] mb-6 `} />
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 `} >En Barcelona participaremos del Torneo Inmaculada, en el cual 1200 deportistas de todo Europa compiten en las categorías U10 - U12 y U14.</p>
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 `} >En el ESPN Complex de Orlando, EEUU, nuestro equipo participará del torneo de Disney que ofrece Becas en las universidades más prestigiosas de USA, en Sub 16 y sub 14.</p>
                                    <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-300 `} href="">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                                </div>
                            </div>
                        </section>
                        <section className={` text-white text-center mx-auto mt-28 max-w-5xl `} >
                            <h2 className={` tracking-wide font-BebasNeue text-4xl mx-8 text-[#F6BB0E] mb-6`}>¿Qué campus de Hockey Tecnificación preferís?</h2>
                            <p className={` font-Roboto text-xl mx-8 mb-6 leading-relaxed `} >Si estas en Europa y queres ser parte del<br />mejor Campus de Hockey esta es tu oportunidad.</p>
                            <hr className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-6 `} />
                            <div className={` mt-16 mx-8 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-8 max-w-7xl `}>
                                <div>
                                    <h3 className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey Hierba Valencia</h3>
                                    <hr className={` block mx-auto h-1 max-w-28 border-none bg-[rgb(211,0,126)] mb-6 `} />
                                    <p className={` font-Roboto font-bold text-md leading-relaxed mb-4 uppercase `} >Julio 2025</p>
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 `} >Experiencia orientada a deportistas de 12 a 18 años. Campus de verano con 10 sesiones de entrenamientos con entrenadores internacionales y la participación especial de  3 jugadoras olímpicas, en las instalaciones del Polideportivo Virgen del Carmen Beteró, Valencia.</p>
                                    <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black  shadow-sm transition-all ease-in-out duration-300 `} href="">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                                </div>
                                <div>
                                    <h3 className={` font-BebasNeue text-4xl italic mb-6 `}>Hockey Hierba Barcelona</h3>
                                    <hr className={` block mx-auto h-1 max-w-28 border-none bg-[rgb(211,0,126)] mb-6 `} />
                                    <p className={` font-Roboto font-bold text-md leading-relaxed mb-4 uppercase `} >Julio 2025</p>
                                    <p className={` font-Roboto text-md leading-relaxed mb-4 `} >Experiencia orientada a deportistas de 12 a 18 años. Campus de verano con 14 sesiones de entrenamientos con entrenadores de selección y la participación especial de  jugadoras de talla mundial, olímpicas y/o mundialistas, en las instalaciones del Real Club de Polo de Barcelona.</p>
                                    <p className={` font-Roboto font-bold text-md leading-loose mt-6`}><Link className={` inline-block py-1 px-6 bg-blue-950 hover:bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-black  shadow-sm transition-all ease-in-out duration-300 `} href="">Más información <Image className={` inline-block `} src={chevronRight} alt='' /></Link></p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className={`  bg-whiteFadedFondo`}>
                        <section className={` relative mx-auto mt-20 max-w-5xl z-30 pt-28 pb-10`}>
                            <h2 className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Próximos eventos deportivos</h2>
                            <hr className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-12 `} />
                            <div className={` mx-auto text-center overflow-hidden pb-6 `}>
                                {[proximoEvento2024A, proximoEvento2024B, proximoEvento2024C].map((src, index) => (
                                    <span key={index} className={` inline-block rounded-full md:w-64 lg:w-72 overflow-hidden m-8 md:m-8 lg:m-4 `}>
                                        <Image src={src} alt='' />
                                    </span>

                                ))}
                            </div>
                        </section>
                        <section className={` relative z-30 py-12 bg-center bg-cover clip-triangle `} style={{ backgroundImage: `url('images/hockey05.jpg')`, clipPath: 'polygon(0 0, calc(50% - 25px) 0, 50% 10%, calc(50% + 25px) 0, 100% 0, 100% 100%, 0 100%)' }}>
                            <div className={` absolute inset-0 opacity-90 z-40 bg-fucsiaAzulRatioFondo bg-center bg-cover `} />
                            <h2 className={` relative z-50 text-center tracking-wide font-BebasNeue text-white text-5xl italic mx-8`}>¿Querés saber mas?</h2>
                            <p className={` relative z-50 text-center font-Roboto font-bold text-md text-white leading-loose mt-6`}><Link className={` mx-auto inline-block py-1 px-6 hover:bg-[rgb(141,0,91)] bg-[rgb(188,0,121)] rounded-md border-black border-solid border-2 border-opacity-0 hover:border-opacity-10 no-underline shadow-sm shadow-black transition-all ease-in-out duration-300 `} href="">Contáctanos</Link></p>
                        </section>
                        <section className={` relative mx-auto mt-20 max-w-5xl z-30 py-6`}>
                            <h2 className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Novedades</h2>
                            <hr className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-12 `} />
                            <div className={`  mt-16 mx-8 grid grid-cols-1 md:grid-cols-3 gap-2 max-w-7xl `}>
                                <Novedades />
                            </div>
                        </section>
                        <section className={` relative mx-auto mt-20 max-w-5xl z-30 pb-32`}>
                            <h2 className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Nuestros partners</h2>
                            <hr className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-12 `} />
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

 