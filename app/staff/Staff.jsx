
import NosotrosFoto from 'components/nosotrosFoto';
import { Footer } from 'components/footer';


export default function Staff() {
    return (


        <main className={`block relative z-0 w-full pl-0 md:pl-32 mt-[4.4rem] md:mt-0`}>

            <div className={` relative bg-otoFondo bg-fixed `}>
                <div className={` absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[rgba(0,0,0,0.6)] from-0% via-[rgba(0,0,0,0.2)] via-35% to-transparent `} />
                <div className={` absolute inset-0 opacity-15 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />


                <div className={`  relative w-full py-32 `}>
                    <div className={` absolute inset-0 bg-repeat bg-whiteFadedFondo opacity-70 `} />

                    <section className={` relative mx-auto max-w-5xl `}>
                        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center tracking-wide font-BebasNeue text-blue-950 text-4xl mx-8 mb-6`}>Staff</h2>
                        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-12 `} />
                        <div className={` block text-center `}>

                            <NosotrosFoto
                                nombre='Federico Ríos'
                                soy='Coordinador'
                                otoSoy='Preparador Físico'
                                foto='staff/federicorios.png'
                                dimension='-top-10 w-full h-auto' />

                            <NosotrosFoto
                                nombre='Francisco Cedarri'
                                soy='Coordinador'
                                otoSoy='Entrenador Técnico'
                                foto='staff/franciscocedarri.png'
                                dimension='-top-10 w-full h-auto' />

                            <NosotrosFoto
                                nombre='Francisco Languasco'
                                soy='Preparador Físico'
                                foto='staff/franciscolanguasco.png'
                                dimension='-top-10 w-full h-auto' />

                            <NosotrosFoto
                                nombre='Lisandro Zocchi'
                                soy='Entrenador Técnico'
                                foto='staff/lisandrozocchi.png'
                                dimension='-top-10 w-full h-auto' />

                            <NosotrosFoto
                                nombre='Luis Colombero'
                                soy='Preparador Físico'
                                foto='staff/luiscolombero.png'
                                dimension='-top-10 w-full h-auto' />

                            <NosotrosFoto
                                nombre='Monserrat Araya'
                                soy='Entrenadora Arqueras'
                                foto='staff/montserrataraya.png'
                                dimension='-top-10 w-full h-auto' />

                            <NosotrosFoto
                                nombre='Rosario Capdevielle'
                                soy='Entrenadora Técnica'
                                foto='staff/rosariocapdevielle.png'
                                dimension='-top-10 w-full h-auto' />

                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </main>


    );
}


