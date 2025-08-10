import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/blog", label: "Blog" },
    { href: "/convocatorias", label: "Convocatorias" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/cuba-diseno-logo.png"
                alt="Cuba Diseño"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              La plataforma que conecta el talento del diseño gráfico cubano con el mundo. Descubre artistas, proyectos
              únicos y la rica historia visual de Cuba.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>comercialaimas@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>La Habana, Cuba</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+5350073914</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Navegación</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/aimas-estudio"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Aimas Estudio
                </Link>
              </li>
              <li>
                <Link
                  href="/aimas-estudio#servicios"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Identidad Visual
                </Link>
              </li>
              <li>
                <Link
                  href="/aimas-estudio#servicios"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Campañas Promocionales
                </Link>
              </li>
              <li>
                <Link
                  href="/aimas-estudio#servicios"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                >
                  Sitios Web
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">© 2025 Cuba Diseño. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link
              href="/privacidad"
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
            >
              Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
