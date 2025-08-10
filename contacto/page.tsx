import { CubaHeader } from "@/components/cuba-header"
import { CubaContactPage } from "@/components/cuba-contact-page"
import { CubaNewsletter } from "@/components/cuba-newsletter"
import { CubaFooter } from "@/components/cuba-footer"

export default function Contacto() {
  return (
    <main className="min-h-screen">
      <CubaHeader />
      <CubaContactPage />
      <CubaNewsletter />
      <CubaFooter />
    </main>
  )
}
