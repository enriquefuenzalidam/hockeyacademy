import Link from "next/link";
import calendarioCheckIcono from 'public/images/calendar-check.svg';


const PagoCondiciones = ({ pagoCondiciones = [] }) => {
  return (
    
    <section className={` bg-neutral-100 `}>
    <div className={` max-w-5xl w-full mx-auto `}>
        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Condiciones de pago</h2>
        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
    </div>
    {!!pagoCondiciones?.length && (
        <div className={` max-w-5xl w-full mx-auto px-4 gx:px-0 text-center `}>
            {pagoCondiciones.map((item, index) => (
                <div key={index} className={` inline-block w-full md:w-1/2 lg:w-1/3 mx-auto align-top my-6 `}>
                    <div className={` mx-2`}>
                        <p className={` my-4 `}><img className={` mx-auto w-8 h-auto `} src={item.icono.src} alt='' /></p>
                        <h4 className={` text-3xl font-BebasNeue text-blue-950 my-4 `}>{item.titulo}</h4>
                        <p className={` mx-auto w-60 md:w-full font-Roboto text-lg text-neutral-500 leading-relaxed `}>{item.descripcion}</p>
                    </div>
                </div>
            ))}
        </div>)}
    <p className={` font-Roboto font-normal text-md py-12 text-center text-white`}>
        <Link className={` inline-block mx-auto py-2 px-8 bg-[rgb(188,0,121)] bg-fucsiaAzulRatioFondo hover:bg-none rounded-md border-black border-solid border-1 border-opacity-0 hover:border-opacity-10 no-underline shadow-black shadow-sm transition-all ease-in-out duration-500 `} href="#reservas">
            Reservá tu lugar 
            <svg xmlns="http://www.w3.org/2000/svg" className={` inline-block h-4 w-auto ml-2`} fill="currentColor" viewBox="0 0 448 512"><path d="M128 0c13.3 0 24 10.7 24 24V64H296V24c0-13.3 10.7-24 24-24s24 10.7 24 24V64h40c35.3 0 64 28.7 64 64v16 48V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192 144 128C0 92.7 28.7 64 64 64h40V24c0-13.3 10.7-24 24-24zM400 192H48V448c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V192zM329 297L217 409c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 95-95c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>
            </Link></p>
</section>

  );
};

export default PagoCondiciones;
