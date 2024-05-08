import Image from "next/image";
import icons from './utils/icons/Index';

export default function Home() {
  return (
    <main className="relative">
      <section className="flex items-center justify-center h-[700px]">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src="https://video.wixstatic.com/video/0b340f_b4aaabafff194cf6ac9ee5511f58099d/720p/mp4/file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-[600px] flex flex-wrap items-center justify-center">
          <h1 className="text-white text-7xl font-sans font-bold">NEUROFASCINANTE</h1>
          <h1 className="text-white text-7xl font-sans font-bold">NEUROFASCINANTE</h1>
        </div>
      </section>
      
      <section className="container mx-auto mt-8 grid grid-cols-5 gap-4">
        <div className="relative col-span-3 ">
          <Image src={icons.LogoV3Trans} alt="Image 1" className="w-full h-auto" />
          <div className="absolute top-0 left-1/2 w-2/4 h-3/4 flex items-center justify-center bg-white">
            <h2 className="text-center text-xl font-bold">Imagen 1</h2>
          </div>
        </div>
        <div className="relative col-span-2">
          <Image src={icons.LogoV3Trans} alt="Image 2" className="w-full h-auto" />
          <div className="absolute top-1/4 left-1/2 w-3/5 h-2/4 flex items-center justify-center bg-white">
            <h2 className="text-center text-xl font-bold">Imagen 2</h2>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-8 grid grid-cols-6 gap-4">
        <div className="relative col-span-2">
          <Image src={icons.LogoV3Trans} alt="Image 3" className="w-full h-auto" />
          <div className="absolute top-0 left-1/4  w-3/5 h-3/4 flex items-center justify-center bg-white">
            <h2 className="text-center text-xl font-bold">Imagen 3</h2>
          </div>
        </div>
        <div className="relative col-span-1">
          <Image src={icons.LogoV3Trans} alt="Image 4" className="w-full h-auto" />
          <div className="absolute top-0 left-52  w-3/5 h-3/4 flex items-center justify-center bg-white">
            <h2 className="text-center text-xl font-sans font-bold">Imagen 4</h2>
          </div>
        </div>
        <div className="relative col-span-3">
          <Image src={icons.LogoV3Trans} alt="Image 4" className="w-full h-auto" />
          <div className="absolute top-0 left-52  w-3/5 h-3/4 flex items-center justify-center bg-white">
            <h2 className="text-center text-xl font-sans font-bold">Imagen 4</h2>
          </div>
        </div>
      </section>
    </main>
  );
}