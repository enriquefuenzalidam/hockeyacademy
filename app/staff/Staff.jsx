
import NosotrosFoto from 'components/nosotrosFoto';
import { Footer } from 'components/footer';


export default function Staff() {
    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white mt-[4.4rem] md:mt-0 `}>

            <section className={` block relative w-full aspect-[16/7] bg-white z-30 `}>
                <div className={` absolute z-10 top-0 left-0 w-full h-full bg-[url('/images/6.jpg')] bg-center bg-cover opacity-60`} />
                <div className={` absolute z-20 top-0 left-0 w-full h-full bg-otoFondoNosotrosGradient bg-center bg-cover opacity-70 `} />
                <div className={` relative z-30 flex flex-col justify-center items-center w-full h-full `}>

                    <h2 className={` block w-full relative text-center tracking-wide font-BebasNeue text-[#00445f] text-6xl mx-8`}>Staff</h2>


                </div>
            </section>

            <section className={`block`}>
                <div className={`block mx-auto max-w-5xl mt-16`}>
                {/*
                    <h2 className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Staff</h2>
                    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#72efdd] mb-8 `} /> */}
                    <div className={` block text-center `}>

                        <NosotrosFoto
                            nombre='Federico Ríos'
                            foto='staff/federicorios.png'
                            dimension='-top-10 w-full h-auto'  />

                        <NosotrosFoto
                            nombre='Francisco Cedarri'
                            foto='staff/franciscocedarri.png'
                            dimension='-top-10 w-full h-auto'  />

                        <NosotrosFoto
                            nombre='Francisco Languasco'
                            foto='staff/franciscolanguasco.png'
                            dimension='-top-10 w-full h-auto'  />

                        <NosotrosFoto
                            nombre='Lisandro Zocchi'
                            foto='staff/lisandrozocchi.png'
                            dimension='-top-10 w-full h-auto'  />

                            <NosotrosFoto
                                nombre='Luis Colombero'
                                foto='staff/luiscolombero.png'
                                dimension='-top-10 w-full h-auto'  />

                                <NosotrosFoto
                                    nombre='Monserrat Araya'
                                    foto='staff/montserrataraya.png'
                                    dimension='-top-10 w-full h-auto'  />

                                    <NosotrosFoto
                                        nombre='Rosario Capdevielle'
                                        foto='staff/rosariocapdevielle.png'
                                        dimension='-top-10 w-full h-auto'  />

                    </div>
                </div>
            </section>

            <div className={` relative bg-otoFondoDos clear-both mt-16 `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>

        </main>
    );
}


