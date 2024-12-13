import Image from "next/image";
import ImagenesListas from "./imageneslistas";

export default function Cargador() {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[rgb(107,191,255)]" style={{ zIndex: `60` }} >
        <div className={` relative w-[45%] max-w-96 max-h-96 aspect-1 `}>
            <div className={` relative w-full h-full animate-spin border-[1rem] sm:border-[1.5rem] md:border-[2rem] border-t-white border-transparent rounded-full bg-transparent `} />
            <Image src={ImagenesListas[14]} className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-auto `} alt="" />
        </div>
      </div>
)}
