import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CubaContactPage() {
  return (
    <section className="py-20 sm:py-24 bg-white pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Contacto</h1>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            ¿Eres diseñador y quieres sugerir un tema o solicitar tu propio artículo? Contáctanos a través de WhatsApp y
            cuéntanos tu propuesta.
          </p>

          <div className="bg-gray-50 rounded-2xl p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sugiere un tema o solicita tu artículo</h2>
            <p className="text-gray-600 mb-8">
              Si eres profesional del diseño en Cuba y tienes una propuesta interesante, no dudes en escribirnos.
              Estamos siempre buscando nuevas historias y talentos para destacar.
            </p>

            <Link href="http://wa.me/+5350073914" target="_blank" passHref>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-full"
              >
                Escribir por WhatsApp
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Para diseñadores</h3>
              <p className="text-gray-600 mb-4">
                Si eres diseñador cubano y quieres aparecer en nuestro directorio o proponer un artículo sobre tu
                trabajo.
              </p>
              <Link
                href="http://wa.me/+5350073914"
                target="_blank"
                className="text-purple-600 hover:underline font-medium"
              >
                Contáctanos →
              </Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Colaboraciones</h3>
              <p className="text-gray-600 mb-4">
                Para propuestas de colaboración, patrocinios o cualquier otra consulta relacionada con el sitio.
              </p>
              <Link
                href="http://wa.me/+5350073914"
                target="_blank"
                className="text-purple-600 hover:underline font-medium"
              >
                Escribir por WhatsApp →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
