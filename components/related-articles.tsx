import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function RelatedArticles() {
  const articles = [
    {
      category: "Diseño Gráfico",
      date: "9 Enero 2025",
      title: "Historia y legado del diseño gráfico cubano",
      excerpt: "El diseño gráfico en Cuba tiene raíces que anteceden ampliamente a la Revolución de 1959.",
      image: "/placeholder.svg?height=300&width=400&text=Historia+Diseño",
      link: "/blog/historia-diseno-grafico-cubano",
    },
    {
      category: "Diseño Gráfico",
      date: "9 Enero 2025",
      title: "Entretiempos: el cartel cubano de cine renace",
      excerpt: "Una exposición que reunió a 25 jóvenes diseñadores en homenaje al aniversario del ICAIC.",
      image: "/placeholder.svg?height=300&width=400&text=Entretiempos",
      link: "/blog/entretiempos-cartel-cubano-cine",
    },
    {
      category: "Estudio",
      date: "9 Enero 2025",
      title: "Aimas Estudio: Equipo Multidisciplinar",
      excerpt: "Ofrecemos identidad visual, campañas promocionales y sitios web.",
      image: "/placeholder.svg?height=300&width=400&text=Aimas+Estudio",
      link: "/aimas-estudio",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Te puede interesar</h2>
          <Link href="/blog">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2">Ver todo</Button>
          </Link>
        </div>

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
  )
}
