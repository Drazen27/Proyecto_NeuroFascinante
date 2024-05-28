
import InformationCards from "@/app/componentes/informationCard";
export default function TerapiaAutismo() {
  return (
    <main className="mt-40">
      <section className="flex flex-col justify-center items-center gap-6 mt-4">
      <InformationCards 
      img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FAutismo%202.png?alt=media&token=2c529e62-0b43-444d-b45c-e0233b8a1af8'"
      title="TERAPIA NIÑOS CON AUTISMO"
      desc="El Trastorno del Espectro Autista, denominado también autismo típico o autismo nuclear, está incluido dentro de los trastornos del neurodesarrollo. Éstos se manifiestan, normalmente, de manera precoz en el desarrollo, a menudo antes de que el niño/a empiece la escuela primaria, y se caracterizan por un déficit del desarrollo que produce deficiencias del funcionamiento personal, social, académico u ocupacional."
      desc2="La intervención conductual intensiva temprana, la terapia cognitivo-conductual y el entrenamiento en destrezas sociales son tipos de programas conductuales que beneficiarán a los niños en su desarrollo general."
      lista={[]}
      animationIn="animate-fadeLeft"
      animationOut="animate-fadeOutLeft"
      tresh={0.05}/>

      </section>
      
    </main>
  );
}