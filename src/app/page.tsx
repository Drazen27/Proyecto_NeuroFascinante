import Image from "next/image";
import icons from './utils/icons/Index';

export default function Home() {
  return (
    <main>
      <section className="flex items-center justify-center h-[700px]">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="https://video.wixstatic.com/video/0b340f_b4aaabafff194cf6ac9ee5511f58099d/720p/mp4/file.mp4" type="video/mp4" />
         
        </video>
        <div className="absolute top-0 left-0 w-full h-[600px] flex flex-col items-center justify-center">
          <h1 className="text-white font-sans font-bold text-4xl md:text-5xl lg:text-7xl underline decoration-light-green text-center">TERAPIA NEUROPSICOLÓGICA</h1>
          <h1 className="text-white font-sans font-bold text-4xl md:text-5xl lg:text-7xl underline decoration-light-orange text-center">NEUROFASCINANTE</h1>
        </div>
      </section>
      
      <section className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="relative">
          <Image src={icons.LogoV3Trans} alt="Image 1" className="w-full h-auto" />
          <div className="absolute top-0 left-3/4 transform -translate-x-1/2 w-2/4 p-0 shadow-md items-center justify-center bg-white">
            <div className="w-full h-fit p-4 bg-sky-blue ">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
            </div>
            <hr/>
            <div className="w-full p-4 bg-white rounded-b-lg">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> 
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={icons.LogoV3Trans} alt="Image 2" className="w-full h-auto" />
          <div className="absolute top-1/4 left-2/4 transform -translate-x-1/2 w-full p-0 shadow-md items-center justify-center bg-white">
          <div className=" w-full h-fit p-4 bg-pink-panter">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
            </div>
            <hr/>
            <div className=" w-full h-fit p-4 bg-white">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> 
            </div>
          </div>
        </div>
        
      </section>
      <section className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="relative">
          <Image src={icons.LogoV3Trans} alt="Image 3" className="w-full h-auto" />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2/4 p-0 shadow-md items-center justify-center bg-white">
          <div className=" w-full h-fit p-4 bg-light-orange">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
            </div>
            <hr/>
            <div className=" w-full h-fit p-4 bg-white">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> 
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={icons.LogoV3Trans} alt="Image 2" className="w-full h-auto" />
          <div className="absolute top-0 left-2/4 transform -translate-x-1/2 w-full p-0 shadow-md items-center justify-center bg-white">
          <div className=" w-full h-fit p-4 bg-light-green">
              <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
            </div>
            <hr/>
            <div className=" w-full h-fit p-4 bg-white">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> 
            </div>
          </div>
        </div>
        <div className="relative">
          <Image src={icons.LogoV3Trans} alt="Image 4" className="w-full h-auto" />
          <div className="absolute top-0 left-1/4 transform -translate-x-1/2 w-2/4 p-0 shadow-md items-center justify-center bg-white">
          <div className=" w-full h-fit p-4 bg-dark-purple">
            <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
            </div>
            <hr/>
            <div className=" w-full h-fit p-4 bg-white">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> 
            </div>          
            </div>
        </div>
        
        </section>
    </main>
  );
}
