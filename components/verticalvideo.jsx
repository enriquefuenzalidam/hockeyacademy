import { useRef } from "react";

const VerticalVideo = ({ videoSrc }) => {

    const videoRef = useRef(null);

    const handleFullscreen = () => {
      const videoElement = videoRef.current;
      if (videoElement) {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.webkitRequestFullscreen) {
          videoElement.webkitRequestFullscreen(); // Safari
        } else if (videoElement.msRequestFullscreen) {
          videoElement.msRequestFullscreen(); // IE/Edge
        }
      }
    };

    return (
        <div className={` aspect-[9/16] relative `} >

            <video ref={videoRef} className={` w-full h-full relative `} preload="auto" autoPlay="autoplay" muted loop playsInline>
                <source src={videoSrc} type="video/mp4" />
            </video>

            <div className={`
                absolute top-0 left-0 w-full h-full cursor-pointer
                flex items-center justify-center
                hover:[text-shadow:_0_0_0.6em_black,_0_0_1em_black,_0_0_2em_black]
                text-white text-opacity-0 hover:text-opacity-100 font-RobotoCondensed font-bold uppercase text-center
                transition-all ease-in-out duration-300 `} onClick={handleFullscreen}>
                    Ver en Pantalla completa
            </div>

        </div>
    );
};

export default VerticalVideo;