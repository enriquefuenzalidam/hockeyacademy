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

import citasFondo from 'public/images/citasFondo.jpg';


const remToPixels = (rem) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

export default function Eurohockey() {


    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);

    const [infoBoxOpening, setOpenInfoBox] = useState(null); 
    const infoBoxRefs = useRef([]);

    const [currentCitaIndex, setCurrentCitaIndex] = useState(0);
    const [fade, setFade] = useState(true); // State to manage fade effect
  

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
    }, []);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };

      useEffect(() => {
        const interval = setInterval(() => {
          setFade(false); // Start fade out
          setTimeout(() => {
            setCurrentCitaIndex((prevIndex) => (prevIndex + 1) % citasEurohockey2025.length);
            setFade(true); // Start fade in
          }, 382); // Duration of fade out before changing text
        }, 4618); // Change the interval to your preference
    
        return () => clearInterval(interval);
      }, []);
    
      const { autor, cita } = citasEurohockey2025[currentCitaIndex];
    

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
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
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
                    <p className={` gx:w-4/12 relative w-full mt-12 gx:mt-0 gx:ml-12 gx:aspect-[3/5] aspect-[5/2] overflow-hidden `} data-aos-once="true" data-aos="fade-left">

                        {imagenesCuadro.map((item, index) => (
                            <Image className={`text-blue-950 object-cover absolute top-0 lef-0 w-full h-full transition-opacity ease-in-out duration-[618ms] ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'} `} key={index} src={item} alt='' />
                        ))}

                    </p>
                </div>
            </section>

            <section className={`  max-w-5xl w-full mx-auto `}>
                <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>La mejor experiencia de hockey de vida</h2>
                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
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
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
                </div> 
                <ul className={` max-w-5xl w-full mx-auto px-4 gx:px-0 grid grid-cols-1 md:grid-cols-2 gx:grid-cols-3 gap-4 pb-12`}>
                    {allInclusiveExperienci.map((item, index) => (
                        <div key={item.id} data-aos-once="true" data-aos="zoom-out" >
                            <li className={` overflow-hidden border-2 border-solid border-black border-opacity-10 `} onClick={() => infoBoxToggle(index)}>
                                <h4 className={` px-4 py-2 font-BebasNeue  ${openIndex === index ? 'text-[rgb(211,0,126)]' : 'text-blue-950'} text-3xl  cursor-pointer z-30  overflow-hidden `} ><span className={` inline-block w-6`}>{openIndex === index ? `—` : `+`}</span> {item.titulo}</h4> 
                                <p ref={el => infoBoxRefs.current[index] = el} className={` opacity-0 h-0 px-6 z-20 text-neutral-500 text-lg font-Roboto leading-relaxed border-t-2 border-solid border-black border-opacity-10 `}>{item.contenido}</p> 
                            </li>
                        </div>
                    ))}
                </ul>
            </section>

            <section className={` max-w-5xl w-full mx-auto `}>
                <div className={` flex md:flex-row flex-col px-8 gap-8 md:gap-0 my-20`}>
                    <div className={` w-full md:w-6/12 justify-start items-start`}>
                        <h4 className={` text-left font-BebasNeue text-[#F6BB0E] text-2xl mb-2 md:mr-12 `}>Equipamiento</h4>
                        <h3 className={` text-left font-BebasNeue text-blue-950 text-4xl mb-6 md:mr-12 `}>Kit de Viaje</h3>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block h-1 w-8 border-none bg-[rgb(211,0,126)] mb-8 `} />
                        <p className={` font-Roboto text-lg text-neutral-500 leading-relaxed md:mr-12  `}>Proponemos un viaje inolvidable, por lo que deseamos te lleves muchos recuerdos. Incluimos la indumentaria deportiva para realizar las tecnificaciones (Faldas, camisetas, buzo, mochila). Asimismo, en la cena despedida llevaremos a cabo distintos sorteos. <strong>¡No te lo puedes perder!</strong></p>
                    </div>
                    <p className={` w-full md:w-6/12 flex justify-center items-center`}>
                        <Image data-aos-once="true" data-aos="fade-left" className={` max-w-md w-full `} src={equipamientoA} alt='' />
                    </p>
                </div>
                <div className={` flex md:flex-row flex-col-reverse px-8 gap-8 md:gap-0 my-20`}>
                    <p className={` w-full md:w-6/12 flex justify-center items-center`}>
                        <Image data-aos-once="true" data-aos="fade-right" className={` max-w-sm w-full `} src={equipamientoB} alt='' />
                    </p>
                    <div className={` w-full md:w-6/12 justify-start items-start`}>
                        <h4 className={` text-left font-BebasNeue text-[#F6BB0E] text-2xl mb-2 md:mr-12 `}>Equipamiento</h4>
                        <h3 className={` text-left font-BebasNeue text-blue-950 text-4xl mb-6 md:mr-12 `}>Monitoreo y control de pasajeros</h3>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block h-1 w-8 border-none bg-[rgb(211,0,126)] mb-8 `} />
                        <p className={` font-Roboto text-lg text-neutral-500 leading-relaxed md:mr-12  `}>EFESUR es un sistema desarrollado para la industria del turismo estudiantil, que comprende una plataforma de última tecnología en monitoreo y control de pasajeros. Lleva adelante el control y la seguridad de los pasajeros, prioriza la agilidad y eficiencia en los puntos de control y garantiza la información clara y trasparente para todos los actores del circuito.</p>
                    </div>
                </div>
            </section>

            <section className={` bg-neutral-100 `}>
                <div className={` max-w-5xl w-full mx-auto `}>
                    <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Condiciones de pago</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
                </div>
                <div className={` max-w-5xl w-full mx-auto px-4 gx:px-0 text-center `}>

                    {pagoCondiciones.map((item, index) => (
                        <div key={index} className={` inline-block w-full md:w-1/2 lg:w-1/3 mx-auto align-top my-6 `}>
                            <div className={` mx-2`}>
                                <p className={` my-4 `}><Image className={` mx-auto w-8 h-auto `} src={item.icono} alt='' /></p>
                                <h4 className={` text-3xl font-BebasNeue text-blue-950 my-4 `}>{item.titulo}</h4>
                                <p className={` mx-auto w-60 md:w-full font-Roboto text-lg text-neutral-500 leading-relaxed `}>{item.descripcion}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <p className={` font-Roboto font-normal text-md py-12 text-center text-white`}>
                    <Link className={` inline-block mx-auto py-2 px-8 bg-[rgb(188,0,121)] bg-fucsiaAzulRatioFondo hover:bg-none rounded-md border-black border-solid border-1 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 `} href="">
                        Reservá tú lugar <Image className={` inline-block h-4 w-auto ml-2`} src={calendarioCheckIcono} alt='' /></Link></p>
            </section>

            <section className={` relative bg-citasFondo transition-all ease-in-out duration-[618ms] min-h-80 gx:min-h-80 flex flex-grow items-center justify-center `}>
                <div className={` absolute top-0 left-0 inset-0 z-10 opacity-20`}>
                    <Image src={citasFondo} className={` object-center object-cover w-full h-full `} alt='' />
                </div>
                <div className={` absolute top-0 left-0 inset-0 z-10 opacity-50`}>
                    <p className={`mx-auto max-w-3xl font-NotoSerif italic font-light text-[15rem] leading-[12rem] text-blue-950 `}>“</p>
                </div>
                <div className={` relative z-20 max-w-5xl mx-auto `}>
                    <p className={` text-center font-NotoSerif italic text-white text-md lg:text-lg gx:text-xl mx-12 transition-opacity duration-[618ms] ${fade ? 'opacity-100' : 'opacity-0'}`} style={{ lineHeight: '1.8em' }}>{cita}<br/><span className={` font-Cabin text-blue-950 text-md gx:text-xl font-bold leading-relaxed mt-4`}>{autor}</span></p>
                </div>
            </section>


            <div className={` relative bg-fucsiaAzulFondoDos clear-both `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>
        </main>
    );
}


