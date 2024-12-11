
import NosotrosFoto from 'components/nosotrosFoto';
import PlantillaUno from 'components/plantillauno';

export default function Staff() {
    return (
        <PlantillaUno
            contentc={
                <section className={` relative mx-auto max-w-5xl pt-32`}>
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
            }
        />
    );
}


