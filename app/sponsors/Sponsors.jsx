"use client";
import { Footer } from 'components/footer';
import Image from 'next/image';


import hockeyacademycampsponsor01 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_01.png';
import hockeyacademycampsponsor02 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_02.png';
import hockeyacademycampsponsor03 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_03.png';
import hockeyacademycampsponsor04 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_04.png';
import hockeyacademycampsponsor05 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_05.png';
import hockeyacademycampsponsor06 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_06.png';
import hockeyacademycampsponsor07 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_07.png';
import hockeyacademycampsponsor08 from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_08.png';

const sponsorsha = [
    hockeyacademycampsponsor01,
    hockeyacademycampsponsor02,
    hockeyacademycampsponsor03,
    hockeyacademycampsponsor04,
    hockeyacademycampsponsor05,
    hockeyacademycampsponsor06,
    hockeyacademycampsponsor07
];

const alianzestrtgha = [
    hockeyacademycampsponsor08
];

export default function Sponsors() {


    return (

        <main className={`block relative z-0 w-full pl-0 md:pl-32 mt-[4.4rem] md:mt-0`}>

            <div className={` relative bg-otoFondo `}>
                <div className={` absolute inset-0 opacity-10 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />


                <div className={`  bg-whiteFadedFondo`}>

                    <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto max-w-5xl z-30 pt-32`}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Sponsors Hockey Academy</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-5 `} />
                        {!!alianzestrtgha && (
                            <div className={` mx-auto text-center overflow-visible `}>
                                {sponsorsha.map((src, index) => (
                                    <span data-aos-once="true" data-aos="zoom-in" key={index} className={` relative inline-block aspect-1 bg-[#76b2cc] rounded-full w-36 overflow-hidden m-2 sm:m-6 md:m-8`}>
                                        <Image className={` absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-9/12 h-auto `} src={src} alt='' />
                                    </span>
                                ))}
                            </div>
                        )}
                    </section>
                    <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto max-w-5xl z-30 pb-32 pt-24 `}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Alianzas Estratégicas</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-5 `} />
                        {!!alianzestrtgha && (
                            <div className={` mx-auto text-center overflow-visible `}>
                                {alianzestrtgha.map((src, index) => (
                                    <span data-aos-once="true" data-aos="zoom-in" key={index} className={` relative inline-block aspect-1 bg-[#76b2cc] rounded-full w-36 overflow-hidden m-2 sm:m-6 md:m-8`}>
                                        <Image className={` absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-9/12 h-auto `} src={src} alt='' />
                                    </span>
                                ))}
                            </div>
                        )}
                    </section>

                </div>
                <Footer />
            </div>
        </main>

    );
}


