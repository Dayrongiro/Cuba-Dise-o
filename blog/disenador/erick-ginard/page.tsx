import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function ErickGinard() {
  const designer = {
    name: "Erick Ginard",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Erick Ginard - Diseñador cubano de cartel con estilo expresionista",
    image: "/placeholder.svg?height=600&width=800&text=Erick+Ginard+Expressionist+Poster",
    avatar: "/placeholder.svg?height=100&width=100&text=EG",
    content: `
      <p>Erick Ginard, nacido en 1979, es uno de los diseñadores cubanos más reconocidos por su aporte al diseño de carteles con un estilo expresionista único. Su obra ha sido expuesta en múltiples bienales internacionales y ha colaborado con el ICAIC, creando imágenes que capturan la intensidad emocional del cine y la cultura cubana.</p>

      <p>Ginard combina técnicas tradicionales con un enfoque moderno, logrando un impacto visual que trasciende las fronteras y establece un diálogo entre la historia y la contemporaneidad.</p>

      <p>Su estilo expresionista se caracteriza por el uso dramático del color y la composición, creando carteles que no solo informan sino que también provocan una respuesta emocional en el espectador.</p>
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
