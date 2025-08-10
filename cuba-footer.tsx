import Image from "next/image"
import Link from "next/link"

export function CubaFooter() {
  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/blog", label: "Actualidad" },
    { href: "/convocatorias", label: "Convocatorias" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/cuba-diseno-logo.png"
              alt="Cuba Diseño"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            <p>Copyright Aimas Estudio © 2025. Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
