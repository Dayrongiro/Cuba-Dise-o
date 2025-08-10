import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function ClaudioSotolongo() {
  const designer = {
    name: "Claudio Sotolongo",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Claudio Sotolongo - Diseñador y curador cubano",
    image: "/placeholder.svg?height=600&width=800&text=Últimos+días+de+una+casa",
    avatar: "/placeholder.svg?height=100&width=100&text=CS",
    content: `
      <p>Claudio Sotolongo es uno de los diseñadores gráficos cubanos más influyentes de la contemporaneidad. Graduado del Instituto Superior de Diseño de La Habana, su obra se distingue por la innovación en el diseño de carteles culturales, especialmente para el cine y las artes visuales. Su trabajo con el Instituto Cubano del Arte e Industria Cinematográficos (ICAIC) incluye más de treinta carteles desde 2004, que exploran la memoria histórica y la identidad cultural cubana desde una perspectiva crítica y poética.</p>

      <p>Entre sus logros destaca el cartel "Últimos días de una casa", ganador del Premio Coral en el Festival Internacional del Nuevo Cine Latinoamericano en 2018 y reconocido en varios concursos internacionales. Sotolongo también se ha desempeñado como curador, impulsando exposiciones internacionales en Roma, Washington D.C., Basilea y Londres, y ha participado en bienales de cartel en Europa y América Latina.</p>

      <blockquote>
        <p>"El cartel debe ser una ventana hacia la cultura y la memoria de un pueblo"</p>
        <cite>- Claudio Sotolongo</cite>
      </blockquote>

      <p>Su enfoque interdisciplinario lo sitúa como una voz clave en la promoción del diseño gráfico cubano contemporáneo. A través de su trabajo curatorial, ha logrado posicionar el diseño cubano en importantes espacios internacionales, creando puentes entre la tradición local y las tendencias globales del diseño gráfico.</p>
    `,
    socialLinks: [
      { platform: "Instagram", url: "#" },
      { platform: "Behance", url: "#" },
    ],
  }

  return (
    <main className="min-h-screen">
      <CubaHeader />
      <DesignerProfile designer={designer} />
      <CubaFooter />
    </main>
  )
}
