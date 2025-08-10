import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Newsletter } from "@/components/newsletter"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Convocatorias para diseñadores | Cuba Diseño",
  description:
    "Recopilación de convocatorias a Bienales de Diseño, concursos nacionales e internacionales y residencias para diseñadores cubanos.",
  keywords: "convocatorias diseño Cuba, concursos diseño gráfico, bienales diseño, residencias diseñadores cubanos",
}

export default function ConvocatoriasPage() {
  const convocatorias = [
    {
      category: "Concurso",
      date: "9 Enero 2025",
      title: "Concurso de Carteles VAMPIROS EN LA HABANA – 40 Aniversario",
      excerpt:
        "Para conmemorar los 40 años de este clásico, La Manigua y CartelON convocan a diseñadores y estudiantes de diseño cubanos.",
      image: "/placeholder.svg?height=300&width=400&text=Vampiros+Habana",
      link: "/convocatorias/vampiros-habana-40-aniversario",
    },
    {
      category: "Festival",
      date: "9 Enero 2025",
      title: "Festival Internacional del Nuevo Cine Latinoamericano de La Habana 2025",
      excerpt:
        "El Festival ha abierto la convocatoria para su concurso de carteles en la edición 46, que tendrá lugar del 4 al 14 de diciembre.",
      image: "/placeholder.svg?height=300&width=400&text=Festival+Cine",
      link: "/convocatorias/festival-cine-latinoamericano-2025",
    },
    {
      category: "Bienal",
      date: "9 Enero 2025",
      title: "Bienal Internacional de Diseño Gráfico 2025",
      excerpt:
        "Convocatoria abierta para diseñadores cubanos y latinoamericanos. Participa con tus mejores trabajos de identidad visual.",
      image: "/placeholder.svg?height=300&width=400&text=Bienal+Diseño",
      link: "/convocatorias/bienal-diseno-grafico-2025",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-purple-600 text-sm uppercase tracking-wide mb-4">Convocatorias</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Convocatorias para diseñadores</h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Recopilación de convocatorias a Bienales de Diseño, concursos nacionales e internacionales y residencias
              para diseñadores cubanos
            </p>
          </div>
        </div>
      </section>

      {/* Convocatorias Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {convocatorias.map((convocatoria, index) => (
              <Link key={index} href={convocatoria.link} className="group">
                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={convocatoria.image || "/placeholder.svg"}
                      alt={convocatoria.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span className="text-purple-600 font-medium uppercase tracking-wide text-xs">
                        {convocatoria.category}
                      </span>
                      <span>•</span>
                      <span>{convocatoria.date}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {convocatoria.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{convocatoria.excerpt}</p>
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
