import Link from 'next/link';
import Image from 'next/image';

import proximamente from 'public/images/proximamente.jpg';

export default function Page() {
    return (
<main className="block z-0 absolute top-0 left-0 md:top-0 md:left-32 ">
    <div className='block relative w-full h-screen bg-black'>
        <div className="relative hidden md:grid grid-cols-4 gap-1 w-full h-full z-30">
            <Link href='/' className="pb-8 text-opacity-50 border-opacity-40 hover:pb-20 hover:text-opacity-100 transition-all ease-linear duration-200 px-6 font-medium text-left text-white text-2xl flex items-end justify-center ">
                Viaje Hockey con Evento
            </Link>
            <Link href='/' className="pb-8 text-opacity-50 border-opacity-40 hover:pb-20 hover:text-opacity-100 transition-all ease-linear duration-200 px-6 font-medium text-left text-white text-2xl flex items-end justify-center border-l-2 border-solid border-white ">
                Viaje Hockey con Evento
            </Link>
            <Link href='/' className="pb-8 text-opacity-50 border-opacity-40 hover:pb-20 hover:text-opacity-100 transition-all ease-linear duration-200 px-6 font-medium text-left text-white text-2xl flex items-end justify-center border-l-2 border-solid border-white ">
                Tecnificaciones España
            </Link>
            <Link href='/' className="pb-8 text-opacity-50 border-opacity-40 hover:pb-20 hover:text-opacity-100 transition-all ease-linear duration-200 px-6 font-medium text-left text-white text-2xl flex items-end justify-center border-l-2 border-solid border-white ">
                Torneos Internacionales
            </Link>
        </div>
        <div className=" hidden relative md:absolute md:top-0 md:left-0 w-screen h-screen md:w-full md:h-full z-10">
            <Image src={proximamente} className='object-cover object-center w-full h-full' alt="" />
        </div>
        <div className=" hidden relative md:absolute md:top-0 md:left-0 w-screen h-screen md:w-full md:h-full z-10">
            <video poster='images/3.jpg' className='object-cover object-center w-full h-full' preload="auto" autoplay="autoplay" muted loop playsInline>
                <source src='images/Capsula-Tecnificacion.mp4' type="video/mp4" />
            </video>
        </div>
        <div className=" hidden relative md:absolute md:top-0 md:left-0 w-screen h-screen md:w-full md:h-full z-10">
            <video poster='images/Hockey-22-Entrenamiento-II.jpg' className='object-cover object-center w-full h-full' preload="auto" autoplay="autoplay" muted loop playsInline>
                <source src='images/IDentity-Campus-Eurohockey-2023.mp4' type="video/mp4" />
            </video>
        </div>
        <div className=" relative md:absolute md:top-0 md:left-0 w-screen h-screen md:w-full md:h-full z-10">
            <video poster='images/Hockey-22-Entrenamiento.jpg' className='object-cover object-center w-full h-full' preload="auto" autoplay="autoplay" muted loop playsInline>
                <source src='images/IDentity-Campus-Tecnificacion-2023.mp4' type="video/mp4" />
            </video>
        </div>
    </div>
</main>

    );
}

