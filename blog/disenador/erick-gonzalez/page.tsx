import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function ErickGonzalez() {
  const designer = {
    name: "Erick González",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Erick González - Diseñador gráfico cubano y docente",
    image: "/placeholder.svg?height=600&width=800&text=Erick+Gonzalez+Design+Project",
    avatar: "/placeholder.svg?height=100&width=100&text=EG",
    content: `
      <p>Erick González es diseñador gráfico y docente en Cuba, reconocido por su compromiso con la formación de nuevos profesionales y por su aporte al diseño editorial y cultural. Su práctica profesional se enfoca en proyectos que integran la tradición cubana con lenguajes contemporáneos.</p>

      <p>Además de su trabajo creativo, Erick ha participado en la organización de talleres y eventos que promueven el desarrollo del diseño gráfico en la isla.</p>

      <p>Su labor docente ha sido fundamental para formar nuevas generaciones de diseñadores, transmitiendo tanto conocimientos técnicos como valores culturales y profesionales.</p>
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
