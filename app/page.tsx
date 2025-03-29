import Image from "next/image"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Architecture moderne"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold mb-4">Atelier Lumière Architecture</h1>
              <p className="text-xl mb-8">Créer des espaces qui inspirent, transforment et perdurent.</p>
              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Découvrir nos projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Nos Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                title="Architecture Résidentielle"
                description="Conception de maisons individuelles et d'appartements qui allient esthétique et fonctionnalité."
              />
              <ServiceCard
                title="Architecture Commerciale"
                description="Création d'espaces commerciaux innovants qui reflètent l'identité de votre marque."
              />
              <ServiceCard
                title="Rénovation & Restauration"
                description="Transformation d'espaces existants avec respect pour leur histoire et caractère."
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Projets Récents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Villa Lumière"
                category="Résidentiel"
                imageUrl="/placeholder.svg?height=600&width=800"
              />
              <ProjectCard
                title="Café Moderne"
                category="Commercial"
                imageUrl="/placeholder.svg?height=600&width=800"
              />
              <ProjectCard
                title="Bureaux Horizon"
                category="Commercial"
                imageUrl="/placeholder.svg?height=600&width=800"
              />
              <ProjectCard
                title="Appartement Seine"
                category="Résidentiel"
                imageUrl="/placeholder.svg?height=600&width=800"
              />
              <ProjectCard
                title="Galerie d'Art Nouveau"
                category="Culturel"
                imageUrl="/placeholder.svg?height=600&width=800"
              />
              <ProjectCard
                title="Rénovation Haussmann"
                category="Rénovation"
                imageUrl="/placeholder.svg?height=600&width=800"
              />
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Voir tous les projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Notre équipe"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">À Propos de Nous</h2>
                <p className="text-gray-700 mb-4">
                  Fondé en 2010, Atelier Lumière Architecture est un cabinet d'architecture basé à Paris, spécialisé
                  dans la conception d'espaces innovants et durables.
                </p>
                <p className="text-gray-700 mb-4">
                  Notre équipe de 15 architectes et designers passionnés s'engage à créer des espaces qui répondent aux
                  besoins fonctionnels tout en offrant une expérience esthétique exceptionnelle.
                </p>
                <p className="text-gray-700 mb-6">
                  Nous croyons que l'architecture a le pouvoir de transformer positivement la vie des gens et nous nous
                  efforçons d'intégrer des principes de durabilité dans chaque projet.
                </p>
                <Button>En savoir plus</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Contactez-Nous</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6">Informations de Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mr-4 h-6 w-6 text-gray-400" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p>123 Avenue des Champs-Élysées, 75008 Paris, France</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-4 h-6 w-6 text-gray-400" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <p>+33 1 23 45 67 89</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-4 h-6 w-6 text-gray-400" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p>contact@atelierlumiere.fr</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6">Envoyez-nous un Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Envoyer
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function ProjectCard({ title, category, imageUrl }: { title: string; category: string; imageUrl: string }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
        <p className="text-sm font-medium opacity-75">{category}</p>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  )
}

