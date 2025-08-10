import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function BackToCubaDiseno() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-purple-600 text-white py-3">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white hover:text-purple-200 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Regresar a Cuba Diseño</span>
        </Link>
      </div>
    </div>
  )
}
