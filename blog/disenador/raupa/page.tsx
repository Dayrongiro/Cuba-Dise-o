import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function Raupa() {
  const designer = {
    name: "Raupa (Raúl Valdés González)",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Raupa - Diseñador audiovisual y cartelista dinámico",
    image: "https://tse1.mm.bing.net/th/id/OIP.sutNDcGqP91Guc4t85jf-AHaLV?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    avatar: "https://rialta.org/wp-content/uploads/2020/12/RAUPA-1024x640.jpg",
    content: `
      <p>Raúl Valdés González (Raupa, La Habana, 1980) es diseñador, ilustrador y realizador audiovisual graduado del ISDi. Su trayectoria profesional abarca cartel, ilustración, motion graphics y animación, siendo una de las figuras más dinámicas del diseño cubano actual.</p>

      <p>Su trabajo ha colaborado con instituciones como la Casa de las Américas y el ICAIC, realizando pósters cinematográficos, identidades visuales y piezas audiovisuales que combinan técnicas tradicionales de impresión con ilustración expresiva y narrativa directa.</p>

      <p>Raupa se distingue por una estética gráfica que integra ilustración y tipografía con elementos de movimiento; sus imágenes evocan emociones y cuentan historias con sencillez. Gracias a este enfoque, su obra circula y se reconoce tanto dentro como fuera de Cuba.</p>

      <p>Ha expuesto en espacios cubanos e internacionales y ha sido reseñado por su originalidad y capacidad de síntesis visual, consolidando su lugar en la escena contemporánea del diseño cubano como un creador cuya estética conjuga lo simbólico y lo audiovisual.</p>
    `,
  }

  return (
    <main className="min-h-screen">
      <CubaHeader />
      <DesignerProfile designer={designer} />
      <CubaFooter />
    </main>
  )
}
