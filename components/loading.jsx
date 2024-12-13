import Image from "next/image";
import hockeyAcademyLogoB from 'public/hockeyacademycamp/hockeyacademycamp_sponsor_09.png';

const Loading = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-blue-500/60 z-50">
        <div className="relative animate-spin w-48 aspect-1 border-8 border-t-blue-500 border-white rounded-full">

            <Image src={hockeyAcademyLogoB} className={` w-full h-full object-contain object-center `} alt="" />

        </div>
      </div>
    );
  };
  
  export default Loading;