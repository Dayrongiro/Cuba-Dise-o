import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Award } from "lucide-react"

export function ConvocatoriasSection() {
  const convocatorias = [
    {
      id: 1,
      title: "Concurso de Carteles VAMPIROS EN LA HABANA – 40 Aniversario",
      description:
        "Para conmemorar los 40 años de este clásico, La Manigua y CartelON convocan a diseñadores y estudiantes de diseño cubanos.",
      deadline: "Hasta el 30 de septiembre de 2025",
      location: "Cuba",
      prize: "100 Euros + Serigrafía",
      status: "Abierta",
      image: "/images/convocatorias/vampiros-habana-40-aniversario.png",
      href: "/convocatorias/vampiros-habana-40-aniversario",
    },
    {
      id: 2,
      title: "Festival Internacional del Nuevo Cine Latinoamericano de La Habana 2025",
      description:
        "El Festival ha abierto la convocatoria para su concurso de carteles en la edición 46, que tendrá lugar del 4 al 14 de diciembre.",
      deadline: "Hasta el 15 de agosto de 2025",
      location: "La Habana, Cuba",
      prize: "Por definir",
      status: "Abierta",
      image: "/images/convocatorias/festival-cine-latinoamericano-2025.png",
      href: "/convocatorias/festival-cine-latinoamericano-2025",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Convocatorias abiertas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oportunidades para diseñadores cubanos en concursos y eventos internacionales
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {convocatorias.map((convocatoria) => (
            <Link key={convocatoria.id} href={convocatoria.href} className="group">
              <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={convocatoria.image || "/placeholder.svg"}
                    alt={convocatoria.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {convocatoria.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {convocatoria.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{convocatoria.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{convocatoria.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{convocatoria.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      <span>{convocatoria.prize}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/convocatorias">
            <button className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
              Ver todas las convocatorias
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
