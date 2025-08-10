import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function FabiolaArias() {
  const designer = {
    name: "Fabiola Arias",
    category: "DISEÑADORA",
    date: "15 Enero 2025",
    title: "Fabiola Arias - Diseñadora cubana emergente con enfoque social",
    image: "/placeholder.svg?height=600&width=800&text=Fabiola+Arias+Social+Design",
    avatar: "/placeholder.svg?height=100&width=100&text=FA",
    content: `
      <p>Fabiola Arias es una diseñadora cubana que destaca por su compromiso con proyectos sociales y culturales que buscan generar impacto en comunidades vulnerables. Su trabajo se caracteriza por la sensibilidad estética y la funcionalidad, apoyando causas de desarrollo social y comunicación comunitaria.</p>

      <p>A través de sus diseños, Fabiola promueve la inclusión y la participación ciudadana, consolidándose como una figura relevante en el diseño con propósito en Cuba.</p>

      <p>Su enfoque en el diseño social la posiciona como una voz importante en la nueva generación de diseñadores cubanos comprometidos con el cambio social y la transformación comunitaria.</p>
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
