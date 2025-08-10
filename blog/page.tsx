import { CubaHeader } from "@/components/cuba-header"
import { CubaBlogPage } from "@/components/cuba-blog-page"
import { CubaNewsletter } from "@/components/cuba-newsletter"
import { CubaFooter } from "@/components/cuba-footer"

export default function Blog() {
  return (
    <main className="min-h-screen">
      <CubaHeader />
      <CubaBlogPage />
      <CubaNewsletter />
      <CubaFooter />
    </main>
  )
}
