import type React from "react"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Nos services"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold mb-4">Nos Services</h1>
              <p className="text-xl">Des solutions architecturales complètes pour tous vos projets.</p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Solutions Architecturales Complètes</h2>
              <p className="text-gray-600">
                Chez Atelier Lumière, nous offrons une gamme complète de services d'architecture pour répondre à tous
                vos besoins, de la conception initiale à la réalisation finale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre Processus</h2>
              <p className="text-gray-600">
                Une approche méthodique et collaborative pour transformer votre vision en réalité.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <ProcessStep
                number="01"
                title="Consultation"
                description="Nous discutons de vos besoins, de votre budget et de votre vision pour le projet."
              />
              <ProcessStep
                number="02"
                title="Conception"
                description="Nous développons des concepts architecturaux qui répondent à vos exigences."
              />
              <ProcessStep
                number="03"
                title="Développement"
                description="Nous affinons le design et préparons les plans détaillés pour la construction."
              />
              <ProcessStep
                number="04"
                title="Réalisation"
                description="Nous supervisons la construction pour assurer la fidélité au design original."
              />
            </div>
          </div>
        </section>

        {/* Featured Service */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Architecture Durable</h2>
                <p className="text-gray-600 mb-6">
                  Nous sommes engagés à créer des bâtiments qui minimisent l'impact environnemental tout en maximisant
                  l'efficacité énergétique et le confort des occupants.
                </p>
                <ul className="space-y-3 mb-8">
                  <FeatureItem>Utilisation de matériaux écologiques et durables</FeatureItem>
                  <FeatureItem>Optimisation de l'efficacité énergétique</FeatureItem>
                  <FeatureItem>Intégration de systèmes d'énergie renouvelable</FeatureItem>
                  <FeatureItem>Conception bioclimatique adaptée à l'environnement</FeatureItem>
                  <FeatureItem>Gestion responsable de l'eau et des déchets</FeatureItem>
                </ul>
                <Button>
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Architecture durable"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à Démarrer Votre Projet?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre vision et découvrir comment nous pouvons vous aider
              à la concrétiser.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Demander un Devis
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <span className="text-blue-600 text-xl">{service.icon}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <Button variant="link" className="p-0">
          En savoir plus
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function FeatureItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
      <span>{children}</span>
    </li>
  )
}

interface Service {
  id: number
  icon: string
  title: string
  description: string
}

const services: Service[] = [
  {
    id: 1,
    icon: "🏠",
    title: "Architecture Résidentielle",
    description: "Conception de maisons individuelles et d'appartements qui allient esthétique et fonctionnalité.",
  },
  {
    id: 2,
    icon: "🏢",
    title: "Architecture Commerciale",
    description: "Création d'espaces commerciaux innovants qui reflètent l'identité de votre marque.",
  },
  {
    id: 3,
    icon: "🔄",
    title: "Rénovation & Restauration",
    description: "Transformation d'espaces existants avec respect pour leur histoire et caractère.",
  },
  {
    id: 4,
    icon: "🏙️",
    title: "Urbanisme",
    description: "Planification urbaine et conception de quartiers durables et harmonieux.",
  },
  {
    id: 5,
    icon: "🪑",
    title: "Design d'Intérieur",
    description: "Aménagement d'espaces intérieurs fonctionnels, esthétiques et personnalisés.",
  },
  {
    id: 6,
    icon: "📋",
    title: "Consultation & Expertise",
    description: "Conseils professionnels et expertise technique pour tous types de projets architecturaux.",
  },
]

