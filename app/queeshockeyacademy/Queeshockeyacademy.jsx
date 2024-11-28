import Link from "next/link";
import { Footer } from "components/footer";


export default function Queeshockeyacademy() {
    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white mt-[4.4rem] md:mt-0 `}>

            <section className={` block relative w-full aspect-[9/10] sm:aspect-[16/7] bg-black z-30 `}>
                <div className={` absolute top-0 left-0 w-full h-full `}>
                    <video poster='images/euroHockey2025F.webp' className='object-cover object-center w-full h-full' preload="auto" autoPlay="autoplay" muted loop playsInline>
                        <source src='images/IDentity-Campus-Hockey-2022.mp4' type="video/mp4" />
                    </video>
                </div>
                <div className={` block absolute left-0 top-0 w-full h-full bg-black opacity-60 `} />
                <div className={` relative z-30 flex flex-col justify-end items-center w-full h-full max-w-5xl mx-auto `}>

                    <p className={` inline-block relative text-center mx-auto w-[16rem] lg:w-[28rem] gx:w-[35rem] mb-4 transition-all ease-in-out duration-100`}>
                        <img data-aos-once="true" data-aos="zoom-in" className={` w-1/2 h-auto mx-auto`} src='hockeyacademycamp/hockeyacademycamp_logo.png' alt=''/>
                    </p>
                    <h2 data-aos-once="true" data-aos="zoom-in" className={` block mb-6 w-full relative text-center tracking-wide font-BebasNeue text-white text-4xl lg:text-5xl gx:text-6xl px-8 transition-all ease-in-out duration-100 `}>Hockey Academy</h2>

                </div>
            </section>

            <section className={`block mx-8`}>
                <div className={`block mx-auto max-w-5xl mt-8`}>
                    <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Qué es Hockey Academy</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-8 `} />
                    <p className={` text-blue-950 font-Roboto text-lg leading-relaxed mb-4 text-justify hyphens-auto indent-5 `}>
                        Hockey Academy es una institución de entrenamiento especializada en el desarrollo integral de jugadoras y jugadores de hockey. Nos enfocamos en mejorar de manera personalizada y detallada tanto la técnica individual como las capacidades físicas, lo que garantiza un avance significativo en el rendimiento y ejecución de cada uno de nuestros participantes.
                    </p>
                    <p className={` text-blue-950 font-Roboto text-lg leading-relaxed mb-4 text-justify hyphens-auto indent-5 `}>
                        Nuestra metodología se basa en grupos reducidos y nivelados, lo que permite una corrección inmediata y adaptada a las necesidades de cada jugador. Además, fomentamos un ambiente sano, relajado y divertido, creando las condiciones ideales para un aprendizaje efectivo.
                    </p>
                    <p className={` text-blue-950 font-Roboto text-lg leading-relaxed mb-4 text-justify hyphens-auto indent-5 `}>
                    Contamos con un equipo de entrenadores altamente capacitados, con años de experiencia en el hockey argentino, especializados en la corrección técnica individual. De igual manera, nuestros preparadores físicos son reconocidos en el ámbito del hockey, habiendo trabajado con equipos formativos y adultos, lo que asegura que los entrenamientos sean de la más alta calidad.
                    </p>
                    <p className={` text-blue-950 font-Roboto text-lg leading-relaxed mb-4 text-justify hyphens-auto indent-5 `}>
                    Creemos firmemente que la combinación de estos factores es clave para lograr un desarrollo óptimo y potenciar el rendimiento de nuestros jugadores.
                    </p>
                </div>
            </section>

            <div className={` relative bg-otoFondoDos clear-both mt-28 `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>

        </main>
    );
}


