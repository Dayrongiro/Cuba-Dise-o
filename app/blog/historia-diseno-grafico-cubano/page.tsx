import { Header } from "@/components/header"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { RelatedArticles } from "@/components/related-articles"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Historia y legado del diseño gráfico cubano: recorrido desde el ICAIC | Cuba Diseño",
  description:
    "Recorre la historia del diseño gráfico cubano desde sus orígenes antes de 1959 hasta la diversificación contemporánea. 66 años de tradición visual.",
  keywords:
    "historia diseño gráfico cubano, ICAIC, cartel cubano, ONDi, ISDi, tradición gráfica Cuba, diseño editorial cubano",
  openGraph: {
    title: "Historia y legado del diseño gráfico cubano",
    description:
      "66 años de evolución del diseño gráfico en Cuba, desde el ICAIC hasta la diversificación contemporánea.",
    type: "article",
    publishedTime: "2025-01-09T00:00:00.000Z",
  },
}

export default function HistoriaDisenoPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <article className="py-20 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span className="text-purple-600 font-medium uppercase tracking-wide text-xs">Diseño Gráfico</span>
              <span>•</span>
              <span>9 Enero 2025</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Historia y legado del diseño gráfico cubano: recorrido desde el ICAIC hasta la diversificación
              contemporánea
            </h1>
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-8">
              <Image
                src="/public/images/blog/Historia-del-diseño-en-Cuba"
                alt="Historia del diseño gráfico cubano"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              El diseño gráfico en Cuba tiene raíces que anteceden ampliamente a la Revolución de 1959. Desde principios
              del siglo XX, artistas como Raúl Rivadulla ya contribuían a la consolidación de un lenguaje visual propio
              en la isla.
            </p>

            <p>
              Sin embargo, es indiscutible que el proceso iniciado tras 1959, con la fundación del Instituto Cubano del
              Arte e Industria Cinematográficos (ICAIC), marcó un antes y un después decisivo en el devenir del diseño
              gráfico cubano, dando lugar a una tradición reconocida mundialmente y con profundas repercusiones
              culturales.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              El diseño gráfico antes de 1959 y el gran salto con el ICAIC
            </h2>

            <p>
              Aunque la Revolución y el ICAIC marcaron un punto de inflexión, no puede olvidarse que el diseño gráfico
              en Cuba ya tenía presencia significativa antes de 1959. Figuras como Raúl Rivadulla fueron pioneras en la
              consolidación del cartel y otras formas de diseño, aportando a la identidad visual cubana en ámbitos
              comerciales y culturales.
            </p>

            <p>
              Con la llegada de la Revolución, la creación del ICAIC impulsó un desarrollo sin precedentes en el cartel
              cinematográfico cubano. Artistas como René Mederos, Raúl Martínez, Vicente López, Alfredo Rostgaard, Pepe
              Menéndez, Félix Beltrán y Claudio Sotolongo se convirtieron en referentes internacionales, creando
              carteles cargados de simbolismo, color y compromiso social.
            </p>

            <p>
              Esta producción masiva y sistemática de carteles fue también respuesta a una necesidad ideológica y
              cultural: cada película estrenada en la Cuba revolucionaria requería un cartel que reforzara sus mensajes.
              Hoy, esta colección forma parte del patrimonio inmaterial de la humanidad, un legado invaluable de la
              cultura cubana.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Evolución y diversificación: las nuevas voces y campos del diseño gráfico
            </h2>

            <p>
              Durante las décadas siguientes, el diseño gráfico cubano amplió sus horizontes. La Oficina Nacional de
              Diseño (ONDi) emergió como el organismo rector que promovió el desarrollo y la profesionalización del
              sector, mientras que el Instituto Superior de Diseño (ISDi), fundado en 1984, comenzó a formar
              generaciones de profesionales con un enfoque técnico y conceptual.
            </p>

            <p>
              En estas décadas destacaron figuras como Nelson Ponce, fundador del colectivo Camaleón y especialista en
              diseño dentro de la Fábrica de Arte Cubano (FAC), una plataforma multicultural dirigida por X Alfonso que
              integra música, artes visuales, fotografía, arquitectura, moda y diseño.
            </p>

            <p>
              Junto a Ponce sobresalen diseñadoras como Idania del Río, Michelle Miyares Hollands y Giselle Monzón,
              además de otros creadores como Raupa y Edel Rodríguez Mola, quienes han impulsado nuevas tendencias sin
              perder contacto con la tradición gráfica cubana.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proyectos y movimientos contemporáneos</h2>

            <p>
              En el presente, el diseño gráfico cubano está marcado por la coexistencia de tradición y experimentación,
              en un contexto que incluye la diversificación económica con la proliferación de pymes que demandan diseño
              de identidad visual, páginas web y materiales promocionales.
            </p>

            <p>
              En el plano cultural y artístico, la ilustración cobra fuerza con proyectos como V de Venduta, plataforma
              fundada y dirigida por Gabriela Hernández Blanco (alias "Toda la belleza no es igual"), que promueve la
              ilustración mediante ferias y eventos; mientras que Ilustrados, creado por Alex Martínez, ofrece charlas
              públicas gratuitas para acercar la ilustración al público cubano.
            </p>

            <p>
              El Taller de Serigrafía René Portocarrero, dirigido por Daima Llerena, junto al Club de Amigos del Cartel,
              son pilares fundamentales que apoyan el movimiento gráfico insular, especialmente en la defensa y
              promoción de la serigrafía como técnica y expresión artística.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Exposiciones recientes: hitos importantes</h2>

            <p>
              Las exposiciones recientes constituyen hitos importantes para la escena. En primer lugar, Acartelados,
              organizada por Arístides Torres, trasladó carteles digitales a la serigrafía tradicional, recuperando un
              lenguaje físico y artesanal.
            </p>

            <p>
              Más adelante, las muestras Más allá del Cartel y Entretiempos, ambas organizadas por Dayron Giro, han
              reunido a jóvenes diseñadores que reinterpretan el legado gráfico cubano desde perspectivas
              contemporáneas, incorporando técnicas como la realidad aumentada para ampliar el diálogo visual.
            </p>

            <p>
              En la muestra Entretiempos, la curaduría estuvo a cargo de Dayron Giro y Sara Vega, especialista en
              gráfica de la Cinemateca de Cuba. Destaca que el cartel promocional fue realizado a dos manos por Dayron
              Giro y Antonio Pérez, representando dos generaciones y una continuidad en esta tradición gráfica.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Más allá del cartel: una mirada crítica y panorámica
            </h2>

            <p>
              El protagonismo del cartel en la historia del diseño gráfico cubano responde a factores históricos y
              políticos: la Revolución trajo una intensa necesidad de propaganda ideológica que encontró en el cartel de
              cine un medio poderoso para comunicar. Sin embargo, es esencial reconocer que el diseño cubano es mucho
              más amplio.
            </p>

            <p>
              En los primeros años de la Revolución, la necesidad de identificadores visuales para las nuevas empresas y
              organizaciones estatales generó un campo de diseño institucional que, tras un período de menor demanda,
              renace con la aparición de las pymes y nuevas actividades económicas privadas.
            </p>

            <p>
              Por otro lado, el diseño editorial y el diseño audiovisual han sido y son áreas vitales que acompañan y
              enriquecen la tradición gráfica cubana. La edición masiva de libros y revistas durante décadas y el auge
              del audiovisual como formato contemporáneo reflejan la diversidad y capacidad de adaptación del diseño en
              la isla.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusión: un legado en movimiento</h2>

            <p>
              El diseño gráfico cubano es una manifestación cultural que ha sabido adaptarse y renovarse, manteniendo
              vivo un legado histórico que trasciende el cartel cinematográfico para abarcar múltiples campos, voces y
              técnicas.
            </p>

            <p>
              Instituciones como el ISDi y la ONDi, espacios culturales como la Fábrica de Arte Cubano y el Taller de
              Serigrafía René Portocarrero, junto a proyectos y colectivos como CartelON, V de Venduta y las
              exposiciones de jóvenes diseñadores, configuran un panorama dinámico y prometedor.
            </p>

            <p>
              Este recorrido por los últimos 66 años del diseño gráfico en Cuba muestra cómo el arte visual puede
              reflejar y transformar la identidad de un pueblo, y cómo, desde la isla hacia el mundo, este legado
              continúa inspirando a profesionales y amantes del diseño en la comunidad hispanohablante global.
            </p>
          </div>
        </div>
      </article>

      <RelatedArticles />
      <Newsletter />
      <Footer />
    </main>
  )
}
