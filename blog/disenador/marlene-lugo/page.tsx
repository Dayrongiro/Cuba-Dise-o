import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function MarleneLugo() {
  const designer = {
    name: "Marlene Lugo",
    category: "ILUSTRADORA",
    date: "15 Enero 2025",
    title: "Marlene Lugo - Ilustradora y diseñadora cubana con enfoque narrativo",
    image: "/placeholder.svg?height=600&width=800&text=Marlene+Lugo+Narrative+Illustration",
    avatar: "/placeholder.svg?height=100&width=100&text=ML",
    content: `
      <p>Marlene Lugo destaca en la ilustración cubana por su capacidad para contar historias visuales que conectan con el espectador a través del color y la composición. Su trabajo se mueve entre el diseño gráfico y la ilustración editorial, explorando temas culturales y sociales desde una perspectiva personal.</p>

      <p>Su obra ha sido exhibida en ferias y exposiciones, consolidándola como una de las voces emergentes más interesantes del panorama visual cubano.</p>

      <p>Su enfoque narrativo la distingue en el campo de la ilustración, creando piezas que no solo son visualmente atractivas sino que también cuentan historias profundas y significativas.</p>
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
