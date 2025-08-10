import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function NelsonPonce() {
  const designer = {
    name: "Nelson Ponce",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Nelson Ponce Sánchez - Renovador del cartel cubano contemporáneo",
    image: "/placeholder.svg?height=600&width=800&text=Nelson+Ponce+Cartel",
    avatar: "/placeholder.svg?height=100&width=100&text=NP",
    content: `
      <p>Nelson Ponce Sánchez (La Habana, 1975) es un distinguido diseñador gráfico e ilustrador cubano, formado en Diseño de Comunicación Visual en el Instituto Superior de Diseño (ISDi). Desde sus comienzos, ha sido protagonista de una renovación visual del cartel cubano, con obras de gran presencia pública.</p>

      <p>Ponce saltó a la fama con su reinterpretación gráfica de la película Vampiros en La Habana, un cartel que juega con el título transformando las letras en colmillos: una imagen simple, irónica y poderosa que rápidamente se volvió un icono gráfico emergente en la cultura visual contemporánea de la isla.</p>

      <blockquote>
        <p>"People worry that computers will get too smart and take over the world, but the real problem is that they're too stupid and they've already taken over the world"</p>
        <cite>- Pedro Domingos</cite>
      </blockquote>

      <p>Como cofundador del colectivo Camaleón, impulsó intervenciones urbanas, murales y publicaciones que reagudizaron el lenguaje del cartel en La Habana. Su obra se mueve entre el humor gráfico y la síntesis simbólica, fusionando ilustración, cartel y diseño editorial con un fuerte sentido narrativo.</p>

      <p>Su estilo se basa en la síntesis visual, el uso metáforas directas y un trazo que prioriza la legibilidad y el impacto inmediato. Cada composición de Ponce es a la vez imagen y declaración cultural, sirviendo como pieza autónoma y herramienta de comunicación simbólica.</p>

      <p>Nelson Ponce es uno de los cartelistas cubanos más reconocidos internacionalmente, famoso por su estilo vibrante, uso expresivo del color y referencias culturales. Su trabajo articula una narrativa visual que dialoga con la historia, la política y la cultura popular, reafirmando el valor del cartel como medio artístico y comunicativo.</p>

      <p>A lo largo de los años, sus trabajos han sido exhibidos en exposiciones nacionales e internacionales, recogidos y analizados en medios culturales, y han sido reconocidos en certámenes de diseño gráfico. En definitiva, Nelson Ponce se perfila como un referente clave para estudiantes y diseñadores contemporáneos que exploran el cartel, la ilustración editorial y la comunicación cultural desde una mirada renovada.</p>
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
