import InformationCards from "@/app/componentes/informationCard";
import ListCard from "@/app/componentes/listCard";
export default function TerapiaAutismo() {
  return (
    <main className="mt-40">
      <section className="flex flex-col justify-center items-center gap-6 mt-4">
      <InformationCards 
      img="'https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FAutismo%202.png?alt=media&token=2c529e62-0b43-444d-b45c-e0233b8a1af8'"
      title="DIFICULTADES ESPECÍFICAS DEL APRENDIZAJE"
      desc="Un trastorno específico del aprendizaje es una dificultad específica en una o más habilidades necesarias para aprender, que comienza durante la edad escolar y persiste hasta la edad adulta, causando un rendimiento académico, sustancialmente inferior al nivel o calidad esperados para la capacidad intelectual y la instrucción recibida."
      desc2=""
      lista={["Con dificultad en la lectura: Se caracteriza por la falta de precisión en la lectura de palabras, en la velocidad o fluidez lectora, como también en la comprensión de la lectura.",
        "Con dificultad en la expresión escrita: Se caracteriza por las fallas en la corrección ortográfica, corrección gramatical y de la puntuación, como también en la claridad/organización de la escritura.",
        "Con dificultad matemática: Dificultad en el sentido de los números, memorización de operaciones aritméticas, cálculo correcto o fluido •y razonamiento matemático."
      ]}
      animationIn="animate-fadeLeft"
      animationOut="animate-fadeOutLeft"
      tresh={0.05}/>

      </section>
    <section className="mt-24">   
      <ListCard
      title="Beneficios del Tratamiento a niños con dificultades específicas del aprendizaje"
      img="https://firebasestorage.googleapis.com/v0/b/neurofascinante-e0387.appspot.com/o/images%2Fneurofascinante%2FDificultades%20de%20apredizaje%203.webp?alt=media&token=6a2171cb-6d28-433e-9bde-63ebe0bfe318"
      lista={["Aprender a reconocer los sonidos más cortos que componen las palabras (fonemas)",
        "Entender que las letras y las cadenas de letras representan estos sonidos y palabras (fonética)",
        "Entender lo que lee (comprensión)"
      ]}
      lista2={["Leer en voz alta para desarrollar precisión, velocidad y expresión de lectura (fluidez)",
        "Acumular un vocabulario compuesto de palabras reconocidas y comprendidas"
      ]}
      animationIn="animate-fadeIn"
      animationOut="animate-fadeOut"
      thres={0.05}
      />
    </section>
    </main>
  );
}