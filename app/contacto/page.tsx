import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Cuba Diseño",
  description: "Ponte en contacto con Cuba Diseño. Envíanos tus consultas, sugerencias o propuestas de colaboración.",
  keywords: "contacto Cuba Diseño, colaboración diseñadores cubanos, consultas diseño gráfico Cuba",
}

export default function ContactoPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Contacto</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              ¿Tienes alguna consulta, sugerencia o propuesta de colaboración? Nos encantaría escucharte.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Información de contacto</h2>
                <p className="text-gray-600 mb-8">
                  Estamos aquí para ayudarte con cualquier consulta sobre diseño gráfico cubano, colaboraciones o
                  propuestas.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">comercialaimas@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">+5350073914</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
                    <p className="text-gray-600">La Habana, Cuba</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Collaboration Cards */}
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">¿Eres diseñador cubano?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Si quieres formar parte de nuestra plataforma y mostrar tu trabajo, no dudes en contactarnos para que
                  tengas tu propio artículo con botones a tu portafolio y redes sociales.
                </p>
                <Link href="https://wa.link/14bm2i" target="_blank">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">Solicitar mi artículo</Button>
                </Link>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">¿Tienes una propuesta de artículo?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Envíanos tu propuesta de artículo sobre diseño gráfico cubano y forma parte de nuestra comunidad.
                </p>
                <Link href="https://wa.link/1th1ky" target="_blank">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                    Enviar propuesta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
