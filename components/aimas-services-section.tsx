import { Palette, Megaphone, Globe, Search, Package } from "lucide-react"

export function AimasServicesSection() {
  const services = [
    {
      icon: Palette,
      title: "Identidad Visual",
      description:
        "Creamos logotipos únicos y sistemas de identidad visual completos que reflejan la esencia de tu marca.",
      features: ["Logotipos", "Manuales de marca", "Papelería corporativa", "Aplicaciones digitales"],
    },
    {
      icon: Megaphone,
      title: "Campañas Promocionales",
      description: "Desarrollamos campañas visuales impactantes para eventos, productos y servicios.",
      features: ["Carteles", "Flyers", "Banners digitales", "Material promocional"],
    },
    {
      icon: Globe,
      title: "Sitios Web",
      description:
        "Diseñamos y desarrollamos sitios web modernos, funcionales y optimizados para todos los dispositivos.",
      features: ["Diseño responsive", "UX/UI", "E-commerce", "Landing pages"],
    },
    {
      icon: Search,
      title: "Auditoría de imagen",
      description:
        "Realizamos un análisis profundo de la comunicación visual de su empresa y detectamos posibles mejoras.",
      features: ["Análisis de marca", "Evaluación visual", "Recomendaciones", "Plan de mejoras"],
    },
    {
      icon: Package,
      title: "Otros servicios de diseño",
      description: "Ofrecemos soluciones adicionales para completar tu estrategia visual.",
      features: ["Catálogos", "Packaging", "Señalética", "Material editorial"],
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales de diseño que combinan creatividad, estrategia y funcionalidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
