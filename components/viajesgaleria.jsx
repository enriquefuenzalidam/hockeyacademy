'use Client';
import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImagenesListas from "components/imageneslistas";

const ViajesGaleria = ({ imageneslista, titulo = 'Galería de nuestros viajes' }) => {

    const imagenesListaNumero = Number.isInteger(parseInt(imageneslista, 10)) ? parseInt(imageneslista, 10) : 0;
    const imagenesLista = ImagenesListas[imagenesListaNumero] || ImagenesListas[0];

    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
    const galleryRef = useRef(null);
    const intervalRef = useRef(null);

    // Memoize the startInterval function
    const startInterval = useCallback(() => {
        intervalRef.current = setInterval(() => {
            setCurrentGalleryIndex((prevIndex) => (prevIndex + 1) % imagenesLista.length);
        }, 4000);
    }, [imagenesLista.length]);

    const clearIntervalTimer = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    }, []);

    // Start the interval on mount
    useEffect(() => {
        startInterval();
        return () => clearIntervalTimer(); // Cleanup on unmount
    }, [startInterval, clearIntervalTimer]);

    const handleNavClick = (index) => {
        setCurrentGalleryIndex(index);
        clearIntervalTimer(); // Clear the existing interval
        startInterval(); // Restart the interval
    };

    const listaPosicion = currentGalleryIndex * -392;

    return (
        <section className={` relative `}>
            <div className={` absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.05)_2rem,rgba(0,0,0,0.02)_calc(100%_-_2rem),rgba(0,0,0,0.15)_100%)] `} />
            <div className={` max-w-5xl w-full mx-auto relative`}>
                <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-[#000] text-4xl mx-8 mb-6 pt-12 `}>{titulo}</h2>
                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-8 `} />
            </div>

            <div className={` relative max-w-5xl w-full mx-auto px-4 gx:px-0 rounded-md h-auto `}>
                <div className={` relative w-full overflow-y-visible overflow-x-hidden h-[24.5rem] `}>
                    {!!imagenesLista.length && (
                        <div ref={galleryRef} style={{ translate: `${listaPosicion}px` }} className={` absolute left-[calc(50%_-_202px)] top-0 w-full whitespace-nowrap no-scrollbar transition-all ease-in-out duration-1000 px-2 `}>
                            {imagenesLista.map((item, index) => (
                                <span className={` inline-block relative h-96 aspect-1 mx-1 shadow-md shadow-[rgba(0,0,0,0.3)] rounded-sm overflow-hidden `} key={index} >
                                    <Image className={` w-full h-full object-center object-cover `} src={item} alt='' />
                                    {index === currentGalleryIndex ?
                                        (<Link className={` absolute inset-0 `} href={`./prontovista?index=${index}&imagenesListaNumero=${imagenesListaNumero}`} />) :
                                        (<div className={` absolute inset-0 backdrop-grayscale-[60%] `} />)
                                    }
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className={` max-w-5xl w-full mx-auto px-4 gx:px-0 text-center py-10 relative `}>
                {!!imagenesLista.length && (
                    <div>
                        {imagenesLista.map((_, index) => (
                            <span key={index} onClick={() => handleNavClick(index)} className={` m-1.5 gx:m-2 inline-block rounded-full h-3 gx:h-4 cursor-pointer ${index === currentGalleryIndex ? 'bg-[#33b4f5] w-12 gx:w-16' : 'bg-black bg-opacity-20 w-3 gx:w-4'} transition-all ease-in-out duration-300 `} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ViajesGaleria;

{/*

                            <div className={` h-96 w-1/6 bg-gradient-to-r from-black/30 to-transparent absolute top-0 left-3 `} />
                            <div className={` h-96 w-1/6 bg-gradient-to-l from-black/30 to-transparent absolute top-0 right-3 `} /> 
    */}