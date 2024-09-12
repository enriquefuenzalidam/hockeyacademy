import { Footer } from "components/footer";

export const metadata = {
    title: 'Contacto'
};

export default function Classics() {
    return (
        <main className={`relative z-0 w-full pl-0 md:pl-32 mt-16 md:mt-0`}>

            {/* Overlay Color 
             bg-cover bg-center bg-no-repeat
             style={{ backgroundImage: `url('/images/ESTADIO-FC.jpg')` }}
            <div className={`absolute inset-0`} style={{ zIndex: 0, background: 'linear-gradient(to top right, rgba(211, 0, 126, 0.6) 10%, rgba(18, 33, 77, 0.8) 80%)' }}></div>
*/}

            <section className={`relative bg-transparent py-0 px-4 z-10 min-h-screen flex flex-col items-center`}>

                <div className={`absolute w-full h-full bg-contactoGradient bg-transparent`} />
                <div className={`absolute w-full h-full opacity-30 bg-cover bg-center bg-no-repeat bg-[url('/images/ESTADIO-FC.jpg')]`} />

                <div className={`relative flex-grow max-w-8xl mx-auto flex justify-center items-center w-full`}>
                    <div className={`bg-[#12214d] bg-opacity-60 p-8 rounded-lg shadow-lg w-full md:w-5/6 lg:w-4/5 xl:w-3/4`}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={`text-center font-BebasNeue text-yellow-400 text-3xl md:text-4xl lg:text-5xl xl:text-5xl mx-8 mb-6 pt-12 uppercase`}>
                            Contacto
                        </h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={`block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8`} />

                        {/* Formulario */}
                        <form className={`pb-12 px-6 gx:px-0`}>
                            {/* Grupo de campos */}
                            <div className={`flex flex-col md:flex-row gap-4 lg:gap-8 mb-8 lg:mb-20`}>
                                <input className={`flex-1 border-b-2 border-solid border-white bg-transparent text-white font-Roboto text-base md:text-md lg:text-md xl:text-lg p-2 md:p-3 lg:p-3 xl:p-3 focus:outline-none`} type='text' placeholder='Nombre' />
                                <input className={`flex-1 border-b-2 border-solid border-white bg-transparent text-white font-Roboto text-base md:text-md lg:text-md xl:text-lg p-2 md:p-3 lg:p-3 xl:p-3 focus:outline-none`} type='text' placeholder='Apellido' />
                            </div>

                            {/* Grupo de campos con más separación */}
                            <div className={`flex flex-col md:flex-row gap-4 lg:gap-8 mb-8 lg:mb-12`}>
                                <input className={`flex-1 border-b-2 border-solid border-white bg-transparent text-white font-Roboto text-base md:text-md lg:text-md xl:text-lg p-2 md:p-3 lg:p-3 xl:p-3 focus:outline-none`} type='email' placeholder='Correo electrónico' />
                                <input className={`flex-1 border-b-2 border-solid border-white bg-transparent text-white font-Roboto text-base md:text-md lg:text-md xl:text-lg p-2 md:p-3 lg:p-3 xl:p-3 focus:outline-none`} type='tel' placeholder='Número de teléfono' />
                            </div>

                            {/* Select */}
                            <div className={`mb-8 lg:mb-12`}>
                                <label htmlFor='experiencia' className={`block text-white font-Roboto text-base md:text-md lg:text-md xl:text-lg mb-2`}>¿Qué experiencia deportiva te interesa?</label>
                                <select id='experiencia' className={`w-full border-2 border-solid border-white bg-transparent text-white font-Roboto text-base md:text-md lg:text-md xl:text-lg p-2 md:p-3 lg:p-3 xl:p-3 focus:outline-none`}>
                                    <option value='hockey-evento'>Hockey + Evento + Entrenamiento</option>
                                    <option value='hockey-personalizado'>Hockey | Experiencia personalizada</option>
                                    <option value='futbol'>Fútbol</option>
                                </select>
                            </div>

                            {/* Textarea */}
                            <textarea className={`block mt-5 w-full border-2 border-solid border-white bg-transparent text-white font-Roboto text-base md:text-md lg:text-md xl:text-lg p-2 md:p-3 lg:p-3 xl:p-3 focus:outline-none`} rows='5' placeholder='Mensaje'></textarea>

                            {/* Checkbox */}
                            <div className={`mt-5 flex items-center font-Roboto`}>
                                <input className={`w-5 h-5 border-2 border-solid border-white bg-transparent focus:outline-none`} type='checkbox' name='privacidadPoliticas' id='privacidadPoliticas' />
                                <label className={`ml-2 text-white text-base md:text-md lg:text-md xl:text-lg`} htmlFor='privacidadPoliticas'>
                                    Sí, acepto la política de privacidad y los términos y condiciones.
                                </label>
                            </div>

                            {/* Botón de enviar */}
                            <p className={`block align-bottom mt-8 text-center`}>
                                <input type='submit' className={`cursor-pointer inline-block mx-auto py-2 px-6 md:py-3 md:px-8 lg:py-3 lg:px-8 xl:py-3 xl:px-8 bg-[rgb(188,0,121)] rounded-md border-none shadow-black shadow-sm transition-all ease-in-out duration-500 text-white hover:bg-opacity-80`} value='Enviar mensaje' />
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <div className={`relative bg-fucsiaAzulFondoDos z-0`}>
                <div className={`absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('/images/lineasPatron__.png')` }} />
                <Footer />
            </div>
        </main>


    );
}
