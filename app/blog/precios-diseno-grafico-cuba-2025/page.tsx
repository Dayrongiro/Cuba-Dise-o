import { Header } from "@/components/header"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { RelatedArticles } from "@/components/related-articles"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Precios del diseño gráfico en Cuba 2025: guía explicativa | Cuba Diseño",
  description:
    "Guía completa de precios del diseño gráfico en Cuba 2025. Tarifas actualizadas para logotipos, carteles, sitios web y más servicios de diseño.",
  keywords: "precios diseño gráfico Cuba 2025, tarifas diseño Cuba, cuánto cuesta logotipo Cuba, precios cartel Cuba",
  openGraph: {
    title: "Precios del diseño gráfico en Cuba 2025: guía explicativa",
    description: "Guía completa para clientes y diseñadores con precios actualizados del mercado cubano.",
    type: "article",
    publishedTime: "2025-01-09T00:00:00.000Z",
  },
}

export default function PreciosDisenoPage() {
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
              Precios del diseño gráfico en Cuba 2025: guía explicativa para clientes y diseñadores
            </h1>
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Precios+Diseño+Cuba+2025"
                alt="Precios diseño gráfico Cuba 2025"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              En Cuba, el diseño gráfico abarca un conjunto muy amplio de especialidades: desde piezas impresas de
              pequeña escala hasta grandes producciones audiovisuales y planes de comunicación.
            </p>

            <p>
              Para este 2025, los precios en pesos cubanos (CUP) se han convertido a dólares estadounidenses tomando
              como referencia una tasa de 350 CUP = 1 USD.
            </p>

            <p>
              Este valor no es arbitrario: es un promedio entre los 300 y 400 CUP en los que actualmente se mueve el
              dólar estadounidense en el mercado informal, que es realmente el tipo de cambio que más se utiliza en las
              transacciones cotidianas en el país.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Factores que determinan el precio</h2>

            <p>
              Es importante entender que los precios no son fijos, sino que pueden ubicarse en el rango mínimo, promedio
              o máximo dependiendo de dos factores principales:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tiempo de entrega:</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Si el proyecto requiere una entrega muy rápida, el precio se acerca o incluso supera el rango máximo
              </li>
              <li>
                Si el tiempo de entrega es amplio, el trabajo puede ser desarrollado por el propio diseñador, lo que
                permite ajustar el precio hacia la parte baja de la escala
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Alcance y cantidad de propuestas:</h3>
            <ul className="list-disc pl-6 mb-8">
              <li>No es lo mismo entregar dos propuestas de diseño que cinco</li>
              <li>A mayor número de versiones o conceptos, mayor inversión de tiempo y esfuerzo</li>
              <li>
                Esto aplica a logotipos, ilustraciones, storyboards, animaciones y cualquier pieza que requiera
                exploraciones creativas
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Tabla de precios en USD (tasa: 350 CUP = 1 USD)
            </h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Categoría</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Servicio</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Mín (USD)</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Prom (USD)</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Máx (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Gráfica general</td>
                    <td className="border border-gray-300 px-4 py-2">Cartel</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">45,00</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">97,50</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">150,00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Gráfica general</td>
                    <td className="border border-gray-300 px-4 py-2">Infografía estática</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">20,57</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">30,29</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">40,00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Digital</td>
                    <td className="border border-gray-300 px-4 py-2">Sitio web</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">123,43</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">164,57</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">205,71</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">Identidad</td>
                    <td className="border border-gray-300 px-4 py-2">Identificador visual</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">60,00</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">130,00</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">200,00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Audiovisual</td>
                    <td className="border border-gray-300 px-4 py-2">Spot de TV (1 min)</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">102,86</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">201,43</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">300,00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Ejemplos por categoría</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Gráfica general:</h3>
            <p>
              Crear un cartel promocional puede costar entre 45 y 150 USD, con un promedio de 97,5 USD. Una infografía
              estática, en cambio, puede ir de 20,57 USD hasta 40 USD dependiendo de la complejidad y del tiempo de
              entrega.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Gráfica digital:</h3>
            <p>
              Un banner animado puede costar desde 10,29 USD hasta 40 USD, y el diseño de un sitio web oscila entre
              123,43 y 205,71 USD. En casos más complejos, como una plataforma web, el rango se amplía desde 150 hasta 1
              000 USD.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Gráfica de identidad:</h3>
            <p>
              El desarrollo de un identificador visual (logotipo) tiene un rango de 60 a 200 USD, mientras que un manual
              de identidad visual puede llegar desde 205,71 USD hasta 500 USD.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Recomendación final</h2>

            <p>
              Este tarifario sirve como guía de referencia para clientes y diseñadores. Sin embargo, existen otras
              formas de calcular precios, como el costo por hora de trabajo, que depende de la productividad y tarifas
              personales de cada diseñador. Este tema, que abre un abanico de métodos de valoración, merece un artículo
              aparte para explorarlo a fondo.
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
