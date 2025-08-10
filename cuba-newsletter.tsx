"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CubaNewsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-20 sm:py-24 bg-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="newsletter-wave-pattern" x="0" y="0" width="200" height="100" patternUnits="userSpaceOnUse">
              <path d="M0,50 Q50,0 100,50 T200,50" stroke="white" strokeWidth="1" fill="none" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#newsletter-wave-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Recibe noticias semanales</h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">sobre el diseño cubano</h3>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 flex-1"
            />
            <Button type="submit" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-2 font-semibold">
              Suscríbeme
            </Button>
          </form>

          <p className="text-white/90 text-sm max-w-lg mx-auto">
            Conviértete en miembro de nuestra plataforma y recibe directamente en tu email las noticias publicadas en
            este sitio
          </p>
        </div>
      </div>
    </section>
  )
}
