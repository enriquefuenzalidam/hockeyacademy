
import HockeyAcademyVideoA from 'components/hockeyacademyvideovideoa';
import PlantillaUno from 'components/plantillauno';
import Image from 'next/image';
import imagenA from 'public/hockeyacademycamp/hockeyacademycamp_imagen_09.jpg';
import imagenB from 'public/hockeyacademycamp/hockeyacademycamp_imagen_25.jpg';

export default function Quienessomos() {
    return (
        <PlantillaUno
            contenta={
                <HockeyAcademyVideoA alto={` h-[38vh] `} >
                    <div className={` block absolute left-0 top-0 w-full h-full bg-black opacity-60 `} />
                    <div className={` relative z-30 flex flex-col justify-center items-center w-full h-full `}>
                        <h2 className={` block w-full relative text-center tracking-wide font-BebasNeue text-[#ffffff] text-6xl mx-8 `} style={{ textShadow: `0 0 1rem rgba(0,0,0,1),0 0 2rem rgba(0,0,255,0.5)` }}>Quiénes Somos</h2>
                    </div>
                </HockeyAcademyVideoA>
            }
            contentc={
                <section className={` relative pt-12 pb-16 `}>
                    <div className={` absolute inset-0 bg-repeat bg-whiteFadedFondoDos opacity-40 `} />

                    <div className={` relative mx-auto max-w-5xl p-6 items-start justify-start align-top `}>
                        <p data-aos-once="true" data-aos="fade-up" className={` indent-12 font-Roboto text-lg md:text-xl text-blue-950 text-justify hyphens-auto my-6 `} style={{ lineHeight: `1.6em` }}>
                            Somos un equipo de profesionales de la Educación Física, especializados en hockey sobre césped, con una vasta trayectoria en el deporte y una experiencia internacional que abarca países como Argentina, España, Francia y Chile. Nuestra pasión por el hockey y el compromiso con el desarrollo integral de nuestros jugadores nos define.
                        </p>
                        <p data-aos-once="true" data-aos="fade-up"  className={` mx-auto w-full md:w-4/5 relative aspect-[1980/1114] overflow-hidden rounded-md shadow-black/30 shadow-md my-12 `} >
                            <Image src={imagenA} alt='' className={`text-blue-950 object-cover absolute top-0 left-0 w-full h-full `}  />
                        </p>
                        <p data-aos-once="true" data-aos="fade-up" className={` indent-12 font-Roboto text-lg md:text-xl text-blue-950 text-justify hyphens-auto my-6 `} style={{ lineHeight: `1.6em` }}>
                            Nos distingue nuestra profunda vocación, que va más allá de la técnica deportiva, para centrarnos en la persona en su totalidad. Cada proyecto, cada entrenamiento y cada momento de nuestra academia está impregnado por nuestra energía emprendedora, entusiasmo y, sobre todo, una auténtica pasión por lo que hacemos, valores que buscamos transmitir en cada acción.
                        </p>
                        <div className={` flex flex-col-reverse md:flex-row gap-0 md:gap-16 w-full my-12 mx-auto `}>
                            <div className={` w-full md:w-1/2 flex items-center `}>
                            <p data-aos-once="true" data-aos="fade-up" className={` indent-12 font-Roboto text-lg md:text-xl text-blue-950 text-justify hyphens-auto mt-12 md:mt-0 `} style={{ lineHeight: `1.6em` }}>
                                Lo que realmente caracteriza nuestra metodología es el ambiente humano que cultivamos: un espacio donde la calidez, la amistad, la diversión y la distensión son elementos fundamentales. Creemos firmemente que un entorno positivo y motivador es clave para un aprendizaje verdaderamente significativo. En Hockey Academy, nos aseguramos de que cada entrenamiento sea una experiencia enriquecedora, tanto en el plano deportivo como en el personal, fomentando el crecimiento integral de cada jugador.
                            </p>
                            </div>
                            <div className={` w-full md:w-1/2 `}>
                            <p data-aos-once="true" data-aos="fade-up"  className={` mx-auto  relative aspect-[4/3] overflow-hidden rounded-md shadow-black/30 shadow-md `} >
                                <Image src={imagenB} alt='' className={`text-blue-950 object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full `}  />
                            </p>
                            </div>
                        </div>
                    </div>
                </section>
            }
        />
    );
}


