import Link from "next/link";
import Image from "next/image";

const ImagenesGrid = ({ imageneslista = [] }) => {
    return (
        <>
            {!!imageneslista && (
                <div className={` relative text-center w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4 gx:p-0 `}>
                    {imageneslista.map((imgn, index) => (
                        <Link key={index} href={imgn.src} className={` cursor-pointer inline-block relative w-full aspect-1 overflow-hidden shadow-md shadow-[rgba(0,0,0,0.3)] rounded-sm m-0 p-0 border-0 hover:scale-110 transition-all hover:z-50 ease-in-out duration-700 `}>
                            <Image data-aos-once="true" data-aos="fade" src={imgn} alt='' className={` relative object-center object-cover w-full h-full `} />
                            {/*
                            <span className={` absolute top-0 left-0 w-full h-full flex items-end justify-end `}>
                                <span className={` relative overflow-hidden w-1/6 md:w-[calc(100%/7)] aspect-1 flex items-center justify-center text-black bg-[#5fd2ff] m-8 shadow-md shadow-[rgba(0,0,0,0.6)] rounded-md`} >
                                    <svg className={` w-4/5 aspect-1 rotate-90 opacity-50 `} viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                        <path d="M0 0v4l1.5-1.5 1.5 1.5 1-1-1.5-1.5 1.5-1.5h-4zm5 4l-1 1 1.5 1.5-1.5 1.5h4v-4l-1.5 1.5-1.5-1.5z" />
                                    </svg>
                                </span>
                            </span>
                            */}
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}

export default ImagenesGrid;
