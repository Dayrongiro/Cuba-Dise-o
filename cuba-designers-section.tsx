import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CubaDesignersSection() {
  const designers = [
    {
      name: "Nelson Ponce",
      role: "Cartelista, diseñador y artista visual",
      image: "/placeholder.svg?height=200&width=200",
      link: "/disenador/nelson-ponce",
    },
    {
      name: "Dayron Giro",
      role: "Cartelista, diseñador y Director Creativo",
      image: "/placeholder.svg?height=200&width=200",
      link: "/disenador/dayron-giro",
    },
    {
      name: "Claudio Sotolongo",
      role: "Diseñador y curador cubano",
      image: "/placeholder.svg?height=200&width=200",
      link: "/disenador/claudio-sotolongo",
    },
    {
      name: "Aimas Estudio",
      role: "Estudio de diseño multidisciplinar",
      image: "/images/logo.png",
      link: "/blog/aimas-estudio",
    },
    {
      name: "Raupa",
      role: "Diseñador audiovisual y realizador",
      image: "/placeholder.svg?height=200&width=200",
      link: "/disenador/raupa",
    },
    {
      name: "Alex Martínez",
      role: "Arquitecto e ilustrador experimental",
      image: "/placeholder.svg?height=200&width=200",
      link: "/disenador/alex-martinez",
    },
  ]

  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Diseñadores cubanos</h2>
          <Link href="/disenadores-cubanos" passHref>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2">Ver todos</Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {designers.map((designer, index) => (
            <Link key={index} href={designer.link} className="group">
              <div className="text-center">
                <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={designer.image || "/placeholder.svg"}
                    alt={designer.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{designer.name}</h3>
                <p className="text-sm text-gray-600">{designer.role}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            ¿Eres profesional del diseño en Cuba?{" "}
            <Link href="http://wa.me/+5350073914" className="text-purple-600 hover:underline" target="_blank">
              Inscríbete aquí
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
