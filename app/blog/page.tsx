import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Actualidad del diseño en Cuba | Cuba Diseño",
  description:
    "Conoce sobre la historia del diseño cubano, las últimas noticias del sector en la isla, exposiciones, nuevas herramientas y sobre el talento local.",
  keywords: "actualidad diseño Cuba, noticias diseño gráfico Cuba, blog diseño cubano",
}

export default function BlogPage() {
  const articles = [
    {
      category: "Diseño Gráfico",
      date: "9 Enero 2025",
      title: "¿Cuánto gana realmente un diseñador gráfico en Cuba? La respuesta te sorprenderá",
      excerpt:
        "Si alguna vez te has preguntado cuánto cobra un diseñador gráfico en Cuba, la respuesta corta es: menos de lo que vale su talento.",
      image: "/placeholder.svg?height=300&width=400&text=Salarios+Diseño+Cuba",
      link: "/blog/cuanto-gana-disenador-grafico-cuba",
    },
    {
      category: "Diseño Gráfico",
      date: "9 Enero 2025",
      title: "Precios del diseño gráfico en Cuba 2025: guía explicativa para clientes y diseñadores",
      excerpt:
        "En Cuba, el diseño gráfico abarca un conjunto muy amplio de especialidades: desde piezas impresas hasta producciones audiovisuales.",
      image: "/placeholder.svg?height=300&width=400&text=Precios+Diseño",
      link: "/blog/precios-diseno-grafico-cuba-2025",
    },
    {
      category: "Diseño Gráfico",
      date: "9 Enero 2025",
      title: "Entretiempos: el cartel cubano de cine renace entre tradición y realidad aumentada",
      excerpt:
        "El Centro del Cartel Cubano de Cine abrió sus puertas para la inauguración de Entretiempos, una exposición que reunió a 25 jóvenes diseñadores.",
      image: "/placeholder.svg?height=300&width=400&text=Entretiempos+Cartel",
      link: "/blog/entretiempos-cartel-cubano-cine",
    },
    {
      category: "Historia",
      date: "9 Enero 2025",
      title: "Historia y legado del diseño gráfico cubano: de los carteles revolucionarios al diseño digital",
      excerpt:
        "Un recorrido por la evolución del diseño gráfico en Cuba, desde los icónicos carteles de la Revolución hasta las tendencias digitales actuales.",
      image: "/placeholder.svg?height=300&width=400&text=Historia+Diseño+Cuba",
      link: "/blog/historia-diseno-grafico-cubano",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-purple-600 text-sm uppercase tracking-wide mb-4">Nuestro Blog</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Actualidad del diseño en Cuba</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Conoce sobre la historia del diseño cubano, las últimas noticias del sector en la isla, exposiciones,
              nuevas herramientas y sobre el talento local.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link key={index} href={article.link} className="group">
                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span className="text-purple-600 font-medium uppercase tracking-wide text-xs">
                        {article.category}
                      </span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                    <span className="text-purple-600 text-sm font-medium hover:underline">Leer más...</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  )
}
