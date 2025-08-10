import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, User } from "lucide-react"

export function ActualidadSection() {
  const articles = [
    {
      id: 1,
      title: "¿Cuánto gana realmente un diseñador gráfico en Cuba? La respuesta te sorprenderá",
      excerpt:
        "Si alguna vez te has preguntado cuánto cobra un diseñador gráfico en Cuba, la respuesta corta es: menos de lo que vale su talento.",
      author: "Cuba Diseño",
      date: "9 Enero 2025",
      category: "Diseño Gráfico",
      image: "/images/blog/cuanto-gana-disenador-grafico-cuba.png",
      href: "/blog/cuanto-gana-disenador-grafico-cuba",
    },
    {
      id: 2,
      title: "Precios del diseño gráfico en Cuba 2025: guía explicativa para clientes y diseñadores",
      excerpt:
        "En Cuba, el diseño gráfico abarca un conjunto muy amplio de especialidades: desde piezas impresas hasta producciones audiovisuales.",
      author: "Cuba Diseño",
      date: "9 Enero 2025",
      category: "Diseño Gráfico",
      image: "/images/blog/precios-diseno-grafico-cuba-2025.png",
      href: "/blog/precios-diseno-grafico-cuba-2025",
    },
    {
      id: 3,
      title: "Entretiempos: el cartel cubano de cine renace entre tradición y realidad aumentada",
      excerpt:
        "El Centro del Cartel Cubano de Cine abrió sus puertas para la inauguración de Entretiempos, una exposición que reunió a 25 jóvenes diseñadores.",
      author: "Cuba Diseño",
      date: "9 Enero 2025",
      category: "Exposiciones",
      image: "/images/blog/entretiempos-cartel-cubano-cine.png",
      href: "/blog/entretiempos-cartel-cubano-cine",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Actualidad del diseño en Cuba</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Las últimas noticias, tendencias y proyectos del diseño gráfico cubano
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article) => (
            <Link key={article.id} href={article.href} className="group">
              <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{article.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
              Ver todos los artículos
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
