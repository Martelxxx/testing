import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Nos projets"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold mb-4">Nos Projets</h1>
              <p className="text-xl">Découvrez notre portfolio de réalisations architecturales.</p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" className="rounded-full">
                Tous
              </Button>
              <Button variant="outline" className="rounded-full">
                Résidentiel
              </Button>
              <Button variant="outline" className="rounded-full">
                Commercial
              </Button>
              <Button variant="outline" className="rounded-full">
                Culturel
              </Button>
              <Button variant="outline" className="rounded-full">
                Rénovation
              </Button>
              <Button variant="outline" className="rounded-full">
                Urbanisme
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-lg shadow-md">
      <div className="relative h-64">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className="text-sm bg-gray-100 px-2 py-1 rounded">{project.category}</span>
        </div>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Button variant="outline" size="sm">
          Voir le projet
        </Button>
      </div>
    </div>
  )
}

interface Project {
  id: number
  title: string
  category: string
  description: string
  imageUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Villa Lumière",
    category: "Résidentiel",
    description: "Une villa contemporaine avec de grandes baies vitrées offrant une vue panoramique sur la mer.",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Café Moderne",
    category: "Commercial",
    description: "Un café au design minimaliste situé dans le quartier historique de Paris.",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Bureaux Horizon",
    category: "Commercial",
    description: "Un espace de travail collaboratif conçu pour favoriser la créativité et l'innovation.",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Appartement Seine",
    category: "Résidentiel",
    description: "Rénovation complète d'un appartement haussmannien avec vue sur la Seine.",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    title: "Galerie d'Art Nouveau",
    category: "Culturel",
    description: "Une galerie d'art contemporain avec un éclairage naturel optimisé pour mettre en valeur les œuvres.",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 6,
    title: "Rénovation Haussmann",
    category: "Rénovation",
    description: "Restauration d'un immeuble haussmannien avec préservation des éléments d'origine.",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 7,
    title: "Maison Écologique",
    category: "Résidentiel",
    description: "Une maison passive conçue avec des matériaux durables et des systèmes d'énergie renouvelable.",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 8,
    title: "Boutique Élégance",
    category: "Commercial",
    description: "Une boutique de luxe avec un design intérieur qui reflète l'identité de la marque.",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 9,
    title: "Centre Culturel",
    category: "Culturel",
    description: "Un espace polyvalent pour des événements culturels, des expositions et des performances.",
    imageUrl: "/placeholder.svg?height=600&width=800",
  },
]

