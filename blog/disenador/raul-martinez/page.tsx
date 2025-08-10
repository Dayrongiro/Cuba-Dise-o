import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function RaulMartinez() {
  const designer = {
    name: "Raúl Martínez",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Raúl Martínez - Maestro del diseño cubano contemporáneo",
    image: "/placeholder.svg?height=600&width=800&text=Raul+Martinez+Iconic+Work",
    avatar: "/placeholder.svg?height=100&width=100&text=RM",
    content: `
      <p>Raúl Martínez es considerado uno de los maestros fundadores del diseño gráfico cubano contemporáneo. Su obra, que abarca desde la cartelística hasta la pintura, ha sido clave para definir la imagen visual de la Cuba revolucionaria.</p>

      <p>Martínez combinó un lenguaje moderno con referencias populares y culturales, creando un estilo inconfundible que ha influenciado a generaciones de diseñadores e ilustradores en la isla y en el extranjero.</p>

      <p>Su legado trasciende el diseño gráfico, estableciendo las bases estéticas de la comunicación visual cubana moderna y sirviendo como inspiración para las nuevas generaciones de creadores.</p>
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
