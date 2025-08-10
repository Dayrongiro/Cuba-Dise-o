import { CubaHeader } from "@/components/cuba-header"
import { CubaCallsPage } from "@/components/cuba-calls-page"
import { CubaNewsletter } from "@/components/cuba-newsletter"
import { CubaFooter } from "@/components/cuba-footer"

export default function Convocatorias() {
  return (
    <main className="min-h-screen">
      <CubaHeader />
      <CubaCallsPage />
      <CubaNewsletter />
      <CubaFooter />
    </main>
  )
}
