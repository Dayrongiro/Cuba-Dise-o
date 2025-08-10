import { CubaHeader } from "@/components/cuba-header"
import { CubaHeroSection } from "@/components/cuba-hero-section"
import { CubaNewsSection } from "@/components/cuba-news-section"
import { CubaCallsSection } from "@/components/cuba-calls-section"
import { CubaNewsletter } from "@/components/cuba-newsletter"
import { CubaFooter } from "@/components/cuba-footer"

export default function CubaHome() {
  return (
    <main className="min-h-screen">
      <CubaHeader />
      <CubaHeroSection />
      <CubaNewsSection />
      <CubaCallsSection />
      <CubaNewsletter />
      <CubaFooter />
    </main>
  )
}
