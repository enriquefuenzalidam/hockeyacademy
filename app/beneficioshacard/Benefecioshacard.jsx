
import { Footer } from 'components/footer';


export default function BenefeciosHaCard() {
    return (
        <main className={`block relative z-0 w-full pl-0 md:pl-32 bg-white mt-[4.4rem] md:mt-0 `}>

            <section className={` block relative w-full aspect-[16/7] bg-white z-30 `}>
                <div className={` absolute z-10 top-0 left-0 w-full h-full bg-[url('/images/6.jpg')] bg-center bg-cover opacity-60`} />
                <div className={` absolute z-20 top-0 left-0 w-full h-full bg-otoFondoNosotrosGradient bg-center bg-cover opacity-70 `} />

                <div className={` relative z-30 flex flex-col justify-center items-center w-full h-full `}>

                    <h2 className={` block w-full relative text-center tracking-wide font-BebasNeue text-[#00445f] text-6xl mx-8 `}>Beneficios Ha Card</h2>


                </div>
            </section>

            <section className={` mt-11 `}>
                <div className={` mx-auto max-w-5xl p-6 items-start justify-start align-top `}>
                        <p data-aos-once="true" data-aos="fade-up" className={`  font-Roboto text-lg text-blue-950 leading-relaxed text-justify hyphens-auto gap-6 columns-1 md:columns-2 `}>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>BenefeciosHaCard.</p>
                </div>
            </section>

            <div className={` relative bg-otoFondoDos clear-both mt-16 `}>
                <div className={` absolute inset-0 opacity-20 z-20 bg-center bg-repeat`} style={{ backgroundImage: `url('images/lineasPatron__.png')` }} />
                <Footer />
            </div>

        </main>
    );
}


