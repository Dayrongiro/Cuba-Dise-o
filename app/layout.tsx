import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cuba Diseño - Plataforma del Diseño Gráfico Cubano",
  description:
    "Descubre el talento creativo de Cuba. Conectamos diseñadores, proyectos únicos y la rica historia visual de la isla con el mundo.",
  keywords: "diseño gráfico, Cuba, diseñadores cubanos, arte, creatividad, portafolio",
  authors: [{ name: "Cuba Diseño" }],
  openGraph: {
    title: "Cuba Diseño - Plataforma del Diseño Gráfico Cubano",
    description:
      "Descubre el talento creativo de Cuba. Conectamos diseñadores, proyectos únicos y la rica historia visual de la isla con el mundo.",
    url: "https://cubadiseno.com",
    siteName: "Cuba Diseño",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuba Diseño - Plataforma del Diseño Gráfico Cubano",
    description:
      "Descubre el talento creativo de Cuba. Conectamos diseñadores, proyectos únicos y la rica historia visual de la isla con el mundo.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
