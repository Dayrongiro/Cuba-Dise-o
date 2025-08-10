"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 bg-purple-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Quieres colaborar con nosotros?</h2>
          <p className="text-white/90 text-lg mb-8">
            Si tienes una propuesta de artículo, proyecto o colaboración, no dudes en contactarnos.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-white mb-2">¿Eres diseñador cubano?</h3>
            <p className="text-white/90 text-sm mb-4">
              Si quieres formar parte de nuestra plataforma y mostrar tu trabajo, no dudes en contactarnos para que
              tengas tu propio artículo con botones a tu portafolio y redes sociales.
            </p>
            <Link href="https://wa.link/14bm2i" target="_blank">
              <Button className="bg-white text-purple-600 hover:bg-gray-100 font-medium">Solicitar mi artículo</Button>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">¿Tienes una propuesta de artículo?</h3>
            <p className="text-white/90 text-sm mb-4">
              Envíanos tu propuesta de artículo sobre diseño gráfico cubano y forma parte de nuestra comunidad.
            </p>
            <Link href="https://wa.link/1th1ky" target="_blank">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                Enviar propuesta
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
