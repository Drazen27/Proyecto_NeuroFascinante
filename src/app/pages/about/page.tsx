import Image from "next/image";
import { Inter } from "next/font/google";
import icons from '../../../../public/Icons/Index';
import Images from '../../../../public/Images/Index'
import MisionVisionCards from "@/app/componentes/misionvisionCards";
import AboutCards from "@/app/componentes/aboutCard";
export default function About() {
  return (
    <main >
      <section className="w-full  border-gray-200 min-h-[500px] animate-fadeIn" 
      style={{backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FTDAH%202.png?alt=media&token=5e49f78e-b448-47ec-b1cf-5b73cc0ceb93')",
      backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className=" bg-gray-600 bg-opacity-40 w-full h-full min-h-[500px] p-4">
          <div className="mx-4 mt-3 items-center">
            <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
              <h1 className="text-white font-sans  text-4xl md:text-5xl lg:text-6xl  text-center">CONSULTORIO DE</h1>
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
      <section className="flex flex-wrap justify-center gap-0 my-8 mx-6">
        <MisionVisionCards
        title="Misión"
        desc='"En Neuro Fascinante, nuestra misión es proporcionar servicios psicológicos especializados que promuevan el bienestar integral de niños, adolescentes y sus familias. Nos comprometemos a ofrecer un enfoque basado en evidencias científicas, combinado con una atención cálida y empática, para abordar las necesidades emocionales, cognitivas y sociales de nuestros clientes. Buscamos ser un faro de apoyo y guía, trabajando en colaboración con las familias para fomentar el crecimiento, la resiliencia y la inclusión en todas las etapas del desarrollo. Con un compromiso firme con la excelencia clínica y el avance de la investigación en psicología infantil, estamos dedicados a ser líderes en nuestro campo y a proporcionar el más alto nivel de cuidado y apoyo a aquellos que confían en nosotros para su bienestar emocional y mental."'
        color="bg-light-green"
        animationIn="animate-fadeTop"
        animationOut="animate-fadeOutBottom"
        thres={0.05}
        />

        <MisionVisionCards
        title="Visión"
        desc='"En Neuro Fascinante nos esforzamos por ser mucho más que un consultorio de psicología. Somos un espacio acogedor y empático, donde cada niño, junto a su familia se sienta valorado, comprendido, y apoyado en su viaje hacia el bienestar emocional y éxito académico. Nuestra meta es crear un ambiente cálido, seguro y amigable donde todos se sientan bienvenidos, puedan compartir sus preocupaciones y desafíos sin temor al juicio. Así encontraran las herramientas y el apoyo necesario para crecer, prosperar y cultivar la resiliencia. Estamos aquí para acompañarlos en cada paso hacia una vida más plena y satisfactoria."'
        color="bg-dark-purple"
        animationIn="animate-fadeBottom"
        animationOut="animate-fadeOutTop"
        thres={0.05}
        />
      </section>
      <section className="flex flex-wrap justify-center gap-6 mt-4">
      <AboutCards 
      img='https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2FPerfil%2FMiroslava.png?alt=media&token=9e09fe23-62a4-421b-b3ad-905caabf1059'
      descPerfil="Psicóloga educativa con 4 años de experiencia en el trabajo con la población infantil. Trabajando a través de un enfoque comprensivo y empático con los niños, niñas y adolescentes, he sido partícipe del camino hacia el bienestar emocional y mental de mis pacientes, así como también de su progreso a nivel educativo. Mi objetivo es proporcionar un espacio seguro y acogedor donde los niños puedan explorar sus emociones, fortalezas y desafíos, mientras trabajamos juntos para cultivar su resiliencia y desarrollo positivo."
      descEstudios="Licenciatura en psicología"
      diplomados={["Educación Superior","Gestión de talento humano","Psicología Educativa con especialidad en dificultades específicas del aprendizaje"]}
      animationIn="animate-fadeLeft"
      animationOut="animate-fadeOutLeft"
      tresh={0.05}/>
      <AboutCards 
      img='https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2FPerfil%2FCamila.jpg?alt=media&token=9cbde2c3-e16c-4647-ac43-73300a652552'
      descPerfil="Soy psicóloga comprometida con el bienestar emocional y el desarrollo integral de niños, niñas y familias. Mi enfoque se centra en proporcionar un ambiente de apoyo y comprensión donde mis pacientes puedan prosperar. Me mantengo en constante aprendizaje, explorando nuevas formas de abordar las necesidades individuales a través de una comprensión profunda de la neurociencia. Utilizo intervenciones personalizadas y colaborativas para ayudar a mis pacientes a superar obstáculos, desde dificultades de aprendizaje hasta trastornos del comportamiento. Mi compromiso con la mejora continua se refleja en mi dedicación a mantenerme actualizada con los últimos avances en investigación y en colaborar con otros profesionales para ofrecer el mejor apoyo posible a quienes atiendo."
      descEstudios="Licenciatura en psicología"
      diplomados={["Estudiando educación diferencial","Neuroeducación","Neurociencia","Mindfulness"]}
      animationIn="animate-fadeLeft"
      animationOut="animate-fadeOutLeft"
      tresh={0.05}/>
      </section>
      
        
    </main>
  );
}