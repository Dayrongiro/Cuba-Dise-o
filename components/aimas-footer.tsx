import Link from "next/link"

export function AimasFooter() {
  const services = [
    { name: "Identidad Visual", href: "#servicios" },
    { name: "Campañas Promocionales", href: "#servicios" },
    { name: "Sitios Web", href: "#servicios" },
    { name: "Auditoría de imagen", href: "#servicios" },
    { name: "Otros servicios", href: "#servicios" },
  ]

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">Aimas Estudio</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Estudio de diseño gráfico especializado en identidad visual, campañas promocionales y sitios web. Diseño
              cubano con impacto profesional y visión global.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📧 comercialaimas@gmail.com</p>
              <p>📱 +5350073914</p>
              <p>📍 La Habana, Cuba</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">© 2025 Aimas Estudio. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Regresar a Cuba Diseño
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
