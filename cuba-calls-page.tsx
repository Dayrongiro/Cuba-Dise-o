import Link from "next/link"
import Image from "next/image"

export function CubaCallsPage() {
  const calls = [
    {
      category: "Concurso",
      date: "9 Enero 2025",
      title: "Concurso de Carteles VAMPIROS EN LA HABANA – 40 Aniversario",
      excerpt:
        "Para conmemorar los 40 años de este clásico, La Manigua y CartelON convocan a diseñadores y estudiantes de diseño cubanos a participar en este concurso.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/convocatorias/vampiros-habana-40-aniversario",
    },
    {
      category: "Festival",
      date: "9 Enero 2025",
      title: "Festival Internacional del Nuevo Cine Latinoamericano de La Habana 2025",
      excerpt:
        "El Festival ha abierto la convocatoria para su concurso de carteles en la edición 46, que tendrá lugar del 4 al 14 de diciembre de 2025.",
      image: "/placeholder.svg?height=300&width=400",
      link: "/convocatorias/festival-cine-latinoamericano-2025",
    },
    {
      category: "Travel",
      date: "13 March 2023",
      title: "Train Or Bus Journey?Which one suits?",
      excerpt:
        "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person",
      image: "/placeholder.svg?height=300&width=400",
      link: "/convocatorias/train-or-bus-journey",
    },
    {
      category: "Development",
      date: "13 March 2023",
      title: "Best Website to research for your next project",
      excerpt:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
      image: "/placeholder.svg?height=300&width=400",
      link: "/convocatorias/best-website-research",
    },
    {
      category: "Sports",
      date: "13 March 2023",
      title: "How to Be a Dancer in 2023 with proper skills?",
      excerpt:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive",
      image: "/placeholder.svg?height=300&width=400",
      link: "/convocatorias/how-to-be-dancer",
    },
    // Second row
    {
      category: "Travel",
      date: "13 March 2023",
      title: "Who is the best singer on chart? Know him?",
      excerpt:
        "Chart by Billboard which ranks the all-time greatest artists based on their performance on the weekly Billboard Hot 100 and",
      image: "/placeholder.svg?height=300&width=400",
      link: "/convocatorias/best-singer-chart",
    },
    {
      category: "Development",
      date: "13 March 2023",
      title: "How to start export import business from home?",
      excerpt:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
      image: "/placeholder.svg?height=300&width=400",
      link: "/convocatorias/export-import-business",
    },
    {
      category: "Sports",
      date: "13 March 2023",
      title: "Make some drinks with chocolates and milk",
      excerpt:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive",
      image: "/placeholder.svg?height=300&width=400",
      link: "/convocatorias/chocolate-drinks",
    },
    // Third row
    {
      category: "Travel",
      date: "13 March 2023",
      title: "8 Rules Of Travelling In Sea You Need To Know",
      excerpt:
        "Travelling in sea has many advantages. Some of the advantages of transporting goods by sea include: lower costs, large shipping capacity",
      image: "/placeholder.svg?height=300&width=400",
      link: "/convocatorias/sea-travel-rules",
    },
    {
      category: "Development",
      date: "13 March 2023",
      title: "How to build strong portfolio and get a Job in UI/UX",
      excerpt:
        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs",
      image: "/placeholder.svg?height=300&width=400",
      link: "/convocatorias/ui-ux-portfolio",
    },
    {
      category: "Sports",
      date: "13 March 2023",
      title: "How to Be a Professional Footballer in 2023",
      excerpt:
        "Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive",
      image: "/placeholder.svg?height=300&width=400",
      link: "/convocatorias/professional-footballer",
    },
  ]

  return (
    <section className="py-20 sm:py-24 bg-white pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-purple-600 font-medium mb-4">Convocatorias</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">Convocatorias para diseñadores</h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Recopilación de convocatorias a bienales de diseño, concursos nacionales e internacionales y residencias
            para diseñadores cubanos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {calls.map((call, index) => (
            <Link key={index} href={call.link} className="group">
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                <div className="aspect-[4/3] relative">
                  <Image src={call.image || "/placeholder.svg"} alt={call.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="text-purple-600 font-medium">{call.category}</span>
                    <span>•</span>
                    <span>{call.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {call.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{call.excerpt}</p>
                  <span className="text-purple-600 text-sm font-medium hover:underline">Leer más...</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
