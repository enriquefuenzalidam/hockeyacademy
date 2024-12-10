
import { Footer } from 'components/footer';
import HockeyAcademyVideoA from 'components/hockeyacademyvideovideoa';

export default function Quienessomos() {
    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 mt-[4.4rem] md:mt-0 `}>

            <HockeyAcademyVideoA alto={` h-[38vh] `} >

                <div className={` block absolute left-0 top-0 w-full h-full bg-black opacity-60 `} />
                <div className={` relative z-30 flex flex-col justify-center items-center w-full h-full `}>
                    <h2 className={` block w-full relative text-center tracking-wide font-BebasNeue text-[#ffffff] text-6xl mx-8 `} style={{ textShadow: `0 0 1rem rgba(0,0,0,1),0 0 2rem rgba(0,0,255,0.5)` }}>Quiénes Somos</h2>
                </div>

            </HockeyAcademyVideoA>

            <div className={` relative w-full bg-otoFondo bg-fixed `}>
            <div className={` absolute inset-0 opacity-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <section className={` relative pt-12 pb-16 `}>
                    <div className={` absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[rgba(0,0,0,0.6)] from-0% via-[rgba(0,0,0,0.2)] via-35% to-transparent `} />
                    <div className={` absolute inset-0 bg-repeat bg-whiteFadedFondoDos `} />

                    <div className={` relative mx-auto max-w-5xl p-6 items-start justify-start align-top `}>
                        <p data-aos-once="true" data-aos="fade-up" className={`  font-Roboto text-lg text-blue-950 leading-relaxed text-justify hyphens-auto gap-6 columns-1 md:columns-2 `}>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Somos un equipo de profesionales de la Educación Física, especializados en hockey sobre césped, con una vasta trayectoria en el deporte y una experiencia internacional que abarca países como Argentina, España, Francia y Chile. Nuestra pasión por el hockey y el compromiso con el desarrollo integral de nuestros jugadores nos define.
                            <br /><br /><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Nos distingue nuestra profunda vocación, que va más allá de la técnica deportiva, para centrarnos en la persona en su totalidad. Cada proyecto, cada entrenamiento y cada momento de nuestra academia está impregnado por nuestra energía emprendedora, entusiasmo y, sobre todo, una auténtica pasión por lo que hacemos, valores que buscamos transmitir en cada acción.
                            <br /><br /><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Lo que realmente caracteriza nuestra metodología es el ambiente humano que cultivamos: un espacio donde la calidez, la amistad, la diversión y la distensión son elementos fundamentales. Creemos firmemente que un entorno positivo y motivador es clave para un aprendizaje verdaderamente significativo. En Hockey Academy, nos aseguramos de que cada entrenamiento sea una experiencia enriquecedora, tanto en el plano deportivo como en el personal, fomentando el crecimiento integral de cada jugador.</p>
                    </div>
                </section>

                <Footer />
            </div>

        </main>
    );
}


