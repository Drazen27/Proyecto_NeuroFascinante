import InformationCards from "@/app/componentes/informationCard";
export default function Orientacion() {
  return (
    <main className="mt-40">
      <section className="flex flex-col justify-center items-center gap-6 mt-4">
      <InformationCards 
      img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FOrientaci%C3%B3n%20a%20padres%202.png?alt=media&token=160266a1-1949-4c6e-922f-03de7206d206'"
      title="ORIENTACIÓN A PADRES Y HERMANOS"
      desc="Proporciona a la familia información precisa y comprensible sobre la condición específica del niño o niña, para mejorar la comprensión de las características, desafíos y fortalezas asociadas con la condición, así como las opciones de tratamiento y apoyo disponibles."
      desc2="Siendo importante brindar apoyo emocional a la familia, reconociendo que el proceso de aceptación y adaptación puede ser difícil. Animando a todos los miembros a buscar su propio apoyo emocional a través de redes de apoyo, terapia individual o grupos de padres."
      lista={[]}
      animationIn="animate-fadeLeft"
      animationOut="animate-fadeOutLeft"
      tresh={0.05}/>

      </section>
      
        
    </main>
  );
}