import { Header } from "@/components/header"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { RelatedArticles } from "@/components/related-articles"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "¿Cuánto gana realmente un diseñador gráfico en Cuba? | Cuba Diseño",
  description:
    "Descubre los salarios reales de los diseñadores gráficos en Cuba. Análisis completo de ingresos, oportunidades freelance y mercado internacional.",
  keywords: "salario diseñador gráfico Cuba, cuánto gana diseñador Cuba, freelance diseño Cuba, tarifas diseño gráfico",
  openGraph: {
    title: "¿Cuánto gana realmente un diseñador gráfico en Cuba?",
    description: "La respuesta te sorprenderá. Análisis completo de salarios y oportunidades para diseñadores cubanos.",
    type: "article",
    publishedTime: "2025-01-09T00:00:00.000Z",
  },
}

export default function SalariosDisenadoresPage() {
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
              ¿Cuánto gana realmente un diseñador gráfico en Cuba? La respuesta te sorprenderá
            </h1>
            <div className="aspect-[16/9] relative rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder.svg?height=600&width=1200&text=Salarios+Diseño+Cuba"
                alt="Salarios diseñadores gráficos Cuba"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Si alguna vez te has preguntado cuánto cobra un diseñador gráfico en Cuba, la respuesta corta es: menos de
              lo que vale su talento. Y no es una exageración.
            </p>

            <p>
              El salario mínimo oficial en el país es de 2 100 CUP al mes. Si usamos la tasa oficial del Banco Central
              (1 USD = 120 CUP), eso equivale a 17,5 USD. Ahora bien, la historia cambia cuando miramos la realidad: en
              el mercado informal, el dólar ronda los 395–400 CUP, lo que significa que el poder adquisitivo real es
              otro mundo.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">El talento cubano juega en otra liga</h2>

            <p>
              A pesar de un salario estatal bajo, los diseñadores gráficos en Cuba cuentan con una ventaja: pueden
              trabajar para el exterior. Eso abre tres caminos claros:
            </p>

            <ul className="list-disc pl-6 mb-8">
              <li>Proyectos freelance para clientes internacionales</li>
              <li>Colaboración con agencias de representación, como la Asociación Cubana de Comunicadores</li>
              <li>Emprender y crear su propio estudio o marca</li>
            </ul>

            <p>
              Esto no solo les permite ganar en monedas fuertes, sino también establecer tarifas más acordes a su
              calidad y experiencia.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">El número real que deberías conocer</h2>

            <p>
              El monto de 120 USD mensuales para un diseñador gráfico en Cuba no es una cifra al azar. Proviene de una
              encuesta realizada a más de 100 diseñadores gráficos residentes en la isla, cuyos resultados revelan que
              el ingreso mínimo reportado está alrededor de 40 USD mensuales, mientras que el máximo supera los 700 USD.
            </p>

            <p>
              Este rango depende de factores como la experiencia, el tipo de clientes, el acceso a internet, la
              capacidad para captar trabajos internacionales y la diversificación de servicios.
            </p>

            <p>Si tomamos ese promedio de 120 USD y lo convertimos:</p>

            <ul className="list-disc pl-6 mb-8">
              <li>Con la tasa oficial (1 USD = 120 CUP), serían 14 400 CUP</li>
              <li>Con la tasa informal (~400 CUP/USD), serían 48 000 CUP</li>
            </ul>

            <p>
              Esto significa que, para un cliente internacional, pagar a un diseñador cubano una tarifa justa no solo es
              asequible, sino una oportunidad de acceder a creatividad de alto nivel a precios competitivos.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Un mensaje para quienes contratan</h2>

            <p>
              Si vas a trabajar con diseñadores cubanos, ten algo presente: detrás de cada logotipo, cartel o identidad
              visual hay horas de estudio, creatividad y dominio técnico. El contexto económico de Cuba es complejo, y
              es fácil encontrar tarifas bajas… pero eso no significa que debas aprovecharte de ellas.
            </p>

            <p>
              Paga por la calidad que recibes. Reconocer el valor del trabajo creativo es la mejor inversión que puedes
              hacer en tu proyecto.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">En resumen:</h2>

            <ul className="list-disc pl-6 mb-8">
              <li>El talento gráfico cubano tiene calidad internacional.</li>
              <li>Con las condiciones adecuadas, un diseñador en la isla puede vivir dignamente de su profesión.</li>
              <li>
                Y tú, como cliente, tienes la oportunidad de ser parte de ese cambio, contratando y pagando justamente
                por un trabajo bien hecho.
              </li>
            </ul>
          </div>
        </div>
      </article>

      <RelatedArticles />
      <Newsletter />
      <Footer />
    </main>
  )
}
