'use Client';
import { useRef, useState } from 'react';

const remToPixels = (rem) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

const AllInclusiveExperiencia = ({ list = [] }) => {

    const [openIndex, setOpenIndex] = useState(null);

    const [infoBoxOpening, setOpenInfoBox] = useState(null);
    const infoBoxRefs = useRef([]);
    
    const infoBoxToggle = (index) => {
        if (infoBoxOpening === index) {
            closeInfoBox(index);
            setOpenInfoBox(null);
        } else {
    
            if (infoBoxOpening !== null) {
                closeInfoBox(infoBoxOpening);
            }
            openInfoBox(index);
            setOpenInfoBox(index);
        }
    };
    
    const closeInfoBox = (index) => {
        toggleOpen(index);
        const infoBox = infoBoxRefs.current[index];
        const paddingPixels = remToPixels(3);
        infoBox.style.height = `${infoBox.scrollHeight + paddingPixels}px`;
        infoBox.style.opacity = '1';
        infoBox.style.paddingTop = '1.5rem';
        infoBox.style.paddingBottom = '1.5rem';
        requestAnimationFrame(() => {
            infoBox.style.transition = 'height 0.382s ease-in-out, opacity 0.382s ease-in-out, padding 0.382s ease-in-out';
            infoBox.style.height = '0';
            infoBox.style.opacity = '0';
            infoBox.style.paddingTop = '0';
            infoBox.style.paddingBottom = '0';
        });
    };
    
    const openInfoBox = (index) => {
        toggleOpen(index);
        const infoBox = infoBoxRefs.current[index];
        const paddingPixels = remToPixels(3);
        infoBox.style.height = '0';
        infoBox.style.opacity = '0';
        infoBox.style.paddingTop = '0';
        infoBox.style.paddingBottom = '0';
        requestAnimationFrame(() => {
            infoBox.style.transition = 'height 0.382s ease-in-out, opacity 0.382s ease-in-out, padding 0.382s ease-in-out';
            infoBox.style.height = `${infoBox.scrollHeight + paddingPixels}px`;
            infoBox.style.opacity = '1';
            infoBox.style.paddingTop = '1.5rem';
            infoBox.style.paddingBottom = '1.5rem';
        });
    };
    
    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    
    <section className={` bg-neutral-100 mb-12 `}>
    <div className={` max-w-5xl w-full mx-auto `}>
        <h2 data-aos-once="true" data-aos="fade-up" className={` text-center font-BebasNeue text-blue-950 text-4xl mx-8 mb-6 pt-12 `}>Experiencia All Inclusive</h2>
        <hr data-aos-once="true" data-aos="flip-left" className={` block mx-auto h-1 max-w-20 border-none bg-[#5fd2ff] mb-8 `} />
    </div>
    {!!list?.length && (
        <ul className={` max-w-5xl w-full mx-auto px-4 gx:px-0 grid grid-cols-1 md:grid-cols-2 gx:grid-cols-3 gap-4 pb-12`}>
            {list.map((item, index) => (
                <li key={item.id} data-aos-once="true" data-aos="zoom-out" >
                    <div className={` overflow-hidden border-2 border-solid border-black border-opacity-10 `} onClick={() => infoBoxToggle(index)}>
                        <h4 className={` px-4 py-2 font-BebasNeue  ${openIndex === index ? 'text-[#2aade1]' : 'text-blue-950'} text-3xl  cursor-pointer z-30  overflow-hidden `} ><span className={` inline-block w-6`}>{openIndex === index ? `—` : `+`}</span> {item.titulo}</h4>
                        <p ref={el => infoBoxRefs.current[index] = el} className={` opacity-0 h-0 px-6 z-20 text-neutral-500 text-lg font-Roboto leading-relaxed border-t-2 border-solid border-black border-opacity-10 `}>{item.contenido}</p>
                    </div>
                </li>
            ))}
        </ul>)}
</section>

  );
};

export default AllInclusiveExperiencia;
