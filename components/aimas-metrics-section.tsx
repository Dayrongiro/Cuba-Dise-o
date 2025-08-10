import { Users, Award, Globe, Clock } from "lucide-react"

export function AimasMetricsSection() {
  const metrics = [
    {
      icon: Users,
      value: "50+",
      label: "Clientes Satisfechos",
      description: "Empresas que confían en nuestro trabajo",
    },
    {
      icon: Award,
      value: "100+",
      label: "Proyectos Completados",
      description: "Diseños entregados con éxito",
    },
    {
      icon: Globe,
      value: "10+",
      label: "Países Alcanzados",
      description: "Presencia internacional",
    },
    {
      icon: Clock,
      value: "2+",
      label: "Años de Experiencia",
      description: "Trayectoria en el mercado",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Nuestros Números</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La confianza de nuestros clientes se refleja en estos resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <metric.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{metric.label}</div>
              <div className="text-gray-600 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
