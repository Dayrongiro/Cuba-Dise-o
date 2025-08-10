import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ActualidadSection } from "@/components/actualidad-section"
import { ConvocatoriasSection } from "@/components/convocatorias-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ActualidadSection />
        <ConvocatoriasSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
