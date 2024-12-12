"use client";
import Image from 'next/image';
import PlantillaUno from 'components/plantillauno';

import { AlianzEstrtgHA, SponsorsHA } from 'components/hockeyacademysponsorslista';

export default function Sponsors() {


    return (
        <PlantillaUno
            contentc={
                <>
                    <section data-aos-once="true" data-aos="fade-up" className={` relative mx-auto max-w-5xl z-30 pt-32`}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Sponsors Hockey Academy</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-5 `} />
                        {!!SponsorsHA.length && (
                            <div className={` mx-auto text-center overflow-visible `}>
                                {SponsorsHA.map((src, index) => (
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
                        {!!AlianzEstrtgHA.length && (
                            <div className={` mx-auto text-center overflow-visible `}>
                                {AlianzEstrtgHA.map((src, index) => (
                                    <span data-aos-once="true" data-aos="zoom-in" key={index} className={` relative inline-block aspect-1 bg-[#76b2cc] rounded-full w-36 overflow-hidden m-2 sm:m-6 md:m-8`}>
                                        <Image className={` absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-9/12 h-auto `} src={src} alt='' />
                                    </span>
                                ))}
                            </div>
                        )}
                    </section>
                </>
            }
        />
    );
}


