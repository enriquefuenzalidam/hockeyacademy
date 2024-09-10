"use client";
import { useEffect, useState } from 'react';

const LateralImagenesCuadro = ({ imagenesCuadro = [] }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Effect to handle the image slideshow
    useEffect(() => {
        if (imagenesCuadro.length > 0) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagenesCuadro.length);
            }, 1618);

            return () => clearInterval(interval); // Cleanup the interval on component unmount
        }
    }, [imagenesCuadro]);

    return (
        <>
            {!!imagenesCuadro.length && (
                <p
                    className={`gx:w-4/12 relative w-full mt-12 gx:mt-0 gx:ml-12 gx:aspect-[3/5] aspect-[5/2] overflow-hidden`}
                    data-aos-once="true"
                    data-aos="fade-up"
                >
                    {imagenesCuadro.map((item, index) => (
                        <img
                            className={`text-blue-950 object-cover absolute top-0 left-0 w-full h-full transition-opacity ease-in-out duration-[618ms] ${
                                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                            key={index}
                            src={item.src}
                            alt=''
                        />
                    ))}
                </p>
            )}
        </>
    );
};

export default LateralImagenesCuadro;
