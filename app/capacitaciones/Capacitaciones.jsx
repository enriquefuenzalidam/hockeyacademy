
import PlantillaUno from 'components/plantillauno';
import HockeyAcademyVideoA from 'components/hockeyacademyvideovideoa';

export default function Capacitaciones() {


    return (
        <PlantillaUno
            contenta={
                <HockeyAcademyVideoA alto={` h-[38vh] `} >

                    <div className={` block absolute left-0 top-0 w-full h-full bg-black opacity-60 `} />
                    <div className={` relative flex flex-col justify-center items-center w-full h-full `}>
                        <h2 data-aos-once="true" data-aos="zoom-out-down" className={` block w-full relative text-center tracking-wide font-BebasNeue text-[#BAECFF] text-6xl mx-8 `} style={{ textShadow: `0 0 1rem rgba(0,0,0,1),0 0 2rem rgba(0,0,255,0.5)` }}>Capacitaciones</h2>
                    </div>

                </HockeyAcademyVideoA>
            }
            contentc={
                <section className={` relative mx-auto max-w-5xl pt-28 pb-10 min-h-[60vh]`}>
                    <h2 data-aos-once="true" data-aos="zoom-out-down" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>En construcción</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />

                </section>
            }
        />

    );
}
