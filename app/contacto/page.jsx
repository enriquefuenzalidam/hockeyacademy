import { Footer } from "components/footer";

export const metadata = {
    title: 'Classics'
};

export default function Classics() {
    return (
        <main className={`relative z-0 w-full pl-0 md:pl-32 bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url('/images/ESTADIO-FC.jpg')` }}>
    {/* Overlay Color */}
    <div className={`absolute inset-0 bg-[purple] bg-opacity-60`} style={{ zIndex: 0 }}></div>

    <section id='reservas' className={`relative bg-transparent py-0 px-4 z-10`}>
        <div className={`max-w-8xl mx-auto flex justify-center items-center`}>
            <div className={`bg-[#003366] bg-opacity-60 p-8 rounded-lg shadow-lg w-full md:w-5/6 lg:w-4/5 xl:w-3/4`}>
                <h2 data-aos-once="true" data-aos="fade-up" className={`text-center font-BebasNeue text-yellow-400 text-3xl md:text-5xl lg:text-6xl xl:text-7xl mx-8 mb-6 pt-12 uppercase`}>
                    Contacto
                </h2>
                <hr data-aos-once="true" data-aos="flip-left" className={`block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8`} />
                <form className={`pb-12 px-6 gx:px-0`}>
                    <div className={`flex flex-col md:flex-row gap-4 mb-5`}>
                        <input className={`flex-1 border-b-2 border-solid border-white bg-transparent text-white font-Roboto text-base md:text-lg lg:text-xl xl:text-2xl p-2 md:p-3 lg:p-4 xl:p-4 focus:outline-none`} type='text' placeholder='Nombre' />
                        <input className={`flex-1 border-b-2 border-solid border-white bg-transparent text-white font-Roboto text-base md:text-lg lg:text-xl xl:text-2xl p-2 md:p-3 lg:p-4 xl:p-4 focus:outline-none`} type='text' placeholder='Apellido' />
                    </div>
                    <div className={`flex flex-col md:flex-row gap-4 mb-5`}>
                        <input className={`flex-1 border-b-2 border-solid border-white bg-transparent text-white font-Roboto text-base md:text-lg lg:text-xl xl:text-2xl p-2 md:p-3 lg:p-4 xl:p-4 focus:outline-none`} type='email' placeholder='Correo electrónico' />
                        <input className={`flex-1 border-b-2 border-solid border-white bg-transparent text-white font-Roboto text-base md:text-lg lg:text-xl xl:text-2xl p-2 md:p-3 lg:p-4 xl:p-4 focus:outline-none`} type='tel' placeholder='Número de teléfono' />
                    </div>
                    <div className={`mb-5`}>
                        <label htmlFor='experiencia' className={`block text-white font-Roboto text-base md:text-lg lg:text-xl xl:text-2xl mb-2`}>¿Qué experiencia deportiva te interesa?</label>
                        <select id='experiencia' className={`w-full border-2 border-solid border-white bg-transparent text-white font-Roboto text-base md:text-lg lg:text-xl xl:text-2xl p-2 md:p-3 lg:p-4 xl:p-4 focus:outline-none`}>
                            <option value='hockey-evento'>Hockey + Evento + Entrenamiento</option>
                            <option value='hockey-personalizado'>Hockey | Experiencia personalizada</option>
                            <option value='futbol'>Fútbol</option>
                        </select>
                    </div>
                    <textarea className={`block mt-5 w-full border-2 border-solid border-white bg-transparent text-white font-Roboto text-base md:text-lg lg:text-xl xl:text-2xl p-2 md:p-3 lg:p-4 xl:p-4 focus:outline-none`} rows='8' placeholder='Mensaje'></textarea>
                    <span className={`inline-block align-bottom mt-5 w-5 h-5 border-2 border-solid border-white bg-transparent`}>
                        <input className={`m-0 p-0 block border-0 align-middle w-full h-full bg-transparent focus:outline-none`} type='checkbox' name='privacidadPoliticas' id='privacidadPoliticas' />
                    </span>
                    <label className={`inline-block align-bottom mt-5 ml-2 text-white text-base md:text-lg lg:text-xl xl:text-2xl`} htmlFor='privacidadPoliticas'>
                        Sí, acepto la política de privacidad y los términos y condiciones.
                    </label>
                    <p className={`block align-bottom mt-8 text-center`}>
                        <input type='submit' className={`cursor-pointer inline-block mx-auto py-2 px-6 md:py-3 md:px-8 lg:py-3 lg:px-10 xl:py-3 xl:px-10 bg-[rgb(188,0,121)] rounded-md border-none shadow-black shadow-sm transition-all ease-in-out duration-500 text-white hover:bg-opacity-80`} value='Enviar mensaje' />
                    </p>
                </form>
            </div>
        </div>
    </section>

    {/* Footer */}
    <div className={`relative bg-fucsiaAzulFondoDos clear-both mt-28 z-0`}>
        <div className={`absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('/images/lineasPatron__.png')` }} />
        <Footer />
    </div>
    {/* Footer */}
</main>




    );
}
