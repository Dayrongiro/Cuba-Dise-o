import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function LuisGomez() {
  const designer = {
    name: "Luis Gómez",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Luis Gómez - Cartelista y diseñador cubano de culto",
    image: "/placeholder.svg?height=600&width=800&text=Luis+Gomez+Poster",
    avatar: "/placeholder.svg?height=100&width=100&text=LG",
    content: `
      <p>Luis Gómez es un diseñador gráfico y cartelista cubano cuya obra ha sido reconocida por su originalidad y fuerza expresiva. Su estilo, caracterizado por líneas contundentes y uso dramático del color, ha dejado una marca indeleble en la escena gráfica nacional.</p>

      <p>Su trabajo ha sido exhibido en numerosas muestras nacionales e internacionales, reafirmando el valor cultural del cartel como manifestación artística.</p>

      <p>Su propuesta gráfica se distingue por la síntesis visual y el impacto emocional, características que lo han convertido en una figura de culto dentro del diseño cubano.</p>
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
