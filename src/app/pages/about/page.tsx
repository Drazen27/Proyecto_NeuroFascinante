import Image from "next/image";
import { Inter } from "next/font/google";
import icons from '../../../../public/Icons/Index';
import Images from '../../../../public/Images/Index'
export default function About() {
  return (
    <main >
      <section className="w-full  border-gray-200 min-h-[500px] " 
      style={{backgroundImage: "url('/Images/Neurofascinante/TDAH 2.png')",
      backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className=" bg-gray-600 bg-opacity-40 w-full h-full min-h-[500px] p-4">
          <div className="mx-4 mt-3 items-center">
            <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              <h1 className="text-white font-sans  text-4xl md:text-5xl lg:text-6xl  text-center">CONSLTORIO DE</h1>
              <h1 className="text-white font-sans  text-4xl md:text-5xl lg:text-6xl text-center">TERAPIA NEUROPSICOLÓGICA</h1>
            </span>
            </div>
            <div className="mx-8 mt-3 items-center">
              <p className="text-white font-sans text-lg mx-0 sm:mx-0  md:text-xl md:mx-16 lg:text-2xl lg:mx-56 xl:mx-80  text-justify">
                <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                En Neuro Fascinante, somos un equipo de psicólogas comprometidas con el bienestar integral de niños, adolescentes y sus familias. Nos especializamos en proporcionar apoyo emocional, cognitivo, social y educativo a niños con discapacidad y dificultades de aprendizaje, así como en el desarrollo de habilidades que fomenten su inclusión en todas las áreas de la vida. Nuestros servicios están diseñados para adaptarse a las necesidades únicas de cada niño y su entorno, e incluyen terapia individualizada, evaluaciones neuropsicológicas y apoyo académico.
                </span>
              </p>
              <p className="text-white font-sans text-lg mx-0 sm:mx-0  md:text-xl md:mx-16 lg:text-2xl lg:mx-56 xl:mx-80 text-justify">
                <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Además, ofrecemos servicios de apoyo para padres y hermanos, con el objetivo de fortalecer las relaciones familiares, fomentar la comprensión y la comunicación, y proporcionar un sistema de apoyo integral para toda la familia. Con un enfoque centrado en la persona y orientado a promover el crecimiento y la resiliencia en todas las áreas de la vida, estamos aquí para acompañarles en cada paso del camino hacia el crecimiento y la superación.
                </span>
              </p>
          </div>
        </div>
      </section>
        <section className="flex  justify-center h-fit">
          <div  className="flex flex-col items-center border bg-white border-gray-200 rounded-lg shadow md:flex-row w-full mx-4 my-2">
              <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/2 md:rounded-none md:rounded-s-lg" src={icons.LogoV3Trans} alt=""/>
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                  <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
          </div>
        </section>
        <section className="flex  justify-center h-fit">
          <div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full mx-4 my-2 ">
              <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                  <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
              </div>
              <Image className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-1/2 md:rounded-none md:rounded-s-lg" src={icons.LogoV3Trans} alt=""/>
          </div>
        </section>
    </main>
  );
}