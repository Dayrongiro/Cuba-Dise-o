import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CubaContactSection() {
  return (
    <section className="py-20 sm:py-24 bg-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-wave-pattern" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q50,0 100,50 T200,50" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-wave-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">¿Eres diseñador?</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">Sugiere un tema o solicita tu artículo</h3>

          <p className="text-white/90 text-lg mb-12 max-w-lg mx-auto">
            Si eres profesional del diseño en Cuba y tienes una propuesta interesante, no dudes en escribirnos. Estamos
            siempre buscando nuevas historias y talentos para destacar.
          </p>

          <Link href="http://wa.me/+5350073914" target="_blank" passHref>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full"
            >
              Escribir por WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
