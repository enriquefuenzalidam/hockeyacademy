"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Footer } from 'components/footer';

import calendarioIcono from 'public/images/calendar-days.svg';
import calendarioCheckIcono from 'public/images/calendar-check.svg';



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
    { titulo: 'Comida', contenido: 'El Campus incluye pensión completa (4 comidas diarias de todos los días). Así también los complementos alimenticios pre y post entrenamientos con su necesaria hidratación. Para los casos que lo requieran, contamos con la posibilidad de adaptar los menús a vegetarianos, veganos y celíacos. Visitaremos diversos restaurantes sudamericanos (Ej: “El Chalito” de Luís Suárez, como también el Mercado de la Boquería).' },
    { titulo: 'Transporte', contenido: 'Desde nuestra llegada al aeropuerto de El Prat, en las afueras de la ciudad Condal, contamos con un transfer privado a exclusiva disposición que nos transportará de manera segura y rápida hacia el alojamiento. También durante toda la estadía en Barcelona y en París, ya sea para acudir a los puntos turísticos, los eventos deportivos, entrenamientos, etc. nos trasladaremos en transporte privado (24 hs. disponible).' },
    { titulo: 'Asistencia Médica', contenido: 'Nuestros campus cuentan con un cuerpo médico encabezado por el Dr. Hernán Santiago Boccolini especializados en el área deportiva y traumatología. A diario, al margen de la actividad estrictamente deportiva, el médico visitará nuestro alojamiento a los fines de atender cualquier tipo de necesidad que se presente en los días del viaje. Nos complace contar con el apoyo de Farmacias Briera para cualquier imprevisto o necesidad de medicamentos.' },
    { titulo: 'Documentación', contenido: 'A los efectos de ingresar a la Unión Europea (zona Schengen) sin inconvenientes se requiere contar con la siguiente documentación: Pasaporte al día (con fecha de vencimiento no menor a 6 meses); Autorización de viaje del menor de edad ante Escribano Público suscripta por ambos padres, y/o tutor (quien ejerza la patria potestad), y Seguro al Viajero (Cobertura mínima de €60.000) para los días del viaje. La misma deberá ser presentada con 30 días de antelación a la fecha del viaje, sin excepciones.' },
    { titulo: 'Autorización Médica', contenido: 'Como en todo Campus deportivo, es menester requerir previamente el alta médica para la actividad física, la cual deberá ser entregada en papel y suscripta por el profesional correspondiente. Asimismo se entregará a cada viajero una Ficha Médica que deberá completar con sus padres y también ser suscripta por el médico. Dicha información se cargará digitalmente, conjuntamente con las preferencias alimenticias y los números de contactos en las pulseras de monitoreo de cada pasajero a los efectos de poder contar con ella en todo momento.' },
    { titulo: 'Equipaje Sugerido', contenido: 'Brindaremos un KIT de viaje en el cual se incluye camisetas, shorts, mochila y sudadera para la actividad deportiva (solo restará llevar medias y calzado apropiado). Se recomienda llevar una valija grande (con candado o identificación) y una mochila o equipaje de mano. Es recomendable incluir en el equipaje en cuanto sea posible, trajes de baño, calzado de playa, protector, gorra o sombrero, ropa casual y shorts, camisetas, jeans, abrigo, campera, indumentaria de tu equipo favorito, medias de algodón y ropa interior cómoda.' }
]

const remToPixels = (rem) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};


export default function Eurohockey() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);

    const [infoBoxOpening, setOpenInfoBox] = useState(null); 
    const infoBoxRefs = useRef([]);

    const infoBoxToggle = (index) => {
        if (infoBoxOpening === index) {
            closeInfoBox(index);
            setOpenInfoBox(null);
        } else {
            
            if (infoBoxOpening !== null) {
                closeInfoBox(infoBoxOpening);
            }
            openInfoBox(index);
            setOpenInfoBox(index);
        }
    };


    const closeInfoBox = (index) => {
        toggleOpen(index);
        const infoBox = infoBoxRefs.current[index];
        const paddingPixels = remToPixels(3); 
        infoBox.style.height = `${infoBox.scrollHeight+paddingPixels}px`;
        infoBox.style.opacity = '1';
        infoBox.style.paddingTop = '1.5rem';
        infoBox.style.paddingBottom = '1.5rem';
        requestAnimationFrame(() => {
            infoBox.style.transition = 'height 0.382s ease-in-out, opacity 0.382s ease-in-out, padding 0.382s ease-in-out';
            infoBox.style.height = '0';
            infoBox.style.opacity = '0';
            infoBox.style.paddingTop = '0';
            infoBox.style.paddingBottom = '0';
        });
    };

    const openInfoBox = (index) => {
        toggleOpen(index);
        const infoBox = infoBoxRefs.current[index];
        const paddingPixels = remToPixels(3); 
        infoBox.style.height = '0';
        infoBox.style.opacity = '0';
        infoBox.style.paddingTop = '0';
        infoBox.style.paddingBottom = '0';
        requestAnimationFrame(() => {
            infoBox.style.transition = 'height 0.382s ease-in-out, opacity 0.382s ease-in-out, padding 0.382s ease-in-out';
            infoBox.style.height = `${infoBox.scrollHeight+paddingPixels}px`;
            infoBox.style.opacity = '1';
            infoBox.style.paddingTop = '1.5rem';
            infoBox.style.paddingBottom = '1.5rem';
        });
    };



    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagenesCuadro.length);
      }, 1618); 
  
      return () => clearInterval(interval); 
    }, [imagenesCuadro.length]);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white`}>
            <section className={` block relative w-full h-screen bg-black z-30 mb-12 `}>
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <video poster='images/Hockey-22-Entrenamiento-II.jpg' className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src='images/IDentity-Campus-Eurohockey-2023.mp4' type="video/mp4" />
                    </video>
                </div>
            </section>

            <section className={` block relative w-full max-w-5xl z-30 my-12 px-4 gx:px-0  text-neutral-700 mx-auto `}>
                <div className={` flex flex-col gx:flex-row `}>
                    <div className={` gx:w-8/12 `} data-aos-once="true" data-aos="fade-up">
                        <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Campus Eurohockey 2025 | Alemania</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-6 `} />
                        <p className={` text-center mb-6 h-auto`} ><Image className={` mx-auto w-8 `} src={calendarioIcono} alt='' /></p>
                        <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 `}>Del sábado 9 al martes 19 de agosto</h2>
                        <p className={` font-Roboto text-md leading-relaxed mb-4 `} >
                            Nuestro Campus de Hockey con Evento, está orientado a jóvenes de 12 a 17 años. Proponemos un viaje inolvidable a Barcelona (España) y Monchengladbach (Alemania), donde combinamos 9 tecnificaciones deportivas con las asistencia al principal Torneo de Hockey de toda Europa.
                        </p>
                        <p className={` font-Roboto text-md leading-relaxed mb-4 `} >
                            Una oportunidad única para mejorar tu hockey, convivir con una deportista Olímpica, conocer Europa y vivir el Eurohockey 2025 desde dentro.
                        </p>
                        <p className={` font-Roboto font-normal text-md mt-6 text-center text-white`}>
                            <Link className={` inline-block mx-auto py-2 px-8 bg-[rgb(188,0,121)] bg-fucsiaAzulRatioFondo hover:bg-none rounded-md border-black border-solid border-1 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 `} href="">
                                Agendá tu reunión <Image className={` inline-block h-4 w-auto ml-2`} src={calendarioCheckIcono} alt='' /></Link></p>
                    </div>
                    <p className={` gx:w-4/12 relative w-full mt-6 gx:ml-12 gx:aspect-[3/5] aspect-[5/2] overflow-hidden `} data-aos-once="true" data-aos="fade-left">

                        {imagenesCuadro.map((item, index) => (
                            <Image className={`text-blue-950 object-cover absolute top-0 lef-0 w-full h-full transition-opacity ease-in-out duration-[618ms] ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'} `} key={index} src={item} alt='' />
                        ))}

                    </p>
                </div>
            </section>

            <section className={`  max-w-5xl w-full mx-auto `}>
                <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>La mejor experiencia de hockey de vida</h2>
                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-6 `} />
                <div className={` grid sm:grid-cols-1 md:grid-cols-2 gx:grid-cols-3 gap-4 px-4 gx:px-0`}>
                    {mejorExperienciaImgs.map((item, index) => (
                        <p key={index} className={` inline-block `} >
                            <Image data-aos-once="true" data-aos="fade" className={` w-full h-full `} src={item} alt='' />
                        </p>
                    ))}
                </div>
            </section>

            <section className={` bg-neutral-100 my-12 `}>
                <div className={` max-w-5xl w-full mx-auto `}>
                    <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Experiencia All Inclusive</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-6 `} />
                </div> 
                <ul className={` max-w-5xl w-full mx-auto px-4 gx:px-0 grid grid-cols-1 md:grid-cols-2 gx:grid-cols-3 gap-4 pb-12`}>
                    {allInclusiveExperienci.map((item, index) => (
                        <div key={index}  data-aos-once="true" data-aos="zoom-out" >
                            <li className={` overflow-hidden border-2 border-solid border-black border-opacity-10 `} onClick={() => infoBoxToggle(index)}>
                                <h4 className={` px-4 py-2 font-BebasNeue  ${openIndex === index ? 'text-[rgb(211,0,126)]' : 'text-blue-950'} text-3xl  cursor-pointer z-30  overflow-hidden `} ><span className={` inline-block w-6`}>{openIndex === index ? `—` : `+`}</span> {item.titulo}</h4> 
                                <p ref={el => infoBoxRefs.current[index] = el} className={` opacity-0 h-0 px-6 z-20 text-neutral-500 text-lg font-Roboto leading-relaxed border-t-2 border-solid border-black border-opacity-10 `}>{item.contenido}</p> 
                            </li>
                        </div>
                    ))}
                </ul>
            </section>

            <div className={` relative bg-fucsiaAzulFondoDos clear-both `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>
        </main>
    );
}


