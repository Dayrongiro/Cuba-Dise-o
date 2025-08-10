import { CubaHeader } from "@/components/cuba-header"
import { DesignerProfile } from "@/components/designer-profile"
import { CubaFooter } from "@/components/cuba-footer"

export default function AntonioPerezniko() {
  const designer = {
    name: "Antonio Pérez (Ñiko)",
    category: "DISEÑADOR",
    date: "15 Enero 2025",
    title: "Antonio Pérez Ñiko - Maestro fundacional del cartel cubano",
    image: "https://tse1.mm.bing.net/th/id/OIP.4FgZau6MLdnTcTBJDQihPAHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    avatar: "https://tse2.mm.bing.net/th/id/OIP.LXAie-tuMnZ48jccKP-7MwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    content: `
      <p>Antonio Pérez González ("Ñiko") nació en La Habana en 1941. Con una sólida formación como historiador del arte y diseñador gráfico, fue clave en la construcción de la estética del cartel cubano, particularmente en trabajos para el ICAIC en las décadas de 1960 y 70. En los años 90 se trasladó a México, donde ha continuado desarrollando su obra y labor docente.</p>

      <p>Su cartel contemporáneo se distingue por su contenido poético, sus metáforas visuales sutiles y un refinado equilibrio compositivo. Ha sido objeto de exposiciones retrospectivas y homenaje institucional, además de recibir el Doctor Honoris Causa por su aporte al diseño y la cultura visual en México.</p>

      <p>Ñiko es considerado una figura fundacional en el diseño de carteles en Cuba, con una obra que sigue siendo fuente de inspiración para generaciones de creadores. Su legado trasciende fronteras y continúa influyendo en el diseño gráfico latinoamericano contemporáneo.</p>
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
