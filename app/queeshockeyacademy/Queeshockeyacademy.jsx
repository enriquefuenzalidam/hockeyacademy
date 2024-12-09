import { Footer } from "components/footer";
import HockeyAcademyVideoA from "components/hockeyacademyvideovideoa";

export default function Queeshockeyacademy() {
    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white mt-[4.4rem] md:mt-0 `}>

            <div className={` relative w-full `}>
                <div className={` absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[rgba(0,0,0,0.6)] from-0% via-[rgba(0,0,0,0.2)] via-35% to-transparent `} />

                <section className={` block relative max-w-5xl w-full bg-transparent pt-32 mx-auto px-4 gx:px-0 `}>
    
                        <h2 data-aos-once="true" data-aos="fade-up" className={` relative text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Qué es Hockey Academy</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` relative block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] `} />

                    </section>

                <section className={`relative block mx-8`}>
                    <div className={`block mx-auto max-w-5xl pt-16`}>
                        <p className={` text-blue-950 font-Roboto text-lg leading-relaxed mb-4 text-justify hyphens-auto indent-5 `}>
                            Hockey Academy es una institución de entrenamiento especializada en el desarrollo integral de jugadoras y jugadores de hockey. Nos enfocamos en mejorar de manera personalizada y detallada tanto la técnica individual como las capacidades físicas, lo que garantiza un avance significativo en el rendimiento y ejecución de cada uno de nuestros participantes.
                        </p>

                        <div className={` relative bg-black shadow-lg shadow-[rgba(0,0,0,0.5)] rounded-md overflow-hidden mt-14 mb-14 w-full md:w-4/5 mx-auto`}>
                            <video poster='hockeyacademycamp/hockeyacademyinicio.jpg' className='w-full aspect-[24/11]' preload="auto" autoPlay="autoplay" loop playsInline controls >
                                <source src='hockeyacademycamp/hockeyacademyinicio_b.mp4' type="video/mp4" />
                            </video>
                        </div>

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
            </div>

            <div className={` relative bg-otoFondoDos clear-both mt-28 `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>

        </main>
    );
}


