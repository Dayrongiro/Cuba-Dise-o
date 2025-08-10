"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AimasPortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("Campañas Promocionales")

  const filters = ["Campañas Promocionales", "Identidad Visual"]

  const projects = [
    {
      id: 1,
      title: "Anestesia",
      category: "Campañas Promocionales",
      image: "/images/campaigns/balcon-cero.png",
      description: "Campaña promocional para evento cultural organizado por La Jeringa",
    },
    {
      id: 2,
      title: "El Arte Nos Une",
      category: "Campañas Promocionales",
      image: "/images/campaigns/flate-nusine.png",
      description: "Campaña Promocional para la AHS Nacional",
    },
    {
      id: 3,
      title: "Orizzonti Cuba-Italia",
      category: "Campañas Promocionales",
      image: "/images/campaigns/orizzonti.png",
      description: "Campaña promocional para festival de cine",
    },
    {
      id: 4,
      title: "La Obra del Siglo",
      category: "Campañas Promocionales",
      image: "/images/campaigns/obra-del-siglo.png",
      description: "Cartel publicitario de proyección de cine en Fábrica de Arte Cubano",
    },
    {
      id: 5,
      title: "Global Export Solutions",
      category: "Identidad Visual",
      image: "/images/logos/global-export.png",
      description: "Identidad visual para empresa de exportación",
    },
    {
      id: 6,
      title: "Black Swan Productions",
      category: "Identidad Visual",
      image: "/images/logos/black-swan.png",
      description: "Logotipo para productora audiovisual",
    },
    {
      id: 7,
      title: "TRM Logistics",
      category: "Identidad Visual",
      image: "/images/logos/trm-logistics.png",
      description: "Identidad corporativa para empresa logística",
    },
    {
      id: 8,
      title: "DulSelle Café-Pastelería",
      category: "Identidad Visual",
      image: "/images/logos/dulselle.png",
      description: "Branding completo para café-pastelería",
    },
    {
      id: 9,
      title: "Resolviste",
      category: "Identidad Visual",
      image: "/images/logos/resolviste.png",
      description: "Identidad visual para plataforma de servicios",
    },
    {
      id: 10,
      title: "Mimar",
      category: "Identidad Visual",
      image: "/images/logos/mimar.png",
      description: "Logotipo para marca de productos marinos",
    },
  ]

  const filteredProjects = projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portafolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Proyectos destacados</h2>

          <div className="flex gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter ? "bg-blue-500 hover:bg-blue-600" : ""}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 bg-white shadow-lg">
                <div className="p-4">
                  <div className="relative w-full" style={{ aspectRatio: "1" }}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
