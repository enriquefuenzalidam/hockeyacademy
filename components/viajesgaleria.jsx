'use Client';
import { useRef, useState, useEffect } from 'react';

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

        <section className={` bg-neutral-200 `}>

            <div className={` max-w-5xl w-full mx-auto relative`}>
                <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>{titulo}</h2>
                <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
            </div>

            <div className={` max-w-5xl w-full mx-auto px-4 gx:px-0 relative`}>
                {!!viajesgalerialist?.length && (
                    <div ref={galleryRef} className={`  block h-96 overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar`}>
                        {viajesgalerialist.map((item, index) => (
                            <img key={index} ref={el => viajesGaleriaRefs.current[index] = el} className={` inline-block mx-1 h-full w-auto transition-opacity duration-500`} src={item.src} alt='' />
                        ))}
                    </div>
                )}
            </div>

            <></>

            <div className={` max-w-5xl w-full mx-auto px-4 gx:px-0 text-center py-10 relative `}>
                {!!viajesgalerialist?.length && (
                    <div>
                        {viajesgalerialist.map((_, index) => (
                            <span key={index} onClick={() => handleNavClick(index)} className={` m-1 gx:m-1.5 inline-block rounded-full h-3 gx:h-4 w-3 gx:w-4 cursor-pointer ${index === currentGalleryIndex ? 'bg-black' : 'bg-black bg-opacity-20'}`} />
                        ))}
                    </div>
                )}
            </div>

        </section>

    );
};

export default ViajesGaleria;
