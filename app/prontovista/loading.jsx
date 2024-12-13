import Image from "next/image";
import hockeyAcademyLogoB from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_09.png';

export default function Loading() {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[rgb(107,191,255)] z-50">
        <div className={` relative w-48 h-48 `}>
            <div className={` absolute inset-0 w-full h-full animate-spin border-[1rem] border-t-white border-transparent rounded-full bg-transparent `} />
            <Image src={hockeyAcademyLogoB} className={` absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-auto `} alt="" />
        </div>
      </div>
 ) }