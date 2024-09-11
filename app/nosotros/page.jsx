
import NosotrosFoto from 'components/nosotrosFoto';
import { Footer } from 'components/footer';
  

export default function nosotros() {
    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white`}>

            <section className={` block relative w-full h-screen bg-black z-30 `}>
                <div className={` absolute z-10 top-0 left-0 w-full h-full bg-[url('/images/6.jpg')] bg-center bg-cover`} />
                <div className={` absolute z-20 top-0 left-0 w-full h-full bg-nosotrosGradient bg-center bg-cover opacity-70 `} />
                <div className={` relative z-30 flex flex-col justify-center items-center w-full h-full `}>

                    <h2  className={` block w-full relative text-center tracking-wide font-BebasNeue text-[rgb(246,187,14)] text-6xl mx-8`}>Nosotros</h2>
                    <p data-aos-once="true" data-aos="fade-up" className={`block max-w-md font-Roboto text-lg leading-relaxed my-6 text-justify hyphens-auto indent-5 text-white text-opacity-80`}>
                        Nuestra misión es cambiar para siempre la manera de hacer turismo deportivo y crear experiencias de hockey que conformen experiencias inolvidables a nivel deportivo y humano para todos nuestros deportistas.
                    </p>

                </div>
            </section>

            <section className={` mt-0 `}>
                <div className={` mx-auto max-w-5xl gap-6 grid grid-cols-1 md:grid-cols-2 p-6`}>
                    <p data-aos-once="true" data-aos="fade-up" className={` font-Roboto text-lg text-neutral-500 leading-relaxed text-justify hyphens-auto indent-5`}>
                        Somos un equipo de profesionales, especializados en el sector deportivo, que desde hace muchos años tienen el objetivo común de crear viajes y Campus de hockey inolvidables, sorprendentes, divertidos y que transmitan consistentes valores deportivos.
                    </p>
                    <p data-aos-once="true" data-aos="fade-up" className={` font-Roboto text-lg text-neutral-500 leading-relaxed text-justify hyphens-auto indent-5 `}>
                        Nuestra misión es llevar adelante estos sueños y superarnos en cada viaje o nuevo desafío. Estamos convencidos que al ser especialistas en hockey hierba, nuestra propuesta posee elementos distintivos. Proponemos cambiar para siempre la manera de vivir el mundo del hockey, de la mano del turismo.
                    </p>
                </div>
            </section>

            <section className={`block`}>
                <div className={`block mx-auto max-w-5xl mt-16`}>
                    <h2  className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Dirección general</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
                    <div className={` block text-center `}>

                        <NosotrosFoto
                            nombre='Facundo'
                            foto='nosotros/FACUNDO.webp'
                            linkedinEnlace='https://www.linkedin.com/in/facubattaglino/' />

                        <NosotrosFoto
                            nombre='Ezequiel'
                            foto='nosotros/EZEQUIEL.webp'
                            linkedinEnlace='https://www.linkedin.com/in/moronezequiel/' />

                    </div>
                </div>
            </section>

            <section className={`block`}>
                <div className={`block mx-auto max-w-5xl mt-16`}>
                    <h2  className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Equipo médico</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
                    <div className={` block text-center `}>

                        <NosotrosFoto
                            nombre='Gina'
                            foto='nosotros/GINA.webp' />

                        <NosotrosFoto
                            nombre='Pedro'
                            foto='nosotros/PEDRO.webp' />

                    </div>
                </div>
            </section>

            <section className={`block`}>
                <div className={`block mx-auto max-w-5xl mt-16`}>
                    <h2  className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Equipo audivisual y MKT</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
                    <div className={` block text-center `}>

                        <NosotrosFoto
                            nombre='Sebastián' />

                        <NosotrosFoto
                            nombre='Ale'
                            foto='nosotros/ALE.webp' />

                        <NosotrosFoto
                            nombre='Matías'
                            foto='nosotros/JMP.jpg.webp' />

                    </div>
                </div>
            </section>

            <section className={`block`}>
                <div className={`block mx-auto max-w-5xl mt-16`}>
                    <h2  className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Coordinadores</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
                    <div className={` block text-center `}>

                        <NosotrosFoto
                            nombre='Fernanda'
                            foto='nosotros/FERNANDA.jpg.webp' />

                        <NosotrosFoto
                            nombre='Paco'
                            foto='nosotros/PACO.jpg.webp' />

                        <NosotrosFoto
                            nombre='Federico'
                            foto='nosotros/FEDE.jpg.webp' />

                        <NosotrosFoto
                            nombre='Vicente' />

                        <NosotrosFoto
                            nombre='Macarena' />

                        <NosotrosFoto
                            nombre='Matías' />

                    </div>
                </div>
            </section>

            <section className={`block`}>
                <div className={`block mx-auto max-w-5xl mt-16`}>
                    <h2  className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Deportistas olímpicos</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />
                    <div className={` block text-center `}>

                        <NosotrosFoto
                            nombre='Xavi'
                            foto='nosotros/XAVI.webp' />

                        <NosotrosFoto
                            nombre='David'
                            foto='nosotros/David.webp' />

                        <NosotrosFoto
                            nombre='Jill' />

                        <NosotrosFoto
                            nombre='Julia' />

                        <NosotrosFoto
                            nombre='Lidewik' />

                        <NosotrosFoto
                            nombre='Gigi' />

                        <NosotrosFoto
                            nombre='Julieta' />

                    </div>
                </div>
            </section>


            <div className={` relative bg-fucsiaAzulFondoDos clear-both mt-16 `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>
        </main>
    );
}


