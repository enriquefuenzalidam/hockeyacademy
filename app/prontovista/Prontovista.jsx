"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ImagenesListas from "components/imageneslistas";

const ProntoVista = ( ) => {

    const router = useRouter();
    const volverBoton = () => window.history.length > 1 ? router.back() : router.push("/");

    const searchParams = useSearchParams();
    const initialIndex = parseInt(searchParams.get("index"), 10) || 0;

    const [thumbnailsVisible, setThumbnailsVisible] = useState(true);
    const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex);

    const imagenesListaNumero = parseInt(searchParams.get("imagenesListaNumero"), 10) || 0;
    const imagenesLista = ImagenesListas[imagenesListaNumero] || ImagenesListas[0]; 

    useEffect(() => {
        if (initialIndex >= 0 && initialIndex < imagenesLista.length) {
          setCurrentImageIndex(initialIndex);
        }
      }, [initialIndex, imagenesLista.length]);
    
    const listaPosicion = ((currentImageIndex+1) * -88)+32;

    return (
        <main className={` relative w-dvw h-dvh flex flex-col justify-end items-center overflow-hidden bg-black `} >

            {!!imagenesLista.length && (
                    <section className={` absolute inset-0 `} >
                    {imagenesLista.map((img, index) => (
                            <Image key={index} className={` absolute w-full h-full object-center object-contain ${index === currentImageIndex ? `opacity-100` : `opacity-0` } transition-all ease-in-out duration-300 `} src={img} alt='' />
                    ))}
                </section>
            )}

            <section className={` absolute inset-0 w-full h-full `} >
                <span onClick={volverBoton} className={` cursor-pointer ml-6 sm:ml-8 md:ml-12 mt-6 sm:mt-8 md:mt-12 inline-block shadow-md shadow-black/70 px-4 py-1 font-black text-xl text-black bg-[#5fd2ff] uppercase rounded-sm transition-all ease-in-out duration-300 `}>
                    Volver
                </span>
            </section>

            <section className={` relative block w-[calc(100vw-3rem)] text-center ${thumbnailsVisible ? `h-44` : `h-16 ` } transform-all ease-in-out duration-700 overflow-hidden `} >

                <span className={` relative cursor-pointer mx-auto inline-block shadow-md shadow-black/70 px-4 py-1 font-black text-base text-black bg-[#5fd2ff] uppercase rounded-sm `}
                        onClick={() => setThumbnailsVisible(!thumbnailsVisible)}>
                    {thumbnailsVisible ? `Ocultar Lista` : `Mostrar Lista` }
                </span>

                {!!imagenesLista.length && (
                    <div style={{ translate: `${listaPosicion}px 0` }} className={` absolute top-10 left-1/2 h-36 whitespace-nowrap pt-6 px-3 transition-all ease-in-out duration-700 ${thumbnailsVisible ? `opacity-100` : `opacity-0` } `} >
                        {imagenesLista.map((item, index) => (
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