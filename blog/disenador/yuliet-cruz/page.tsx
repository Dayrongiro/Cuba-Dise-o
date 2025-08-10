import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function YulietCruz() {
  const designer = {
    name: "Yuliet Cruz",
    category: "DISEÑADORA",
    date: "15 Enero 2025",
    title: "Yuliet Cruz - Diseñadora gráfica cubana con enfoque en diseño editorial",
    image: "/placeholder.svg?height=600&width=800&text=Yuliet+Cruz+Editorial+Design",
    avatar: "/placeholder.svg?height=100&width=100&text=YC",
    content: `
      <p>Yuliet Cruz es una diseñadora gráfica cubana especializada en diseño editorial, reconocida por su capacidad para fusionar estética y funcionalidad en publicaciones culturales y académicas. Su trabajo ha sido fundamental en la actualización visual de importantes revistas y catálogos en Cuba.</p>

      <p>Su enfoque combina un manejo preciso de la tipografía y el espacio con una sensibilidad artística que potencia el contenido, fortaleciendo la comunicación visual en medios impresos y digitales.</p>

      <p>Su especialización en diseño editorial la ha convertido en una referente para publicaciones culturales y académicas en Cuba, aportando una visión contemporánea al diseño de libros y revistas.</p>
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
