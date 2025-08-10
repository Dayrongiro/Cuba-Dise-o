import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function PepeMenendez() {
  const designer = {
    name: "Pepe Menéndez",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Pepe Menéndez - Director de diseño en Casa de las Américas",
    image: "/placeholder.svg?height=600&width=800&text=Casa+de+las+Americas+Design",
    avatar: "/placeholder.svg?height=100&width=100&text=PM",
    content: `
      <p>Pepe Menéndez es director de diseño en la institución cultural Casa de las Américas, donde ha liderado proyectos gráficos que combinan tradición e innovación. Su trabajo ha consolidado una imagen contemporánea para esta emblemática institución, integrando diseño editorial, cartelería y comunicación visual.</p>

      <p>Menéndez es reconocido por su capacidad para articular mensajes culturales complejos a través de un lenguaje visual claro y atractivo, fortaleciendo la presencia del arte y la cultura cubana en el escenario internacional.</p>

      <p>Su labor en Casa de las Américas ha sido fundamental para mantener la relevancia visual de esta institución histórica, adaptando su imagen a los tiempos contemporáneos sin perder su esencia cultural y política.</p>
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
