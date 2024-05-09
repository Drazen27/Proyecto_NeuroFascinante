import Image from "next/image";
import icons from '../../public/Icons/Index';
import Images from "../../public/Images/Index";

export default function Home() {
  return (
    <main>
      <section className="flex items-center justify-center h-[700px]">
        <video autoPlay muted loop className="w-full h-full object-cove contrast-50r">
          <source src="https://video.wixstatic.com/video/0b340f_b4aaabafff194cf6ac9ee5511f58099d/720p/mp4/file.mp4" type="video/mp4" />
         
        </video>
        <div className="absolute top-0 left-0 w-full h-[800px] flex flex-col items-center justify-center">
          <h1 className="text-white font-sans font-bold text-4xl md:text-5xl lg:text-7xl underline decoration-light-green text-center">TERAPIA NEUROPSICOLÓGICA</h1>
          <h1 className="text-white font-sans font-bold text-4xl md:text-5xl lg:text-7xl underline decoration-light-orange text-center">NEUROFASCINANTE</h1>
        </div>
      </section>
      
      <section className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="relative">
          <Image src={Images.TDH} alt="Image 1" className="w-full h-auto" />
          <div className="absolute top-0 right-0 w-[50%] md:w-[65%] lg:w-[50%] xl:w-[50%]  p-0 shadow-md items-center justify-cente">
            <div className="w-full h-fit p-3 bg-sky-blue  bg-opacity-50">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Terapia Niños con TDAH </h5>
            </div>

            <div className="w-full p-4 bg-gray-400 bg-opacity-50">
              <p className="mb-3 font-normal text-white text-base md:text-sm md:mb-1 lg:text-base xl:text-base text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>Terapia especializada diseñada para mejorar la concentración, la organización y el control de los impulsos. Para un mejor rendimiento académico y social. </p> 
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={Images.Down} alt="Image 2" className="w-full h-fit" />
          <div className="absolute top-0 left-0  w-[45%] md:w-[64%] lg:w-[45%] xl:w-[45%]  p-0 shadow-md items-center justify-center ">
          <div className=" w-full h-fit p-3 bg-pink-panter bg-opacity-50">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Síndrome de Down y discapacidad </h5>
            </div>

            <div className=" w-full h-fit p-4 bg-gray-400 bg-opacity-50">
              <p className="mb-3 font-normal text-base md:text-sm md:mb-1 lg:text-base xl:text-base text-white text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>Muestra cómo la terapia puede mejorar la calidad de vida de personas con síndrome de Down u otras discapacidades</p> 
            </div>
          </div>
        </div>
        
      </section>
      <section className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="relative">
          <Image src={Images.DificultadesA} alt="Image 3" className="w-full h-auto" />
          <div className="absolute bottom-0 left-[25%]  w-2/4 p-0 shadow-md items-center justify-center">
          <div className=" w-full h-fit p-3 bg-light-orange bg-opacity-50">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Dificultades académicas </h5>
            </div>

            <div className=" w-full h-fit p-4 bg-gray-400 bg-opacity-50">
              <p className="mb-3 font-normal ext-base md:text-sm md:mb-1 lg:text-base xl:text-base text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>Apoyo educativo individualizado para superar obstáculos en el aprendizaje y maximizar el potencial académico.</p> 
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={Images.Autismo2} alt="Image 2" className="w-full h-auto" />
          <div className="absolute bottom-0 left-0  w-[54%] md:w-[80%] lg:w-[54%] xl:w-[54%] p-0 shadow-md items-center justify-center ">
          <div className=" w-full h-fit p-3 bg-light-green  bg-opacity-50">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Terapia para Niños con Autismo</h5>
            </div>

            <div className="w-full h-fit p-4 bg-gray-400 bg-opacity-50">
              <p className="mb-3 font-normal text-base md:text-sm md:mb-1 lg:text-base xl:text-base  text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}}>Terapia personalizada para niños con autismo. Con enfoque en el desarrollo de habilidades sociales, comunicativas y de comportamiento, trabajamos para promover la integración y la autonomía de cada niño.</p> 
            </div>
          </div>
        </div>
        
        
        </section>
    </main>
  );
}
