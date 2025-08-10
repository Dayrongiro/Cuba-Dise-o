import { Header } from "@/components/header"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Concurso de Carteles VAMPIROS EN LA HABANA – 40 Aniversario | Cuba Diseño",
  description:
    "La Manigua y CartelON convocan a diseñadores cubanos para conmemorar los 40 años del clásico animado de Juan Padrón. Premio de 100 euros.",
  keywords: "concurso carteles Cuba, Vampiros en La Habana, CartelON, La Manigua, diseño gráfico Cuba, serigrafía",
}

export default function VampirosHabanaPage() {
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
              <span>Hasta el 30 de septiembre de 2025</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Concurso de Carteles VAMPIROS EN LA HABANA – 40 Aniversario
            </h1>
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-8">
              <Image
                src="/images/convocatorias/vampiros-habana-40-aniversario.png"
                alt="Vampiros en La Habana 40 aniversario"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              El 18 de Julio de 1985, el Instituto Cubano del Arte e Industria Cinematográficos (ICAIC) exhibía la
              película ¡VAMPIROS EN LA HABANA!, segundo largometraje animado de Juan Padrón.
            </p>

            <p>
              El filme fue merecedor de varios premios internacionales, pero sobre todo ha quedado en el imaginario
              popular cubano con más de una decena de frases que transcienden e inmortalizan sus diálogos. De la misma
              forma, tanto su cartel promocional oficial (1985), obra de Eduardo Muñoz Bachs, así como la obra de Nelson
              Ponce realizada años después para una nueva serie de carteles ICAIC (2021), han quedado como íconos de la
              gráfica del cine cubano.
            </p>

            <p>
              Por este motivo, La Manigua y CartelON convocan a diseñadores y estudiantes de diseño cubanos a participar
              del Concurso de Carteles Vampiros en La Habana – 40 Aniversario.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Bases del concurso</h2>

            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Se podrán presentar hasta 3 propuestas por participante.</li>
              <li>
                Las mismas deben hacer referencia al filme e incluir el texto: <strong>40 AÑOS (1985-2025)</strong>.
              </li>
              <li>
                Incluir los créditos del filme:
                <br />
                <strong>VAMPIROS EN LA HABANA</strong>
                <br />
                Dir. Juan Padrón (1985. Largometraje de Animación. 69min. Coproducción Cuba-España-Alemania)
              </li>
              <li>
                Las propuestas deberán estar diseñadas para su producción en serigrafía (colores planos, sin degradé),
                formato 50x70 cm (2 cm de diafragma), diseño vertical, e incluir la firma del diseñador y el año (2025).
              </li>
              <li>Podrán usarse hasta 3 colores.</li>
              <li>
                Incluir el logo de La Manigua y CartelON, disponibles a descarga en www.carteloncuba.com o solicitarse
                vía correo electrónico a: cartelon.cuba@gmail.com.
              </li>
              <li>
                Las propuestas deberán enviarse por correo electrónico en formato JPG o PDF (300dpi), junto a los datos
                de su autor en el cuerpo del correo: nombre y apellidos, teléfono-WhatsApp, dirección particular y
                número de identidad, a la dirección cartelon.cuba@gmail.com.
              </li>
              <li>
                <strong>El plazo de admisión estará abierto hasta el 30 de septiembre de 2025.</strong>
              </li>
              <li>
                Un equipo de especialistas, creado al efecto, seleccionará el cartel ganador. La decisión del mismo será
                inapelable.
              </li>
              <li>
                <strong>Se entregará un premio único de 100 Euros y la impresión de cartel en serigrafía.</strong>
              </li>
              <li>
                Una selección de carteles finalistas formará parte de la exposición en homenaje al 40 Aniversario que se
                realizará en el marco del Foro de Animación, en diciembre 2025.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Más información</h2>

            <p>
              Para consultas adicionales, contactar a: <strong>cartelon.cuba@gmail.com</strong>
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-green-900 mb-4">Datos importantes</h3>
              <ul className="space-y-2 text-green-800">
                <li>
                  <strong>Fecha límite:</strong> 30 de septiembre de 2025
                </li>
                <li>
                  <strong>Premio:</strong> 100 Euros + producción serigráfica
                </li>
                <li>
                  <strong>Contacto:</strong> cartelon.cuba@gmail.com
                </li>
                <li>
                  <strong>Organizadores:</strong> La Manigua y CartelON
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <Newsletter />
      <Footer />
    </main>
  )
}
