"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

export function HeroSection() {
  const [views, setViews] = useState(11211)

  useEffect(() => {
    const interval = setInterval(() => {
      setViews((prev) => prev + 1)
    }, 60000) // Aumenta 1 vista cada minuto

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cuba-wave-pattern" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q50,0 100,50 T200,50" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cuba-wave-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/90 text-lg mb-8 font-medium">Diseño en Cuba</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-12 leading-tight">
            Diseño cubano
            <br />
            contemporáneo en
            <br />
            un mismo sitio.
          </h1>

          <p className="text-white/90 text-lg sm:text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
            Cuba Diseño es el sitio independiente de diseño de actualidad del diseño cubano. Conecta con otros
            diseñadores que trabajan oficinas como identidades visuales, campañas promocionales, branding especializado
            en Cuba. Síguenos en nuestras redes.
          </p>

          {/* View Counter */}
          <div className="flex items-center justify-center gap-2 mb-8 text-white/80">
            <Eye className="w-5 h-5" />
            <span className="text-lg font-medium">{views.toLocaleString()} vistas</span>
          </div>

          <Link href="/blog" passHref>
            <Button
              size="sm"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 text-base font-medium rounded-md"
            >
              Ver actualidad
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
