import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface DesignerProfileProps {
  designer: {
    name: string
    category: string
    date: string
    title: string
    image: string
    avatar: string
    content: string
  }
}

export function DesignerProfile({ designer }: DesignerProfileProps) {
  const relatedArticles = [
    {
      category: "Diseñador",
      date: "13 Marzo 2023",
      title: "Claudio Sotolongo - Diseñador y curador cubano",
      excerpt:
        "Claudio Sotolongo es uno de los diseñadores gráficos cubanos más influyentes de la contemporaneidad, reconocido por su innovación en carteles culturales.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/blog/disenador/claudio-sotolongo",
    },
    {
      category: "Diseñador",
      date: "13 Marzo 2023",
      title: "Raupa - Diseñador audiovisual dinámico",
      excerpt:
        "Raúl Valdés González es una de las figuras más dinámicas del diseño cubano actual, especializado en motion graphics y animación.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/blog/disenador/raupa",
    },
    {
      category: "Diseñador",
      date: "13 Marzo 2023",
      title: "Alex Martínez - Arquitecto e ilustrador experimental",
      excerpt:
        "Conocido como Fuck_yellow, combina arquitectura e ilustración para crear un lenguaje visual único y experimental.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/blog/disenador/alex-martinez",
    },
  ]

  return (
    <article className="pt-20">
      {/* Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/blog" className="inline-flex items-center text-purple-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al blog
        </Link>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <span className="text-purple-600 font-medium">{designer.category}</span>
          <span>•</span>
          <span>{designer.date}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">{designer.title}</h1>
      </div>

      {/* Hero Image */}
      <div className="w-full aspect-[16/9] relative mb-12">
        <Image src={designer.image || "/placeholder.svg"} alt={designer.name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Author Info */}
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
              <Image
                src={designer.avatar || "/placeholder.svg"}
                alt={designer.name}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{designer.name}</h3>
              <p className="text-gray-600">Diseñador gráfico cubano</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16">
            {designer.content
              .split("\n")
              .map((paragraph, index) => {
                if (paragraph.trim().startsWith("<p>")) {
                  return <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                }
                return null
              })
              .filter(Boolean)}
          </div>
        </div>
      </div>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Te puede interesar</h2>
            <Link href="/blog" passHref>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2">Ver todos</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <Link key={index} href={article.link} className="group">
                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
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
    </article>
  )
}
