"use client";
import { useEffect, useState } from "react";
import videofondoa from 'public/hockeyacademycamp/hockeyacademyfondoa.jpg';
import videofondob from 'public/hockeyacademycamp/hockeyacademyfondob.jpg';

const HockeyAcademyVideoA = ({ silencio = true, controles = false, ancho = 'w-full' , alto = 'md:h-screen h-[calc(100vh-4.5rem)]', children }) => {

    const [videoSrc, setVideoSrc] = useState("hockeyacademycamp/hockeyacademyinicio_b.mp4");

    useEffect(() => {
        if (navigator.connection?.effectiveType === "4g") {
            setVideoSrc("hockeyacademycamp/hockeyacademyinicio.mp4");
        }
    }, []);

    const videoAttributes = {
        preload: "auto",
        autoPlay: true,
        loop: true,
        playsInline: true,
        ...(silencio && { muted: true }),
        ...(controles && { controls: true }),
    };

    return (
        <section className={` block relative bg-black ${alto} ${ancho} `}>
            <div className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full `}>
                <video poster={videofondoa.src} className='object-cover object-center w-full h-full aspect-[24/11]' {...videoAttributes} >
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>

            {children}

        </section>
    )
};

export default HockeyAcademyVideoA;
