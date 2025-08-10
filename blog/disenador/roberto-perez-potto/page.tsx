import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function RobertoPerezcurbelo() {
  const designer = {
    name: "Roberto Pérez Curbelo (Potto)",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Roberto Pérez Curbelo - Voz emergente del diseño experimental",
    image:
      "https://th.bing.com/th/id/R.d208118fb6552bf559fb5bbe906e49f1?rik=RUUXNuQs21m6Iw&riu=http%3a%2f%2fcarteloncuba.com%2fuploads%2fimages%2fposters%2f8db9ef7a7d.jpg&ehk=102qT550q0bZIu8mqBsERxddzsOoEtXCwKDHg5FrtTI%3d&risl=&pid=ImgRaw&r=0",
    avatar: "/placeholder.svg?height=100&width=100&text=RP",
    content: `
      <p>Roberto Pérez Curbelo, conocido como Potto, es diseñador de comunicación visual graduado del ISDi. Es una voz emergente en el diseño cubano contemporáneo, con un perfil creativo basado en la experimentación y en formatos alternativos.</p>

      <p>Ha desarrollado proyectos personales como el fanzine Pinchitas, participa en exposiciones colectivas y asume un rol activo en el ISDi como docente y creador. Su obra, que transita entre lo impreso y lo digital, refleja una mirada joven, ágil y con permanente búsqueda estética.</p>

      <p>Potto está consolidando su estilo como una propuesta fresca en la gráfica cubana joven. Su trabajo representa una nueva generación de diseñadores que exploran formatos alternativos y narrativas visuales contemporáneas.</p>
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
