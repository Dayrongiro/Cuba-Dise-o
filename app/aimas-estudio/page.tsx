import { BackToCubaDiseno } from "@/components/back-to-cuba-diseno"
import { AimasHeader } from "@/components/aimas-header"
import { AimasHeroSection } from "@/components/aimas-hero-section"
import { AimasMetricsSection } from "@/components/aimas-metrics-section"
import { AimasServicesSection } from "@/components/aimas-services-section"
import { AimasPortfolioSection } from "@/components/aimas-portfolio-section"
import { AimasContactSection } from "@/components/aimas-contact-section"
import { AimasFooter } from "@/components/aimas-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aimas Estudio - Diseño Gráfico Profesional en Cuba",
  description:
    "Ofrecemos servicios de identidad visual, campañas promocionales y sitios web. Creamos logotipos, manuales de identidad, carteles y más. Diseño cubano con impacto profesional y visión global.",
  keywords: "diseño gráfico Cuba, identidad visual, campañas promocionales, logotipos, branding Cuba",
}

export default function AimasEstudioPage() {
  return (
    <main className="min-h-screen bg-white">
      <BackToCubaDiseno />
      <AimasHeader />
      <AimasHeroSection />
      <AimasMetricsSection />
      <AimasServicesSection />
      <AimasPortfolioSection />
      <AimasContactSection />
      <AimasFooter />
    </main>
  )
}
