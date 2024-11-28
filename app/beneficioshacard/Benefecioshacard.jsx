
import { Footer } from 'components/footer';
import Image from 'next/image';

import BeneficiosImage from 'public/hacard/beneficios.png';
import FiestaHaCierre from 'public/hacard/fiestacierreha.png';
import HolaSoyHaCard from 'public/hacard/holasoyhacard.png';
import Tarjeta from 'public/hacard/tarjeta.png';

import HACard01 from 'public/hacard/hacard_01.png';
import HACard02 from 'public/hacard/hacard_02.png';

import hockeyacademycampsponsor01 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_01.png';
import hockeyacademycampsponsor02 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_02.png';
import hockeyacademycampsponsor03 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_03.png';
import hockeyacademycampsponsor04 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_04.png';
import hockeyacademycampsponsor05 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_05.png';
import hockeyacademycampsponsor06 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_06.png';
import hockeyacademycampsponsor07 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_07.png';

const sponsors = [
    hockeyacademycampsponsor01,
    hockeyacademycampsponsor02,
    hockeyacademycampsponsor03,
    hockeyacademycampsponsor04,
    hockeyacademycampsponsor05,
    hockeyacademycampsponsor06,
    hockeyacademycampsponsor07
];


export default function BenefeciosHaCard() {
    return (


        <main className={`block relative z-0 w-full pl-0 md:pl-32 mt-[4.4rem] md:mt-0`}>

            <div className={` relative bg-otoFondo `}>

            <section className={` block relative w-full aspect-[16/5] z-30 `}>
                <div className={` absolute z-10 top-0 left-0 w-full h-full bg-[url('/hacard/fiestacierreha.png')] bg-center bg-cover `} />

                <div className={` relative z-30 flex flex-col justify-center items-center w-full h-full `}>

                    <h2 className={` block w-full relative text-center tracking-wide font-BebasNeue text-white text-4xl sm:text-5xl md:text-6xl mx-8` } style={{ textShadow: `0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black, 0 0 1em black` }}>Beneficios HA Card</h2>


                </div>
            </section>

                <div className={` absolute inset-0 opacity-10 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />


                <div className={`  bg-whiteFadedFondo`}>

                    <section className={` relative mx-auto max-w-5xl z-30 pb-16 pt-32`}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Beneficios</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-3 `} />
                        <div className={` block text-center `}>


                        <div className={` mx-auto max-w-2xl p-6 items-start justify-start align-top `}>
                        <p data-aos-once="true" data-aos="fade-up" className={` font-Roboto font-medium text-lg sm:text-xl md:text-2xl text-blue-950 leading-normal text-justify hyphens-auto `}>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Productos de nuestras alianzas estratégicas, todas nuestr@s jugador@s que tengan la <span className={` font-extrabold  text-sky-600 `}>HA Card</span> podrán disfrutar de descuentos exclusivos con nuestros aliados.</p>
                        </div>
                        <div className={` mx-auto text-center overflow-visible `}>
                            {sponsors.map((src, index) => (
                                <span data-aos-once="true" data-aos="zoom-in" key={index} className={` relative inline-block aspect-1 bg-[#76b2cc] rounded-full w-36 overflow-hidden m-2 sm:m-6 md:m-8`}>
                                    <Image className={` absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-9/12 h-auto `} src={src} alt='' />
                                </span>
                            ))}
                        </div>
                        </div>
                    </section>

                    <section className={` relative mx-auto max-w-5xl z-30 pb-32 `}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>HA Card</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-3 `} />
                        <div className={` block text-center `}>


                        <div className={` mx-auto max-w-2xl p-6 items-start justify-start align-top `}>
                            <p data-aos-once="true" data-aos="fade-up" className={` font-Roboto font-medium text-lg sm:text-xl md:text-2xl text-blue-950 leading-normal text-justify hyphens-auto `}>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>La credencial <span className={` font-extrabold  text-sky-600 `}>HA Card</span> será un premio que las jugadoras obtendrán luego de tener 5 meses de antigüedad en la academia.</p>
                        </div>

                        <div className={` grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2 gap-6 p-6`}>
                            <Image data-aos-once="true" data-aos="zoom-in" className={` shadow-lg shadow-[rgba(0,0,0,0.5)] `} src={HACard01} alt='Beneficios' />
                            <Image data-aos-once="true" data-aos="zoom-in" className={` shadow-lg shadow-[rgba(0,0,0,0.5)] `} src={HACard02} alt='Fiesta HA ' />
                        </div>
 
                        </div>
                    </section>

                </div>
                <Footer />
            </div>
        </main>


    );
}


