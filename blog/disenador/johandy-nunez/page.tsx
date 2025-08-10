import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function JohandyNunez() {
  const designer = {
    name: "Johandy Núñez",
    category: "ILUSTRADOR",
    date: "15 Enero 2025",
    title: "Johandy Núñez - Ilustrador cubano y educador visual",
    image: "/placeholder.svg?height=600&width=800&text=Johandy+Nunez+Educational+Project",
    avatar: "/placeholder.svg?height=100&width=100&text=JN",
    content: `
      <p>Johandy Núñez es un ilustrador cubano y educador visual que combina su práctica artística con la enseñanza, contribuyendo al desarrollo de nuevos talentos en la isla. Su obra destaca por la exploración de temas culturales y sociales, utilizando técnicas que van desde el dibujo tradicional hasta el arte digital.</p>

      <p>Además, Johandy ha desarrollado talleres y cursos que promueven la ilustración como herramienta de expresión y transformación social, consolidándose como un referente en la formación visual cubana.</p>

      <p>Su labor educativa ha sido fundamental para formar una nueva generación de ilustradores cubanos, transmitiendo tanto técnicas como valores culturales y sociales.</p>
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
