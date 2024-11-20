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
            <div className={` absolute top-0 left-0 w-full h-full cursor-pointer `} onClick={handleFullscreen} />
        </div>
    );
};

export default VerticalVideo;