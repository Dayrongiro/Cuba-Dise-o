import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function DayronGiro() {
  const designer = {
    name: "Dayron Giro",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Dayron Giro - Joven talento del diseño cubano contemporáneo",
    image: "/images/designers/dayron-giro-hero.jpg",
    avatar: "/images/designers/dayron-giro-profile.png",
    content: `
      <p>Dayron Giro (La Habana, 2002) es diseñador gráfico, ilustrador y director creativo, formado en el ISDi gracias tanto a la educación académica como a una extensa formación autodidacta. En 2024, su obra fue seleccionada en dos bienales internacionales de cartel: la 18ª Bienal Internacional del Cartel en México (BICM 2024) y la Ecuador Poster Bienal 2024, lo que le dio visibilidad fuera del ámbito cubano.</p>

      <p>Sus piezas se destacan por su sensibilidad contemporánea, síntesis visual, experimentación tipográfica e ilustración conceptual. En Cuba ha expuesto en muestras colectivas, abarcando temas como la cultura popular, la memoria y la identidad, y participa activamente en el proyecto CartelON, que organiza exposiciones y concursos de gráfica serigráfica.</p>

      <p>Como diseñador e ilustrador cubano reconocido por su trabajo en identidad visual, diseño editorial y desarrollo de plataformas digitales, también se desempeña como director creativo de AIMAS, donde combina el diseño gráfico con la innovación tecnológica para ofrecer soluciones integrales a clientes nacionales e internacionales.</p>

      <p>Su enfoque interdisciplinario y su compromiso con la calidad lo posicionan como una figura clave dentro del diseño cubano contemporáneo. La combinación entre formación académica, práctica autodidacta y dinámica presencia creativa lo posiciona como uno de los diseñadores jóvenes más interesantes de la escena local.</p>
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
