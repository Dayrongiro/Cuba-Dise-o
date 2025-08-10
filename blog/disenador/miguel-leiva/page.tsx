import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function MiguelLeiva() {
  const designer = {
    name: "Miguel Leiva (Miguel LP)",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Miguel Leiva - Cartelista para festivales de cine en Cuba",
    image: "https://fabricadeartecubano.com/wp-content/uploads/2025/05/WhatsApp-Image-2025-05-27-at-12.04.22-PM.jpeg",
    avatar: "/images/designers/miguel-leiva-profile.png",
    content: `
      <p>Miguel Leiva, bajo el alias Miguel LP, es uno de los cartelistas cubanos contemporáneos más destacados en el ámbito del cine independiente. Su trabajo para el Festival Internacional de Cine de Gibara ha sido clave para la identidad visual de este evento, combinando elementos nostálgicos con un trazo fresco y expresivo.</p>

      <p>Sus carteles no solo comunican la esencia del cine cubano, sino que también reflejan una sensibilidad estética capaz de conectar con el público más allá de las fronteras nacionales. Su propuesta gráfica mantiene un equilibrio entre la tradición y la innovación visual, contribuyendo al auge del diseño gráfico cultural en Cuba.</p>

      <p>Su trabajo se caracteriza por una síntesis visual efectiva y un manejo cromático que evoca tanto la nostalgia del cine clásico como la frescura de las nuevas narrativas audiovisuales cubanas.</p>
    `,
  }

  return (
    <main className="min-h-screen">
      <CubaHeader />
      <DesignerProfile designer={designer} />
      <CubaFooter />
    </main>
  )
}
