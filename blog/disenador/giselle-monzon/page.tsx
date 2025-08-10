import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function GiselleMonzon() {
  const designer = {
    name: "Giselle Monzón",
    category: "ILUSTRADORA",
    date: "15 Enero 2025",
    title: "Giselle Monzón - Ilustradora cubana con una propuesta visual contemporánea",
    image: "/placeholder.svg?height=600&width=800&text=Giselle+Monzon+Contemporary+Illustration",
    avatar: "/placeholder.svg?height=100&width=100&text=GM",
    content: `
      <p>Giselle Monzón es una ilustradora cubana que ha ganado reconocimiento gracias a su estilo fresco y contemporáneo, donde combina técnicas digitales y tradicionales para crear piezas llenas de color y vida.</p>

      <p>Su trabajo ha sido expuesto en varias plataformas digitales y físicas, y colabora con proyectos editoriales que buscan renovar la imagen de la ilustración cubana, aportando nuevas voces y perspectivas al arte visual.</p>

      <p>Su propuesta visual contemporánea la posiciona como una de las ilustradoras más prometedoras de la nueva generación cubana, con un estilo que combina tradición y modernidad.</p>
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
