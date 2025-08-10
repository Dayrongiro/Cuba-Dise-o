import { Header } from "@/components/header"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { RelatedArticles } from "@/components/related-articles"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Entretiempos: el cartel cubano de cine renace entre tradición y realidad aumentada | Cuba Diseño",
  description:
    "El Centro del Cartel Cubano de Cine inauguró Entretiempos, una exposición que reunió a 25 jóvenes diseñadores en homenaje al aniversario del ICAIC.",
  keywords: "Entretiempos exposición, cartel cubano cine, ICAIC, realidad aumentada diseño, jóvenes diseñadores Cuba",
  openGraph: {
    title: "Entretiempos: el cartel cubano de cine renace",
    description: "Una exposición que combina tradición y tecnología en el cartel cinematográfico cubano.",
    type: "article",
    publishedTime: "2025-01-09T00:00:00.000Z",
  },
}

export default function EntretiemposPage() {
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
              Entretiempos: el cartel cubano de cine renace entre tradición y realidad aumentada
            </h1>
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Entretiempos+Exposición"
                alt="Exposición Entretiempos cartel cubano"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              El pasado martes 25 de marzo de 2025, el Centro del Cartel Cubano de Cine (23 / 8 y 10, Vedado, La Habana)
              abrió sus puertas para la inauguración de Entretiempos, una exposición colectiva y colaborativa que reunió
              a 25 jóvenes diseñadores en homenaje al aniversario del ICAIC. Esta muestra representó un momento clave
              para la renovación del cartel cinematográfico cubano, combinando el respeto por la tradición con la
              innovación tecnológica.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Una propuesta que dialoga con el tiempo</h2>

            <p>
              Entretiempos presentó un total de 51 carteles, cuidadosamente organizados en dos grandes grupos: por un
              lado, 25 carteles clásicos que representan filmes emblemáticos del cine cubano y extranjero; por otro, sus
              25 reinterpretaciones modernas, que ofrecen una mirada fresca y contemporánea a cada obra original. A esta
              dupla se suma el cartel promocional oficial, diseñado especialmente para esta muestra.
            </p>

            <p>
              Esta doble exposición —lo clásico y lo contemporáneo— se vio enriquecida por la incorporación de la
              realidad aumentada (RA), que transformó la manera en que el público pudo interactuar con cada obra. A
              través de dispositivos móviles, los visitantes accedieron a contenidos digitales que amplificaron el
              discurso visual y narrativo de los carteles impresos, construyendo un puente entre el patrimonio gráfico y
              las tecnologías emergentes.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Voces desde la exposición</h2>

            <blockquote className="border-l-4 border-purple-600 pl-6 italic text-gray-700 my-8">
              "En un momento en el que apenas hay encargos para realizar carteles, cuando las redes sociales casi se han
              adueñado de nuestras vidas y pretenden decidirlo todo, sorprende que un grupo de diseñadores jóvenes haya
              decidido, a contracorriente, afrontar el diseño de piezas para filmes preexistentes e imprimirlas en
              soporte papel."
            </blockquote>

            <p>
              Entretiempos resultó una muestra que en un principio fue muy modesta: quince piezas originales y quince
              nuevas propuestas. Sin embargo, lo atractivo del proyecto fue enriqueciéndose con la participación
              creciente de otros diseñadores, lo que trajo consigo una exposición de cincuenta obras.
            </p>

            <p>
              Esta exposición resulta la demostración de la existencia de un talento emergente que viene acompañado de
              muchas ganas de hacer carteles para ser impresos. Como un recordatorio no sólo de la semilla sino también
              de los frutos de una tradición gráfica que lucha por mantenerse viva y que no combate: convive con las
              nuevas tecnologías.
            </p>

            <p className="text-right text-gray-600 italic">— Sara Vega / Dayron Giro</p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Participantes y curaduría</h2>

            <p>La muestra contó con la participación de destacados jóvenes diseñadores cubanos:</p>

            <p>
              Abraham Arronte, Alicia Guevara, Aldo Cruces, Arístides Torres, Elízabeth Valenciaga, Emi Cruañas, Flavia
              Machado, Frank Mora, Gerly Ferrás, Georgette Ferrás, Jordi Guerrero, José Luis Girbau, Julio Montesino,
              Kalia León, Liam Gómez, Liss López (Inari), L.u.i.s.m.a.a, Miguel LP, Roberto Curbelo (Potto), Roberto
              Lumpuy, Rodrigo de la Torre, Samanatha Martínez, Sofía Chico, Yanaisy Puentes, Dayron Giro y Antonio Pérez
              (Ñiko).
            </p>

            <p>
              El cartel promocional de la exposición fue creado por Antonio Pérez (Ñiko) y Dayron Giro. La curaduría y
              producción estuvieron a cargo de Sara Vega y Dayron Giro.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Realidad aumentada: una experiencia inmersiva
            </h2>

            <p>
              Para disfrutar plenamente de la experiencia, los visitantes de Entretiempos pudieron interactuar con los
              carteles mediante realidad aumentada siguiendo estos pasos:
            </p>

            <ol className="list-decimal pl-6 mb-8">
              <li>Descargar la aplicación de RA recomendada en la sala (compatible con Android e iOS)</li>
              <li>Escanear el código QR ubicado junto a cada cartel</li>
              <li>
                Esperar la carga de la experiencia digital y enfocar el cartel desde la cámara del dispositivo móvil
              </li>
              <li>
                Explorar el contenido interactivo, que incluyó animaciones, elementos adicionales y recursos
                audiovisuales
              </li>
            </ol>

            <p>
              Esta integración tecnológica no solo fortaleció el vínculo entre lo analógico y lo digital, sino que
              además posicionó a Entretiempos como una muestra innovadora que respeta y potencia la memoria gráfica del
              cine cubano.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Un puente entre épocas</h2>

            <p>
              Entretiempos reafirmó que la tradición del cartel cubano de cine no solo sobrevive, sino que se reinventa
              a través de la mirada creativa de nuevas generaciones. El encuentro entre carteles clásicos y sus
              reinterpretaciones modernas, junto con el apoyo de la realidad aumentada, construyó un diálogo entre el
              pasado y el presente, mostrando que el diseño gráfico sigue siendo un espacio vital para la cultura
              audiovisual.
            </p>

            <p>
              El evento se convirtió en un punto de encuentro para amantes del diseño, el cine y la cultura visual,
              evidenciando que el cartel impreso conserva su fuerza simbólica y expresiva cuando se nutre de la
              innovación y el talento emergente.
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
