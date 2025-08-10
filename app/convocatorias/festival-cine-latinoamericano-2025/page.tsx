import { Header } from "@/components/header"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Festival Internacional del Nuevo Cine Latinoamericano de La Habana 2025 | Cuba Diseño",
  description:
    "Convocatoria abierta para el concurso de carteles del Festival de Cine de La Habana 2025. Edición 46 del 4 al 14 de diciembre.",
  keywords: "Festival Cine La Habana 2025, concurso carteles, cine latinoamericano, diseño gráfico Cuba",
}

export default function FestivalCinePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <article className="py-20 pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span className="text-green-600 font-medium uppercase tracking-wide text-xs">Convocatoria Abierta</span>
              <span>•</span>
              <span>Hasta el 15 de agosto de 2025</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Festival Internacional del Nuevo Cine Latinoamericano de La Habana 2025
            </h1>
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-8">
              <Image
                src="/images/convocatorias/festival-cine-latinoamericano-2025.png"
                alt="Festival Internacional del Nuevo Cine Latinoamericano"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              El Festival Internacional del Nuevo Cine Latinoamericano de La Habana ha abierto la convocatoria para su
              concurso de carteles en la edición 46, que tendrá lugar del 4 al 14 de diciembre de 2025 en La Habana,
              Cuba.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Requisitos básicos para la inscripción</h2>

            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Los carteles deben estar relacionados con la cinematografía latinoamericana.</li>
              <li>No deben haber sido presentados en ediciones anteriores del concurso de carteles del Festival.</li>
              <li>Cumplir con las fechas límite establecidas en la convocatoria.</li>
              <li>Ajustarse a las especificaciones técnicas y temáticas establecidas en el reglamento oficial.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Fechas importantes</h2>

            <p>
              <strong>Fecha límite para inscripciones:</strong> 15 de agosto de 2025.
            </p>

            <p>
              <strong>Fechas del Festival:</strong> Del 4 al 14 de diciembre de 2025.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Cómo inscribirse</h2>

            <p>
              Las inscripciones se realizan a través del sitio oficial del Festival:{" "}
              <strong>habanafilmfestival.com</strong>
            </p>

            <p>
              Consulta el reglamento completo en: <strong>habanafilmfestival.com/regulation</strong>
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Contacto e información</h2>

            <p>
              Para más información y consultas:
              <br />
              <strong>Dirección:</strong> Calle 2, esquina 19, Vedado, Plaza de la Revolución, La Habana, Cuba.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-green-900 mb-4">Información clave</h3>
              <ul className="space-y-2 text-green-800">
                <li>
                  <strong>Edición:</strong> 46
                </li>
                <li>
                  <strong>Fecha límite inscripciones:</strong> 15 de agosto de 2025
                </li>
                <li>
                  <strong>Fechas del Festival:</strong> 4-14 de diciembre de 2025
                </li>
                <li>
                  <strong>Sitio web:</strong> habanafilmfestival.com
                </li>
                <li>
                  <strong>Temática:</strong> Cinematografía latinoamericana
                </li>
              </ul>
            </div>

            <p className="mt-8">
              Este prestigioso festival es una de las citas más importantes del cine latinoamericano y representa una
              excelente oportunidad para que los diseñadores gráficos muestren su talento en el ámbito cinematográfico
              internacional.
            </p>
          </div>
        </div>
      </article>

      <Newsletter />
      <Footer />
    </main>
  )
}
