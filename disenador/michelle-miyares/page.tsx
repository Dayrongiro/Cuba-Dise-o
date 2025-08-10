import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function MichelleMiyares() {
  const designer = {
    name: "Michelle Miyares Hollands",
    category: "DISEÑADORA",
    date: "15 Enero 2025",
    title: "Michelle Miyares Hollands - Voz emergente del diseño cubano",
    image: "https://disenadorescubanosporelmundo.org/wp-content/uploads/2019/10/Cartel-Sur-Michele-Miyares.jpg",
    avatar: "/placeholder.svg?height=100&width=100&text=MM",
    content: `
      <p>Michelle Miyares Hollands es una diseñadora gráfica cubana cuya obra, aunque escasamente documentada en biografías institucionales, figura en listados curatoriales y redes profesionales dedicadas al diseño contemporáneo. Su trabajo transita el espacio de la gráfica aplicada y cartel, participando en proyectos colectivos y muestras relacionadas con el diseño cubano moderno.</p>

      <p>Sus piezas sugieren un lenguaje visual que dialoga con la ilustración y la cartelería, aunque hasta ahora no hay perfiles formales que detallen su formación o trayectoria completa. Aun así, su presencia en exposiciones colectivas la posiciona como parte del circuito visual actual en Cuba, y podría ser una de esas voces emergentes cuya visibilidad creciente resulta prometedora.</p>

      <p>Su trabajo representa una nueva generación de diseñadores cubanos que están redefiniendo los límites tradicionales del diseño gráfico, explorando nuevas formas de expresión visual y narrativa contemporánea.</p>
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
