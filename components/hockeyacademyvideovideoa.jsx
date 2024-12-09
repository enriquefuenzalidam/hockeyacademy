"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const HockeyAcademyVideoA = ({ alto = 'md:h-screen h-[calc(100vh-4.5rem)]', children }) => {

    const [videoSrc, setVideoSrc] = useState("hockeyacademycamp/hockeyacademyinicio_b.mp4");

    useEffect(() => {
        if (navigator.connection?.effectiveType === "4g") {
            setVideoSrc("hockeyacademycamp/hockeyacademyinicio.mp4");
        }
    }, []);
  
    return (
        <section className={` block relative w-full bg-black ${alto} `}>
            <div className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full `}>
                <video poster='hockeyacademycamp/hockeyacademyinicio.jpg' className='object-cover object-center w-full h-full aspect-[24/11]' preload="auto" autoPlay="autoplay" muted loop playsInline >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>

            {children}

        </section>
    )
};

export default HockeyAcademyVideoA;
