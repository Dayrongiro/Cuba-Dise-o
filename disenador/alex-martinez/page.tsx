import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function AlexMartinez() {
  const designer = {
    name: "Alex Martínez (Fuck_yellow)",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Alex Martínez - Arquitecto e ilustrador experimental",
    image: "/placeholder.svg?height=600&width=800&text=Ilustra'dos+Series",
    avatar: "/placeholder.svg?height=100&width=100&text=AM",
    content: `
      <p>Alex Martínez, conocido en la escena artística como Fuck_yellow, combina su formación en arquitectura con la ilustración para crear un lenguaje visual único y experimental. Su proyecto Ilustra'dos es un espacio donde fusiona líneas arquitectónicas con técnicas gráficas que exploran la geometría, el color y la abstracción.</p>

      <p>Su obra se caracteriza por un uso dinámico de la composición y la saturación cromática, creando piezas que dialogan con el espacio urbano y la identidad contemporánea cubana. Recientemente, ha llevado su trabajo a exposiciones en La Habana y colaboraciones con espacios culturales emergentes, consolidándose como uno de los referentes jóvenes más prometedores del diseño y la ilustración en Cuba.</p>

      <blockquote>
        <p>"La arquitectura y la ilustración comparten el mismo ADN: construir espacios para la imaginación"</p>
        <cite>- Alex Martínez</cite>
      </blockquote>

      <p>Su enfoque interdisciplinario le permite crear obras que trascienden las fronteras tradicionales entre disciplinas, generando un diálogo constante entre el espacio físico y el visual, entre lo construido y lo imaginado.</p>
    `,
    socialLinks: [
      { platform: "Instagram", url: "#" },
      { platform: "Behance", url: "#" },
    ],
  }

  return (
    <main className="min-h-screen">
      <CubaHeader />
      <DesignerProfile designer={designer} />
      <CubaFooter />
    </main>
  )
}
