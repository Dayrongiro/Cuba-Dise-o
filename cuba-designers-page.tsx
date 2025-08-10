import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CubaDesignersPage() {
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
      link: "/aimas-estudio",
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
    {
      name: "Michelle Miyares",
      role: "Diseñadora gráfica contemporánea",
      image: "/placeholder.svg?height=200&width=200",
      link: "/disenador/michelle-miyares",
    },
    {
      name: "Edel Rodríguez",
      role: "Ilustrador y diseñador internacional",
      image: "/placeholder.svg?height=200&width=200",
      link: "/disenador/edel-rodriguez",
    },
    {
      name: "Antonio Pérez Ñiko",
      role: "Maestro del cartel cubano",
      image: "/placeholder.svg?height=200&width=200",
      link: "/disenador/antonio-perez-niko",
    },
    {
      name: "Roberto Pérez Potto",
      role: "Diseñador experimental emergente",
      image: "/placeholder.svg?height=200&width=200",
      link: "/disenador/roberto-perez-potto",
    },
    {
      name: "Arístides Torres",
      role: "Cartelista y diseñador joven",
      image: "/placeholder.svg?height=200&width=200",
      link: "/disenador/aristides-torres",
    },
    {
      name: "Miguel Leiva",
      role: "Cartelista para festivales de cine",
      image: "/placeholder.svg?height=200&width=200",
      link: "/disenador/miguel-leiva",
    },
  ]

  return (
    <section className="py-20 sm:py-24 bg-white pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-medium mb-4">Diseñadores cubanos</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Conoce el talento de la isla</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Explora y descubre los perfiles de los diseñadores cubanos y empresas nacionales dedicadas al diseño. Si
            eres profesional del sector puedes inscribirte en el sitio totalmente gratis y si conoces a algún diseñador
            cubano puedes compartir el enlace para que se inscriba.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="http://wa.me/+5350073914" target="_blank" passHref>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full px-8 py-2 bg-transparent"
              >
                Compartir enlace
              </Button>
            </Link>
            <Link href="http://wa.me/+5350073914" target="_blank" passHref>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-2">
                Inscribirse en el sitio
              </Button>
            </Link>
          </div>
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
      </div>
    </section>
  )
}
