import { CubaHeader } from "@/components/cuba-header"
import { CubaDesignersPage } from "@/components/cuba-designers-page"
import { CubaNewsletter } from "@/components/cuba-newsletter"
import { CubaFooter } from "@/components/cuba-footer"

export default function DisenadoresCubanos() {
  return (
    <main className="min-h-screen">
      <CubaHeader />
      <CubaDesignersPage />
      <CubaNewsletter />
      <CubaFooter />
    </main>
  )
}
