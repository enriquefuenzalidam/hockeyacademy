'use Client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const ViajesGaleria = ({ viajesgalerialist = [], titulo = 'Galería de nuestros viajes' }) => {

    const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
    const viajesGaleriaRefs = useRef([]);
    const galleryRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGalleryIndex((prevIndex) => (prevIndex + 1) % viajesgalerialist.length);
        }, 4000); // Change image every 6 seconds
    
        return () => clearInterval(interval);
    }, [viajesgalerialist.length]);

    useEffect(() => {
        if (galleryRef.current && viajesGaleriaRefs.current[currentGalleryIndex]) {
            const gallery = galleryRef.current;
            const selectedImage = viajesGaleriaRefs.current[currentGalleryIndex];
            const galleryWidth = gallery.offsetWidth;
            const imageWidth = selectedImage.offsetWidth;
            const imageLeftPosition = selectedImage.offsetLeft;

            const scrollPosition = imageLeftPosition - (galleryWidth / 2) + (imageWidth / 2);
            gallery.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    }, [currentGalleryIndex]);

    const handleNavClick = (index) => {
        setCurrentGalleryIndex(index);
    };

    return (
        <section className={` relative `}>
            <div className={` absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.05)_2rem,rgba(0,0,0,0.02)_calc(100%_-_2rem),rgba(0,0,0,0.15)_100%)] `} />
            <div className={` max-w-5xl w-full mx-auto relative`}>
                <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-[#000] text-4xl mx-8 mb-6 pt-12 `}>{titulo}</h2>
                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-8 `} />
            </div>

            <div className={` max-w-5xl w-full mx-auto px-4 gx:px-0 relative rounded-md overflow-hidden  `}>
                {!!viajesgalerialist?.length && (
                    <div ref={galleryRef} className={`  block overflow-hidden whitespace-nowrap scroll-smooth no-scrollbar`}>
                        {viajesgalerialist.map((item, index) => (

                            /* This block should have `border-opacity-100` when is current */
                            <div className={` inline-block relative h-96 aspect-1 mx-1 shadow-md shadow-[rgba(0,0,0,0.3)] rounded-sm overflow-hidden `} key={index} ref={el => viajesGaleriaRefs.current[index] = el}>
                                <Image className={` w-full h-full object-center object-cover `} src={item} alt='' />
                                {index !== currentGalleryIndex && ( <div className={` absolute inset-0  backdrop-grayscale-[60%] `} /> )}
                            </div>
                        ))}
                        <div className={`ml-4 gx:ml-0 h-96 w-1/6 bg-gradient-to-r from-black/30 to-transparent absolute top-0 left-0 `} />
                        <div className={`mr-4 gx:mr-0 h-96 w-1/6 bg-gradient-to-l from-black/30 to-transparent absolute top-0 right-0 `} />
                    </div>
                )}
            </div>

            <div className={` max-w-5xl w-full mx-auto px-4 gx:px-0 text-center py-10 relative `}>
                {!!viajesgalerialist?.length && (
                    <div>
                        {viajesgalerialist.map((_, index) => (
                            <span key={index} onClick={() => handleNavClick(index)} className={` m-1.5 gx:m-2 inline-block rounded-full h-3 gx:h-4 cursor-pointer ${index === currentGalleryIndex ? 'bg-[#33b4f5] w-12 gx:w-16' : 'bg-black bg-opacity-20 w-3 gx:w-4'} transition-all ease-in-out duration-300 `} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ViajesGaleria;
