import { Footer } from "components/footer";


export const metadata = {
    title: 'Classics'
};

export default function Classics() {
    return (
      <main className={`relative z-0 w-full pl-0 md:pl-32 bg-cover bg-center bg-no-repeat`} style={{ backgroundImage: `url('/images/ESTADIO-FC.jpg')` }}>
      
      <div className={`absolute inset-0`} style={{ zIndex: 0, background: 'linear-gradient(to top right, rgba(211, 0, 126, 0.6) 10%, rgba(18, 33, 77, 0.8) 80%)' }}></div>

      <section id='reservas' className={`relative bg-transparent py-0 px-4 z-10 min-h-screen flex flex-col items-center`}>
          <div className={`flex-grow max-w-8xl mx-auto flex justify-center items-center w-full`}>
              <div className={`bg-[#12214d] bg-opacity-60 p-8 rounded-lg shadow-lg w-full md:w-5/6 lg:w-4/5 xl:w-3/4`}>
                  <h2 data-aos-once="true" data-aos="fade-up" className={`text-center font-BebasNeue text-yellow-400 text-3xl md:text-4xl lg:text-5xl xl:text-5xl mx-8 mb-6 pt-12 uppercase`}>
                      Contacto
                  </h2>
                  <hr data-aos-once="true" data-aos="flip-left" className={`block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8`} />

                 
                  <form className={`pb-12 px-6 gx:px-0`}>
                    
                      <div className={`flex flex-col md:flex-row gap-4 lg:gap-8 mb-8 lg:mb-20`}>
                         
                          <div className="relative w-full">
                              <label className={`absolute top-2 left-3 text-white text-base transition-all duration-300 transform origin-top-left pointer-events-none`}>
                                  Nombre
                              </label>
                              <input className={`w-full border-b-2 border-white bg-transparent text-white p-2 focus:outline-none focus:border-red-500 transition-colors duration-300`} type='text' />
                          </div>
                         
                          <div className="relative w-full">
                              <label className={`absolute top-2 left-3 text-white text-base transition-all duration-300 transform origin-top-left pointer-events-none`}>
                                  Apellido
                              </label>
                              <input className={`w-full border-b-2 border-white bg-transparent text-white p-2 focus:outline-none focus:border-red-500 transition-colors duration-300`} type='text' />
                          </div>
                      </div>
                      
                    
                      <div className={`flex flex-col md:flex-row gap-4 lg:gap-8 mb-8 lg:mb-12`}>
                          <div className="relative w-full">
                              <label className={`absolute top-2 left-3 text-white text-base transition-all duration-300 transform origin-top-left pointer-events-none`}>
                                  Correo electrónico
                              </label>
                              <input className={`w-full border-b-2 border-white bg-transparent text-white p-2 focus:outline-none focus:border-red-500 transition-colors duration-300`} type='email' />
                          </div>
                          <div className="relative w-full">
                              <label className={`absolute top-2 left-3 text-white text-base transition-all duration-300 transform origin-top-left pointer-events-none`}>
                                  Número de teléfono
                              </label>
                              <input className={`w-full border-b-2 border-white bg-transparent text-white p-2 focus:outline-none focus:border-red-500 transition-colors duration-300`} type='tel' />
                          </div>
                      </div>

                     
                      <div className={`mb-8 lg:mb-12`}>
                          <label htmlFor='experiencia' className={`block text-white font-Roboto text-base md:text-md lg:text-md xl:text-lg mb-2`}>¿Qué experiencia deportiva te interesa?</label>
                          <select id='experiencia' className={`w-full border-2 border-solid border-white bg-transparent text-white font-Roboto text-base md:text-md lg:text-md xl:text-lg p-2 md:p-3 lg:p-3 xl:p-3 focus:outline-none`}>
                              <option value='hockey-evento'>Hockey + Evento + Entrenamiento</option>
                              <option value='hockey-personalizado'>Hockey | Experiencia personalizada</option>
                              <option value='futbol'>Fútbol</option>
                          </select>
                      </div>

                     
                      <div className={`mb-8 lg:mb-12 border-2 border-solid border-white rounded-lg p-4`}>
                          <label className={`block text-white text-base md:text-md lg:text-md xl:text-lg mb-2`}>Mensaje</label>
                          <textarea className={`w-full border-none bg-transparent text-white font-Roboto text-base md:text-md lg:text-md xl:text-lg p-2 md:p-3 lg:p-3 xl:p-3 focus:outline-none`} rows='4'></textarea>
                      </div>

                      
                      <div className={`mt-5 flex items-center`}>
                          <input className={`w-5 h-5 border-2 border-solid border-white bg-transparent focus:outline-none`} type='checkbox' name='privacidadPoliticas' id='privacidadPoliticas' />
                          <label className={`ml-2 text-white text-base md:text-md lg:text-md xl:text-lg`} htmlFor='privacidadPoliticas'>
                              Sí, acepto la política de privacidad y los términos y condiciones.
                          </label>
                      </div>

                      
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
