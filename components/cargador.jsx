"use client";
import Image from "next/image";
import ImagenesListas from "./imageneslistas";
import { useEffect } from "react";

export default function Cargador() {

  useEffect(() => {
    const resizeSquare = () => {
      const square = document.getElementById('cuadrado');
      const parent = square?.parentElement;

      if (parent) {
        const parentWidth = parent.offsetWidth;
        const parentHeight = parent.offsetHeight;
        const size = Math.min(parentWidth, parentHeight); // Choose the smaller dimension
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
      }
    };

    // Resize square on window resize
    window.addEventListener('resize', resizeSquare);

    // Initial resize on page load
    resizeSquare();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', resizeSquare);
    };
  }, []);


    return (
      <div className=" absolute h-full w-full inset-0 flex items-center justify-center bg-[rgb(107,191,255)]" style={{ zIndex: `60` }} >
        <div className={` relative w-[45%] h-full flex items-center justify-center `}>
            <div className={` relative w-full h-[45%] flex items-center justify-center `}>
              <div id='cuadrado' className={` relative rounded-full flex items-center justify-center overflow-hidden `} >
                <div className={` absolute w-[38%] h-full animate-spin-cw bg-white `} />
                <div className={` absolute w-[86%] h-[86%] bg-[rgb(107,191,255)] rounded-full`} />
                <Image className={` absolute w-[62%] h-auto `} src={ImagenesListas[14]} alt=' ' />
              </div>
            </div>
          </div>
      </div>
)}

{/*
  <div className={` absolute w-full h-[45%] animate-spin-cw bg-white `} />

  */}