"use client";

import { Footer } from 'components/footer';
import Link from 'next/link';
import Image from 'next/image';

import VerticalVideo from 'components/verticalvideo';
import hockeyacademylogob from 'public/hockeyacademycamp/hockeyacademylogob.png';

import hockeyacademycampimagen01 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_01.jpg';
import hockeyacademycampimagen02 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_02.jpg';
import hockeyacademycampimagen03 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_03.jpg';
import hockeyacademycampimagen04 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_04.jpg';
import hockeyacademycampimagen05 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_05.jpg';
import hockeyacademycampimagen06 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_06.jpg';
import hockeyacademycampimagen07 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_07.jpg';
import hockeyacademycampimagen08 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_08.jpg';
import hockeyacademycampimagen09 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_09.jpg';
import hockeyacademycampimagen10 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_10.jpg';
import hockeyacademycampimagen11 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_11.jpg';
import hockeyacademycampimagen12 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_12.jpg';
import hockeyacademycampimagen13 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_13.jpg';
import hockeyacademycampimagen14 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_14.jpg';
import hockeyacademycampimagen15 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_15.jpg';
import hockeyacademycampimagen16 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_16.jpg';
import hockeyacademycampimagen17 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_17.jpg';
import hockeyacademycampimagen18 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_18.jpg';
import hockeyacademycampimagen19 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_19.jpg';
import hockeyacademycampimagen20 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_20.jpg';
import hockeyacademycampimagen21 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_21.jpg';
import hockeyacademycampimagen22 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_22.jpg';
import hockeyacademycampimagen23 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_23.jpg';
import hockeyacademycampimagen24 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_24.jpg';
import hockeyacademycampimagen25 from 'public/hockeyacademycamp/hockeyacademycamp_imagen_25.jpg';

const hockeyacademycampimagenes = [
    hockeyacademycampimagen01,
    hockeyacademycampimagen02,
    hockeyacademycampimagen03,
    hockeyacademycampimagen04,
    hockeyacademycampimagen05,
    hockeyacademycampimagen06,
    hockeyacademycampimagen07,
    hockeyacademycampimagen08,
    hockeyacademycampimagen09,
    hockeyacademycampimagen10,
    hockeyacademycampimagen11,
    hockeyacademycampimagen12,
    hockeyacademycampimagen13,
    hockeyacademycampimagen14,
    hockeyacademycampimagen15,
    hockeyacademycampimagen16,
    hockeyacademycampimagen17,
    hockeyacademycampimagen18,
    hockeyacademycampimagen19,
    hockeyacademycampimagen20,
    hockeyacademycampimagen21,
    hockeyacademycampimagen22,
    hockeyacademycampimagen23,
    hockeyacademycampimagen24,
    hockeyacademycampimagen25

]


export default function HAenimagenes() {
    return (


        <main className={`block relative z-0 w-full pl-0 md:pl-32 mt-[4.4rem] md:mt-0`}>

            <div className={` relative bg-otoFondo `}>
                <div className={` absolute inset-0 opacity-15 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />


                <div className={`  bg-whiteFadedFondo`}>

                    <section className={` relative mx-auto max-w-5xl pt-16 text-center `}>
                        <Image className={` w-2/5 md:w-2/5 h-auto mx-auto `} src={hockeyacademylogob} alt='' />
                    </section>

                    <section className={` block relative max-w-5xl w-full bg-transparent mt-14 mx-auto px-4 gx:px-0 `}>
                        <div className={` bg-black w-full shadow-lg shadow-[rgba(0,0,0,0.5)] rounded-md overflow-hidden `}>
                            <video poster='hockeyacademycamp/hockeyacademyinicio.jpg' className='w-full aspect-[24/11]' preload="auto" autoPlay="autoplay" loop playsInline controls >
                                <source src='hockeyacademycamp/hockeyacademyinicio_b.mp4' type="video/mp4" />
                            </video>
                        </div>
                    </section>

                    <section className={` relative mx-auto max-w-5xl z-30 pt-28 `}>
                        <h2 data-aos-once="true" data-aos="zoom-out-down" className={` text-center tracking-wide font-BebasNeue text-[#000] text-4xl mx-8 mb-6`}>Hockey Academy Camp en Videos</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />

                        <div className={` grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-2 px-4 gx:px-0 `}>

                            {['hockeyacademycamp/hockeyacademycamp_video_01.mp4',
                                'hockeyacademycamp/hockeyacademycamp_video_02.mp4',
                                'hockeyacademycamp/hockeyacademycamp_video_03.mp4',
                                'hockeyacademycamp/hockeyacademycamp_video_04.mp4'
                            ].map((videoSrc, index) => (<VerticalVideo key={index} videoSrc={videoSrc} />))}

                        </div>
                    </section>
                    <section className={` relative mx-auto max-w-5xl z-30 pt-32`}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Hockey Academy en Imágenes</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />


                        {!!hockeyacademycampimagenes && (
                            <div className={`  relative text-center w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 gx:p-0`}>
                                {hockeyacademycampimagenes.map((imgn, index) => (
                                    <Link key={index} href={imgn.src} className={` cursor-pointer inline-block relative w-full aspect-1 overflow-hidden shadow-lg shadow-[rgba(0,0,0,0.5)] rounded-sm m-0 p-0 border-0 hover:scale-125 z-10 hover:z-50 transition-all ease-in-out duration-700 `}>
                                        <Image data-aos-once="true" data-aos="fade" src={imgn} alt='' className={` object-center object-cover w-full h-full `} />
                                    </Link>
                                ))}
                            </div>

                        )}
                    </section>

                    <section className={` relative mx-auto max-w-5xl z-30 pt-28 pb-32 `}>
                        <h2 data-aos-once="true" data-aos="zoom-out-down" className={` text-center tracking-wide font-BebasNeue text-[#000] text-4xl mx-8 mb-6`}>Visita el Google Drive de<br/>Hockey Academy</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />

                        <p data-aos-once="true" data-aos="fade-up" className={` font-Roboto font-medium text-lg sm:text-xl md:text-2xl text-blue-950 leading-normal text-center px-6 w-3xl mx-auto mb-8`}>
                            Disfruta de Hockey Academy en imágenes de alta definición.</p>

                        <Link data-aos-once="true" data-aos="zoom-in" href='https://drive.google.com/drive/folders/15xdClWddp3us1h7s5f3qItpNh9aH2tYE?usp=sharing' className={`flex items-center justify-center bg-white bg-opacity-60 w-2/5 md:w-1/5 aspect-1 mx-auto cursor-pointer rounded-full border-8 border-[#00b3f9] `} >
                            <svg className={` w-3/5 h-auto mx-auto cursor-pointer `} viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                                <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da" />
                                <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47" />
                                <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335" />
                                <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d" />
                                <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc" />
                                <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00" />
                            </svg>
                        </Link>
                            
                    </section>

                </div>
                <Footer />
            </div>
        </main>


    );
}


