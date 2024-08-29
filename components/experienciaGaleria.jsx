
const ExperienciaGaleria = ({ ExperienciaImgs = [], title = 'Galería', introtext }) => {
  return (
    
    <section className={`  max-w-5xl w-full mx-auto `}>
    <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>{title}</h2>
    <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[rgb(211,0,126)] mb-8 `} />

    { introtext && <p className={`  text-neutral-700 font-Roboto text-md leading-relaxed mb-12 text-center`} >
      {introtext}
    </p> }
    {!!ExperienciaImgs?.length && (
        <div className={` grid sm:grid-cols-1 md:grid-cols-2 gx:grid-cols-3 gap-4 px-4 gx:px-0  pb-12`}>
            {ExperienciaImgs.map((item, index) => (
                <p key={index} className={` inline-block `} >
                    <img data-aos-once="true" data-aos="fade" className={` w-full h-full `} src={item.src} alt='' />
                </p>
            ))}
        </div>)}
  </section>

  );
};

export default ExperienciaGaleria;
