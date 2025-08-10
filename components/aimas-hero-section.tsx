import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Palette, Globe, Zap } from "lucide-react"

export function AimasHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="aimas-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="white" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aimas-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Services Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Palette className="w-4 h-4 mr-2" />
              Identidad Visual
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Zap className="w-4 h-4 mr-2" />
              Campañas Promocionales
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              <Globe className="w-4 h-4 mr-2" />
              Sitios Web
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">Aimas Estudio</h1>

          <p className="text-white/90 text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios de identidad visual, campañas promocionales y sitios web. Creamos logotipos, manuales de
            identidad, carteles y más. Nuestro enfoque combina creatividad estratégica y funcionalidad para marcas,
            eventos y productos. Diseño cubano con impacto profesional y visión global.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#portafolio">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-md"
              >
                Ver Portafolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="https://wa.link/52bek9" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold rounded-md bg-transparent"
              >
                Contactar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
