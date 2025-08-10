import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function EdelRodriguez() {
  const designer = {
    name: "Edel Rodríguez Molano (Mola)",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Edel Rodríguez Molano - Ilustrador cubano con proyección internacional",
    image: "https://disenadorescubanosporelmundo.org/wp-content/uploads/2019/10/Pensamos-Cuba-Edel-Rodriguez-Mola.jpg",
    avatar: "/placeholder.svg?height=100&width=100&text=ER",
    content: `
      <p>Edel Rodríguez Molano (La Habana, 1971), conocido como "Mola", es ilustrador y diseñador formado en el ISDi, que forjó su carrera profesional en Estados Unidos. Su obra ha ganado amplia difusión global, especialmente en el área editorial.</p>

      <p>Su trabajo es visualmente impactante: composiciones de alto contraste, metáforas simbólicas y una estética cargada de contenido político. Muchas de sus portadas e ilustraciones se han convertido en piezas emblemáticas con capacidad para provocar, comunicar y quedar grabadas en la cultura visual internacional.</p>

      <p>Rodríguez ha sido destacado por medios globales por su capacidad de sintetizar temas relevantes en imágenes directas y memorables. Su trayectoria incluye bienales e ilustraciones premiadas, y su legado conecta tanto con su formación inicial en Cuba como con su visibilidad internacional.</p>
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
