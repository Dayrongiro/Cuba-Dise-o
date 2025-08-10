import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function AristidesTorres() {
  const designer = {
    name: "Arístides Torres Díaz",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Arístides Torres Díaz - Joven talento del cartel cubano",
    image: "https://tse4.mm.bing.net/th/id/OIP.mFdbgAHhpHJ1TYk8Lmo9EAHaHa?r=0&pid=ImgDet&w=474&h=474&rs=1&o=7&rm=3",
    avatar: "/placeholder.svg?height=100&width=100&text=AT",
    content: `
      <p>Arístides Torres Díaz (n. 1997, Sancti Spíritus) es diseñador e ilustrador egresado del ISDi y cartelista activo en el panorama contemporáneo de la isla. Fue finalista en la muestra Pasolini: Memoria & Centenario, con un cartel inspirado en Los cuentos de Canterbury, que fue seleccionado para esa exposición consejo, reafirmando su calidad y punto de vista gráfico.</p>

      <p>Su obra se caracteriza por el rigor visual, la economía formal y el uso de referencias culturales que generan resonancia crítica. Es uno de los jóvenes talentos que está enriqueciendo el repertorio estético del cartel cubano actual.</p>

      <p>Su trabajo representa una nueva generación de cartelistas cubanos que combinan tradición y contemporaneidad, creando piezas que dialogan con la historia del arte y la cultura visual internacional.</p>
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
