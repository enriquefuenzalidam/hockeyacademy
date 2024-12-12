"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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


const ProntoVista = ({ imagenesLista = hockeyacademycampimagenes }) => {

    const searchParams = useSearchParams();
    const initialIndex = parseInt(searchParams.get("index"), 10) || 0;

    const [thumbnailsVisible, setThumbnailsVisible] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

    useEffect(() => {
        if (initialIndex >= 0 && initialIndex < imagenesLista.length) {
          setCurrentImageIndex(initialIndex);
        }
      }, [initialIndex, imagenesLista.length]);
    
    const listaPosicion = ((currentImageIndex+1) * -88)+32;

    return (
        <main className={` relative w-svw h-svh flex flex-col justify-end items-center overflow-hidden bg-black `} >

            {!!hockeyacademycampimagenes.length && (
                    <section className={` absolute inset-0 `} >
                    {hockeyacademycampimagenes.map((img, index) => (
                            <Image key={index} className={` absolute w-full h-full object-center object-contain ${index === currentImageIndex ? `opacity-100` : `opacity-0` } transition-all ease-in-out duration-300 `} src={img} alt='' />

                    ))}
                </section>
            )}

            <section className={` absolute inset-0 w-full h-full `} >
                <Link href='/haenimagenes' className={` ml-3 sm:ml-6 md:ml-12 mt-3 sm:mt-6 md:mt-12 inline-block shadow-md shadow-black/70 px-4 py-1 font-black text-xl text-black bg-[#5fd2ff] uppercase rounded-sm transition-all ease-in-out duration-300 `}>
                    Volver
                </Link>
            </section>

            <section className={` relative block w-[calc(100vw-3rem)] text-center ${thumbnailsVisible ? `h-44` : `h-16 ` } transform-all ease-in-out duration-700 overflow-x-hidden `} >

                <span className={` relative cursor-pointer mx-auto inline-block shadow-md shadow-black/70 px-4 py-1 font-black text-base text-black bg-[#5fd2ff] uppercase rounded-sm `}
                        onClick={() => setThumbnailsVisible(!thumbnailsVisible)}>
                    {thumbnailsVisible ? `Ocultar Lista` : `Mostrar Lista` }
                </span>

                {!!hockeyacademycampimagenes.length && (
                    <div style={{ translate: `${listaPosicion}px 0` }} className={` absolute top-10 left-1/2 h-36 whitespace-nowrap overflow-hidden pt-6 px-3 transition-all ease-in-out duration-700 ${thumbnailsVisible ? `opacity-100` : `opacity-0` } `} >
                        {hockeyacademycampimagenes.map((item, index) => (
                            <span onClick={() => setCurrentImageIndex(index)} key={index} className={` cursor-pointer relative inline-block shadow-lg shadow-black/70 hover:shadow-lg hover:shadow-black/70 rounded-sm overflow-hidden ${thumbnailsVisible ? `opacity-100` : `opacity-0` } aspect-1 h-20 mx-1 hover:scale-125 hover:z-50 transition-all ease-in-out duration-300 `}>
                                <Image className={` relative w-full h-full object-center object-cover `} src={item} alt='' />
                                <div className={` absolute top-0 left-0 w-full h-full border-4 border-solid border-[#5fd2ff] ${index === currentImageIndex ? `` : `hidden` } `} />
                                <div className={` absolute top-0 left-0 w-full h-full backdrop-grayscale ${index === currentImageIndex ? `hidden` : ` opacity-70 hover:opacity-0` } `} />
                            </span>
                        ))}
                    </div>
                )}

            </section>
        </main>
    );
}

export default ProntoVista;