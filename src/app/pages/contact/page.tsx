import Image from "next/image";
import { Inter } from "next/font/google";
import MisionVisionCards from "@/app/componentes/misionvisionCards";

export default function Contact() {
  return (
    
    <main className="flex flex-wrap justify-center">
        <div className="xl:w-[50%] w-full flex flex-col ">
            <div className="w-full flex flex-col items-center justify-center">
                <p className=" text-center text-dark-purple font-sans font-bold  text-xl md:text-2xl lg:text-3xl xl:text-4xl  mt-[40px] ">¡Estamos aquí para ayudarte en cualquier momento del día!</p>
                <p className=" text-center text-light-green font-sans font-bold  text-xl md:text-2xl lg:text-3xl xl:text-4xl  mt-3 ">Disponibles para atender tus consultas y necesidades</p>
                <p className=" text-center text-light-orange font-sans font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl   mt-3 ">Comunicate con nosostros hablandonos directamente al celular o correo electronico</p>
                <p className=" text-center text-sky-blue font-sans font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl  mb-[40px] ">Tambien puedes utilizar nuestras redes sociales como Faceebook o Instragram</p>
            </div>
            <div className="w-full flex items-center">
                <p className=" text-center text-black font-sans font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl  my-[15px] ml-[15%]">Dirección</p>
            </div>
            <div  className='flex flex-wrap items-center justify-center gap-6 px-[5%] mt-4'>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239.10193404620478!2d-68.1152216633761!3d-16.494214641854967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2041664f9e79%3A0xd36f5f2b02a94007!2sEsteban%20Arce%201992%2C%20La%20Paz!5e0!3m2!1ses!2sbo!4v1715473893509!5m2!1ses!2sbo" width="400" height="384" style={{border:0}}  loading="lazy" ></iframe> 
            </div>
            <div>
                <img src='https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2FQR%2FUbicacionQr.jpg?alt=media&token=4a67da3c-b5f6-4dd0-97cb-e649238e6f4f' alt="Sunset in the mountains" className="w-96" />
            </div>
            <div>
                <p className=" text-center text-black font-sans  text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 ">Av. Esteban Arce a dos cuadras del cruce de villas, esq. Cervantes</p>
            </div>
            </div>
        </div>
        <div className="xl:w-[50%] w-full flex flex-col">
            <div className="w-full flex items-center ">
                <p className=" text-center text-black font-sans font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl  my-[15px] ml-[15%]">Contactos</p>
            </div>
            <div  className='flex flex-wrap items-center justify-center gap-8 px-[5%] mt-4'>
                <div className="flex flex-col items-center">
                    <img src='https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2FQR%2FWhatsAppMiro.png?alt=media&token=e57a5bff-a8c1-423d-88e5-d24f9d25bd79' alt="Sunset in the mountains" className="w-96" /> 
                    <a href=" https://wa.me/qr/Y5TKS4I2VQHVI1" className="text-center text-black font-sans  text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 mt-4"> <span className=" font-bold">Cel:</span> <span className="hover:underline hover:text-sky-blue">72534205</span></a>
                </div>
                <div className="flex flex-col items-center">
                    <img src='https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2FQR%2FWhatsApp%20Camila.png?alt=media&token=ff3f1a46-8766-45fa-be7b-4b6469230a4e' alt="Sunset in the mountains" className="w-96" />
                    <a href="https://wa.me/message/ANV5MJ3GWYSCP1" className="text-center text-black font-sans  text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 mt-4 "><span className=" font-bold">Cel:</span> <span className="hover:underline hover:text-sky-blue">64206836</span></a>
                </div>
            </div>
            <div className="w-full flex items-center ">
                <p className=" text-center text-black font-sans font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl  my-[15px] ml-[15%]">Redes Sociales</p>
            </div>
            <div  className='flex flex-wrap items-center justify-center gap-8 px-[5%] mt-4'>
                <div className="flex flex-col items-center">
                    <a href="https://www.facebook.com/profile.php?id=61559023073881&mibextid=kFxxJD">
                        <img src='https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/icons%2Fotros_logos%2FFacebook_logo.svg?alt=media&token=6f117381-9067-4b6f-85ef-029adb73d19e' alt="Sunset in the mountains" className="w-96  hover:opacity-80"/>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61559023073881&mibextid=kFxxJD" className="text-center text-black font-sans  text-md md:text-lg lg:text-xl xl:text-2xl mb-2 mt-4"><span className="font-bold hover:underline hover:text-sky-blue">Facebook</span></a>
                </div>
                <div className="flex flex-col items-center">
                    <a href="https://www.instagram.com/neurofascinante?igsh=M2V0dnVmOWt6Mm90">
                    <img src='https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/icons%2Fotros_logos%2FInstagram_logo.svg?alt=media&token=8545b574-4e59-4dd9-aa4c-1b992b7660f9' alt="Sunset in the mountains" className="w-96 hover:opacity-80" />
                    </a>
                    <a href="https://www.instagram.com/neurofascinante?igsh=M2V0dnVmOWt6Mm90" className="text-center text-black font-sans  text-md md:text-lg lg:text-xl xl:text-2xl mb-2 mt-4 "><span className=" font-bold hover:underline hover:text-sky-blue">Instagram</span></a>
                </div>
            </div>
            
        </div>
      
    </main>
  );
}