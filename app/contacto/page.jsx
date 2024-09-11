import { Footer } from "components/footer";



export default function classics() {
    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white`}>
            {/* Overlay Color */}
            <div className={` relative w-full h-auto bg-white `}>

                <div className={`absolute w-full h-full bg-contactoGradient bg-transparent`} />
                <div className={`absolute w-full h-full opacity-30 bg-cover bg-center bg-no-repeat bg-[url('/images/ESTADIO-FC.jpg')]`} />

                <section className={`relative bg-transparent py-0 z-30 mt-12 md:mt-0 `}>
                    <div className={`max-w-3xl mx-auto flex justify-center items-center`}>
                        <div className={`bg-[#12214d] bg-opacity-50 px-8 shadow-lg w-full`}>
                            <h2 data-aos-once="true" data-aos="fade-up" className={`text-center font-BebasNeue text-yellow-400 text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-12 mx-8 mb-6 uppercase`}>
                                Contacto
                            </h2>
                            <hr data-aos-once="true" data-aos="flip-left" className={`block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8`} />
                            <form className={`pb-12 px-6 gx:px-0  text-white font-Roboto text-base gx:text-lg`}>
                                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5`}>
                                    <input className={`flex-1 border-b-2 border-solid border-white bg-transparent p-1 lg:p-3 xl:p-2 focus:outline-none appearance-none`} type='text' placeholder='Nombre' />
                                    <input className={`flex-1 border-b-2 border-solid border-white bg-transparent p-1 lg:p-3 xl:p-2 focus:outline-none`} type='text' placeholder='Apellido' />
                                    <input className={`flex-1 border-b-2 border-solid border-white bg-transparent p-1 lg:p-3 xl:p-2 focus:outline-none appearance-none`} type='email' placeholder='Correo electrónico' />
                                    <input className={`flex-1 border-b-2 border-solid border-white bg-transparent p-1 lg:p-3 xl:p-2 focus:outline-none appearance-none`} type='tel' placeholder='Número de teléfono' />
                                </div>
                                <div className={`mb-5`}>
                                    <label htmlFor='experiencia' className={`block mb-2 appearance-none`}>¿Qué experiencia deportiva te interesa?</label>
                                    <select id='experiencia' className={`w-full border-b-2 border-solid border-white bg-transparent p-0 lg:p-1 xl:p-2 focus:outline-none appearance-none rounded-none`}>
                                        <option value='hockey-evento'  >Hockey + Evento + Entrenamiento</option>
                                        <option value='hockey-personalizado'>Hockey | Experiencia personalizada</option>
                                        <option value='futbol'>Fútbol</option>
                                    </select>
                                </div>
                                <textarea className={`block mt-5 w-full border-2 border-solid border-white bg-transparent p-2 md:p-3 lg:p-4 xl:p-4 focus:outline-none`} rows='6' placeholder='Mensaje'></textarea>

                                <label className={` block mt-5 text-white whitespace-normal `} htmlFor='privacidadPoliticas'>
                                    <span className={`inline-block align-middle mr-3 w-5 h-5 border-2 border-solid border-white bg-transparent`}>
                                        <input className={` m-0 p-0 block border-0 w-full h-full bg-transparent focus:outline-none`} type='checkbox' name='privacidadPoliticas' id='privacidadPoliticas' />
                                    </span>
                                    Sí, acepto la política de privacidad y los términos y condiciones.
                                </label>
                                <p className={`block mt-8 text-center`}>
                                    <input type='submit' className={`cursor-pointer inline-block mx-auto py-2 px-6 md:py-3 md:px-8 lg:py-3 lg:px-10 xl:py-3 xl:px-10 bg-[rgb(188,0,121)] rounded-md border-none shadow-black shadow-sm transition-all ease-in-out duration-500 text-white hover:bg-opacity-80`} value='Enviar mensaje' />
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            {/* Footer */}
            <div className={`relative bg-fucsiaAzulFondoDos clear-both `}>
                <div className={`absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('/images/lineasPatron__.png')` }} />
                <Footer />
            </div>
            {/* Footer */}
        </main>
    );
}