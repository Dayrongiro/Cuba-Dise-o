import Link from "next/link"
import Image from "next/image"

export function CubaBlogPage() {
  const articles = [
    {
      category: "Diseño Gráfico",
      date: "9 Enero 2025",
      title: "¿Cuánto gana realmente un diseñador gráfico en Cuba? La respuesta te sorprenderá",
      excerpt:
        "Si alguna vez te has preguntado cuánto cobra un diseñador gráfico en Cuba, la respuesta corta es: menos de lo que vale su talento. Y no es una exageración.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/blog/cuanto-gana-disenador-grafico-cuba",
    },
    {
      category: "Diseño Gráfico",
      date: "9 Enero 2025",
      title: "Precios del diseño gráfico en Cuba 2025: guía explicativa para clientes y diseñadores",
      excerpt:
        "En Cuba, el diseño gráfico abarca un conjunto muy amplio de especialidades: desde piezas impresas de pequeña escala hasta grandes producciones audiovisuales.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/blog/precios-diseno-grafico-cuba-2025",
    },
    {
      category: "Diseño Gráfico",
      date: "9 Enero 2025",
      title: "Entretiempos: el cartel cubano de cine renace entre tradición y realidad aumentada",
      excerpt:
        "El Centro del Cartel Cubano de Cine abrió sus puertas para la inauguración de Entretiempos, una exposición que reunió a 25 jóvenes diseñadores.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/blog/entretiempos-cartel-cubano-cine",
    },
    {
      category: "Diseño Gráfico",
      date: "9 Enero 2025",
      title:
        "Historia y legado del diseño gráfico cubano: recorrido desde el ICAIC hasta la diversificación contemporánea",
      excerpt:
        "El diseño gráfico en Cuba tiene raíces que anteceden ampliamente a la Revolución de 1959. Un recorrido por los últimos 66 años de tradición visual.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/blog/historia-diseno-grafico-cubano",
    },
    {
      category: "Estudio",
      date: "9 Enero 2025",
      title: "Aimas Estudio: Equipo de Diseño Gráfico Multidisciplinar",
      excerpt:
        "Ofrecemos identidad visual, campañas promocionales y sitios web. Creamos logotipos, manuales, infografías, carteles, redes y servicios online.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/aimas-estudio",
    },
  ]

  return (
    <section className="py-20 sm:py-24 bg-white pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-medium mb-4">Nuestro Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Actualidad del diseño en Cuba</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Conoce sobre la historia del diseño cubano, las últimas noticias del sector en la isla, exposiciones, nuevas
            herramientas y sobre el talento local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link key={index} href={article.link} className="group">
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="aspect-[4/3] relative">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="text-purple-600 font-medium">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <span className="text-purple-600 text-sm font-medium hover:underline">Leer más...</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
