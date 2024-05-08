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
        <div className="absolute top-0 left-0 w-full h-[600px] flex items-center justify-center">
          <h1 className="text-white text-7xl font-bold">NEUROFASCINANTE</h1>
        </div>
      </section>
      
      <section className="container mx-auto mt-8 grid grid-cols-2 gap-4">
        <div className="relative">
          <Image src={icons.LogoV3Trans} alt="Image 1" className="w-full h-auto" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80">
            <h2 className="text-center text-xl font-bold">Imagen 1</h2>
          </div>
        </div>
        <div className="relative">
          <Image src={icons.LogoV3Trans} alt="Image 2" className="w-full h-auto" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80">
            <h2 className="text-center text-xl font-bold">Imagen 2</h2>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-8 grid grid-cols-2 gap-4">
        <div className="relative">
          <Image src={icons.LogoV3Trans} alt="Image 3" className="w-full h-auto" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80">
            <h2 className="text-center text-xl font-bold">Imagen 3</h2>
          </div>
        </div>
        <div className="relative">
          <Image src={icons.LogoV3Trans} alt="Image 4" className="w-full h-auto" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80">
            <h2 className="text-center text-xl font-bold">Imagen 4</h2>
          </div>
        </div>
      </section>
    </main>
  );
}