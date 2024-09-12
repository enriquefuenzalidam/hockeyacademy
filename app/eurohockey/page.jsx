"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Footer } from 'components/footer';

import ExperienciaGaleria from 'components/experienciaGaleria';
import PagoCondiciones from 'components/pagocondiciones';
import AllInclusiveExperiencia from 'components/allinclusiveexperiencia';
import CitasBlock from 'components/citasblock';
import ViajesGaleria from 'components/viajesgaleria';
import LateralImagenesCuadro from 'components/LateralImagenesCuadro';

import calendarioIcono from 'public/images/calendar-days.svg';
import calendarioCheckIcono from 'public/images/calendar-check.svg';

import eurohockey2023 from 'public/images/IDentity-Campus-Eurohockey-2023.mp4';

import citasFondo from 'public/images/citasFondoEuroHockey.jpg';

import euroHockeyForm from 'public/images/euroHockeyForm.webp';

import euroHockey2025A from 'public/images/euroHockey2025A.webp';
import euroHockey2025B from 'public/images/euroHockey2025B.webp';
import euroHockey2025C from 'public/images/euroHockey2025C.webp';
import euroHockey2025D from 'public/images/euroHockey2025D.webp';
import euroHockey2025E from 'public/images/euroHockey2025E.webp';
import euroHockey2025F from 'public/images/euroHockey2025F.webp';
import euroHockey2025G from 'public/images/euroHockey2025G.webp';

const imagenesCuadro = [
    euroHockey2025A, euroHockey2025B, euroHockey2025C, euroHockey2025D, euroHockey2025E, euroHockey2025F, euroHockey2025G
];


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
    eurohockeyviajesgaleria24 ]


import mejorExperienciaA from 'public/images/mejorExperienciaA.png';
import mejorExperienciaB from 'public/images/mejorExperienciaB.png';
import mejorExperienciaC from 'public/images/mejorExperienciaC.png';
import mejorExperienciaD from 'public/images/mejorExperienciaD.png';
import mejorExperienciaE from 'public/images/mejorExperienciaE.png';
import mejorExperienciaF from 'public/images/mejorExperienciaF.png';

const mejorExperienciaImgs = [
    mejorExperienciaA, mejorExperienciaB, mejorExperienciaC, mejorExperienciaD, mejorExperienciaE, mejorExperienciaF
]

const allInclusiveExperienci = [
    { id: 0, titulo: 'Comida', contenido: 'El Campus incluye pensión completa (4 comidas diarias de todos los días). Así también los complementos alimenticios pre y post entrenamientos con su necesaria hidratación. Para los casos que lo requieran, contamos con la posibilidad de adaptar los menús a vegetarianos, veganos y celíacos. Visitaremos diversos restaurantes sudamericanos (Ej: “El Chalito” de Luís Suárez, como también el Mercado de la Boquería).' },
    { id: 1, titulo: 'Transporte', contenido: 'Desde nuestra llegada al aeropuerto de El Prat, en las afueras de la ciudad Condal, contamos con un transfer privado a exclusiva disposición que nos transportará de manera segura y rápida hacia el alojamiento. También durante toda la estadía en Barcelona y en París, ya sea para acudir a los puntos turísticos, los eventos deportivos, entrenamientos, etc. nos trasladaremos en transporte privado (24 hs. disponible).' },
    { id: 2, titulo: 'Asistencia Médica', contenido: 'Nuestros campus cuentan con un cuerpo médico encabezado por el Dr. Hernán Santiago Boccolini especializados en el área deportiva y traumatología. A diario, al margen de la actividad estrictamente deportiva, el médico visitará nuestro alojamiento a los fines de atender cualquier tipo de necesidad que se presente en los días del viaje. Nos complace contar con el apoyo de Farmacias Briera para cualquier imprevisto o necesidad de medicamentos.' },
    { id: 3, titulo: 'Documentación', contenido: 'A los efectos de ingresar a la Unión Europea (zona Schengen) sin inconvenientes se requiere contar con la siguiente documentación: Pasaporte al día (con fecha de vencimiento no menor a 6 meses); Autorización de viaje del menor de edad ante Escribano Público suscripta por ambos padres, y/o tutor (quien ejerza la patria potestad), y Seguro al Viajero (Cobertura mínima de €60.000) para los días del viaje. La misma deberá ser presentada con 30 días de antelación a la fecha del viaje, sin excepciones.' },
    { id: 4, titulo: 'Autorización Médica', contenido: 'Como en todo Campus deportivo, es menester requerir previamente el alta médica para la actividad física, la cual deberá ser entregada en papel y suscripta por el profesional correspondiente. Asimismo se entregará a cada viajero una Ficha Médica que deberá completar con sus padres y también ser suscripta por el médico. Dicha información se cargará digitalmente, conjuntamente con las preferencias alimenticias y los números de contactos en las pulseras de monitoreo de cada pasajero a los efectos de poder contar con ella en todo momento.' },
    { id: 5, titulo: 'Equipaje Sugerido', contenido: 'Brindaremos un KIT de viaje en el cual se incluye camisetas, shorts, mochila y sudadera para la actividad deportiva (solo restará llevar medias y calzado apropiado). Se recomienda llevar una valija grande (con candado o identificación) y una mochila o equipaje de mano. Es recomendable incluir en el equipaje en cuanto sea posible, trajes de baño, calzado de playa, protector, gorra o sombrero, ropa casual y shorts, camisetas, jeans, abrigo, campera, indumentaria de tu equipo favorito, medias de algodón y ropa interior cómoda.' }
]


import equipamientoA from 'public/images/equipamientoA.png';
import equipamientoB from 'public/images/equipamientoB.png';


import pagoCondicionesSaldo from 'public/images/pagoCondicionesSaldo.svg';
import pagoCondicionesPlane from 'public/images/pagoCondicionesPlane.svg';
import pagoCondicionesPen from 'public/images/pagoCondicionesPen.svg';
import pagoCondicionesCard from 'public/images/pagoCondicionesCard.svg';
import pagoCondicionesBill from 'public/images/pagoCondicionesBill.svg';

const pagoCondiciones = [
    { icono: pagoCondicionesPen, titulo: 'Seña', descripcion: 'Permite reservar el cupo del deportista contra la firma del contrato.' },
    { icono: pagoCondicionesPlane, titulo: 'Aereo', descripcion: 'No incluido. Debe contratarse 90 días antes de la fecha del viaje.' },
    { icono: pagoCondicionesSaldo, titulo: 'Saldo', descripcion: 'Financiación en cuotas sin interés. Cancelación hasta 30 días antes del viaje.' },
    { icono: pagoCondicionesCard, titulo: 'Medios de pago', descripcion: 'Efectivo, transferencia/deposito bancario y transferencia internacional.' },
    { icono: pagoCondicionesBill, titulo: 'Flexibilidad', descripcion: 'Posibilidad de abonar el 100% del Campus en cuotas fijas acordadas en el contrato.' },
]


const citasEurohockey2025 = [
    { autor: 'Laura, mamá de Delfi', cita: 'El trabajo de coordinar el viaje fue impecable..no solo el disfrute del deporte en sí, sino los paseos alternativos para que no desperdiciaran un solo segundo de su estadía…¡Gracias por la calidez como personas!' },
    { autor: 'Carolina Van Bebber, mamá de Martu', cita: 'Soy mamá de Martina de Chile. Les quería contar que lo que vi ayer al ir a buscar a Marti fue increíble. Las chicas felices de la experiencia, todas muy cariñosas entre ellas. Despidieron a Marti como si hubiesen sido compañeras del colegio o el club de toda la vida…Martina lloró en el taxi y me decía: “mamá fue maravilloso, una experiencia que jamás pensé que iba a ser así…gracias por regalármela' },
    { autor: 'Romi Piazze, mamá de Mía', cita: 'Mi hija hizo un cambio enorme, volvió con más ganas y fuerzas de entrenar, pidió ir más días al club a practicar. Siempre repite que la leona le dijo que el secreto de todo es practicar, practicar, practicar. Quiero felicitarlos porque mi hija dice que fue un viaje increíble, todo organizado, que nada falló y el grupo humano fue excelente' },
    { autor: 'Maca Bustos, mamá de Martina', cita: 'Martina volvió encantada con el viaje, me mostraba el vídeo y me ponía en contexto todo lo que había ocurrido en el entreno o la grabación. Cuando vea que el próximo viaje es a París, ya estaría arriba del avión' }
]


export default function Eurohockey() {

    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white mt-16 md:mt-0`}>

            <section className={` block relative w-full aspect-[16/7] bg-black z-30 mb-12 `}>
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <video poster='images/Hockey-22-Entrenamiento.jpg' className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src='images/IDentity-Campus-Eurohockey-2023.mp4' type="video/mp4" />
                    </video>
                </div>
            </section>

            <section className={` block relative w-full max-w-5xl z-30 my-12 px-4 gx:px-0  text-neutral-700 mx-auto `}>
                <div className={` flex flex-col gx:flex-row `}>
                    <div className={` gx:w-8/12 `} data-aos-once="true" data-aos="fade-up">
                        <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Campus Eurohockey<br/><span className={` text-nowrap text-[rgb(211,0,126)] `}>Alemania 2025</span></h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
                        <p className={` text-center mb-6 h-auto`} ><img className={` mx-auto w-8 `} src={calendarioIcono.src} alt='' /></p>
                        <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 `}>Del sábado 9 al martes 19 de agosto</h2>
                        <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >
                            Nuestro Campus de Hockey con Evento, está orientado a jóvenes de 12 a 17 años. Proponemos un viaje inolvidable a Barcelona (España) y Monchengladbach (Alemania), donde combinamos 9 tecnificaciones deportivas con las asistencia al principal Torneo de Hockey de toda Europa.
                        </p>
                        <p className={` font-Roboto text-md leading-relaxed mb-4 text-justify hyphens-auto indent-5 `} >
                            Una oportunidad única para mejorar tu hockey, convivir con una deportista Olímpica, conocer Europa y vivir el Eurohockey 2025 desde dentro.
                        </p>
                        <p className={` font-Roboto font-normal text-md mt-6 text-center text-white pb-12`}>
                            <Link className={` inline-block mx-auto py-2 px-8 bg-[rgb(188,0,121)] bg-fucsiaAzulRatioFondo hover:bg-none rounded-md border-black border-solid border-1 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 `} href="https://calendly.com/identity-campus">
                                Agendá tu reunión 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={` inline-block h-4 w-auto ml-2`} fill="currentColor">
                                <path fill="white" d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
                                </Link></p>
                    </div>
                    <LateralImagenesCuadro
                        imagenesCuadro={imagenesCuadro} />

                </div>
            </section>

            <ExperienciaGaleria
                ExperienciaImgs={mejorExperienciaImgs}
                title="La mejor experiencia de hockey de vida" />

            <AllInclusiveExperiencia
                list={allInclusiveExperienci} />

            <section className={` max-w-5xl w-full mx-auto `}>
                <div className={` flex md:flex-row flex-col px-8 gap-8 md:gap-0 my-20`}>
                    <div className={` w-full md:w-6/12 justify-start items-start`}>
                        <h4 className={` text-left font-BebasNeue text-[#F6BB0E] text-2xl mb-2 md:mr-12 `}>Equipamiento</h4>
                        <h3 className={` text-left font-BebasNeue text-blue-950 text-4xl mb-6 md:mr-12 `}>Kit de Viaje</h3>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block h-1 w-8 border-none bg-[rgb(211,0,126)] mb-8 `} />
                        <p className={` font-Roboto text-lg text-neutral-500 leading-relaxed md:mr-12 text-justify hyphens-auto indent-5 `}>Proponemos un viaje inolvidable, por lo que deseamos te lleves muchos recuerdos. Incluimos la indumentaria deportiva para realizar las tecnificaciones (Faldas, camisetas, buzo, mochila). Asimismo, en la cena despedida llevaremos a cabo distintos sorteos. <strong>¡No te lo puedes perder!</strong></p>
                    </div>
                    <p className={` w-full md:w-6/12 flex justify-center items-center`}>
                        <img data-aos-once="true" data-aos="fade-down" className={` max-w-md w-full `} src={equipamientoA.src} alt='' />
                    </p>
                </div>
                <div className={` flex md:flex-row flex-col-reverse px-8 gap-8 md:gap-0 my-20`}>
                    <p className={` w-full md:w-6/12 flex justify-center items-center`}>
                        <img data-aos-once="true" data-aos="fade-down" className={` max-w-sm w-full `} src={equipamientoB.src} alt='' />
                    </p>
                    <div className={` w-full md:w-6/12 justify-start items-start`}>
                        <h4 className={` text-left font-BebasNeue text-[#F6BB0E] text-2xl mb-2 md:mr-12 `}>Equipamiento</h4>
                        <h3 className={` text-left font-BebasNeue text-blue-950 text-4xl mb-6 md:mr-12 `}>Monitoreo y control de pasajeros</h3>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block h-1 w-8 border-none bg-[rgb(211,0,126)] mb-8 `} />
                        <p className={` font-Roboto text-lg text-neutral-500 leading-relaxed md:mr-12 text-justify hyphens-auto indent-5 `}>EFESUR es un sistema desarrollado para la industria del turismo estudiantil, que comprende una plataforma de última tecnología en monitoreo y control de pasajeros. Lleva adelante el control y la seguridad de los pasajeros, prioriza la agilidad y eficiencia en los puntos de control y garantiza la información clara y trasparente para todos los actores del circuito.</p>
                    </div>
                </div>
            </section>

            <PagoCondiciones
                pagoCondiciones={pagoCondiciones} />

            <CitasBlock
                citaslista={citasEurohockey2025}
                citasfondo={citasFondo} />
            
            <ViajesGaleria
                viajesgalerialist={eurohockeyviajesgaleria} />

            <section id='reservas' className={` bg-white py-0 px-0 gx:px-4 `}>
                <div className={` max-w-5xl mx-auto grid grid-cols-1 gx:grid-cols-2 gap-6`}>
                    <div className={`  w-full `}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Solicitá más información</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
                        <form className={` pb-12 px-6 gx:px-0  font-Roboto text-lg text-neutral-500`}>
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none  p-2`} type='text' placeholder='Nombre y apellido' />
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none p-2 `} type='email' placeholder='Correo electrónico' />
                            <input className={` block mt-5 w-full border-b-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none p-2 `} type='tel' placeholder='Número de teléfono' />
                            <textarea className={` block mt-5 w-full border-2 border-solid border-black border-opacity-40 bg-transparent appearance-none hover:appearance-none focus:outline-none p-2 `} rows='8' placeholder='Mensaje'></textarea>

                            <label className={` mt-5 whitespace-normal flex flex-row `} htmlFor='privacidadPoliticas'>
                                <span className={` mr-3 block w-5 h-5 border-2 border-solid border-black border-opacity-40 bg-transparent `}>
                                    <input className={` m-0 p-0 block border-0 w-full h-full bg-transparent focus:outline-none`} type='checkbox' name='privacidadPoliticas' id='privacidadPoliticas' /></span>
                                <span className={`block hyphens-auto font-RobotoCondensed leading-tight `}>
                                    Sí, acepto la política de privacidad y los términos y condiciones.</span></label>
                            <p className={` block align-bottom mt-8 text-center `}>
                                <input type='submit' className={` cursor-pointer inline-block mx-auto py-2 px-8 bg-[rgb(188,0,121)] bg-fucsiaAzulRatioFondo rounded-md border-black border-solid border-1 border-opacity-0 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 text-white hover:bg-none hover:border-opacity-10 `} value='Enviar mensaje' /></p>

                        </form>
                    </div>
                    <p className={` w-full h-72 gx:min-h-full overflow-hidden `}>
                        <img data-aos-once="true" data-aos="zoom" className={` object-cover object-center w-full h-full `} src={euroHockeyForm.src} alt='' /></p>
                </div>
            </section>

            <div className={` relative bg-fucsiaAzulFondoDos clear-both `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>
        </main>
    );
}


