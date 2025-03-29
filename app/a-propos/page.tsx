import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="À propos de nous"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-3xl text-white">
              <h1 className="text-5xl font-bold mb-4">À Propos de Nous</h1>
              <p className="text-xl">Découvrez notre histoire, notre équipe et notre philosophie.</p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
                <p className="text-gray-700 mb-4">
                  Fondé en 2010 par l'architecte renommé Jean Dupont, Atelier Lumière Architecture est né d'une passion
                  pour la création d'espaces qui transforment positivement la vie des gens.
                </p>
                <p className="text-gray-700 mb-4">
                  Au cours de la dernière décennie, notre cabinet s'est développé pour devenir l'une des références en
                  matière d'architecture innovante et durable en France. Nous avons constitué une équipe talentueuse de
                  15 architectes et designers partageant la même vision.
                </p>
                <p className="text-gray-700 mb-4">
                  Aujourd'hui, nous sommes fiers d'avoir réalisé plus de 200 projets à travers la France et l'Europe,
                  allant de résidences privées à des bâtiments commerciaux et culturels emblématiques.
                </p>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Notre histoire"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
              <p className="text-gray-600">Les principes qui guident notre approche de l'architecture et du design.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard
                title="Innovation"
                description="Nous repoussons constamment les limites de la créativité et de la technologie pour créer des espaces uniques et avant-gardistes."
              />
              <ValueCard
                title="Durabilité"
                description="Nous nous engageons à concevoir des bâtiments respectueux de l'environnement et économes en énergie pour un avenir plus durable."
              />
              <ValueCard
                title="Excellence"
                description="Nous visons l'excellence dans chaque aspect de notre travail, de la conception initiale aux moindres détails de la réalisation."
              />
              <ValueCard
                title="Collaboration"
                description="Nous croyons en la puissance de la collaboration avec nos clients et partenaires pour créer des solutions optimales."
              />
              <ValueCard
                title="Intégrité"
                description="Nous agissons avec honnêteté, transparence et éthique dans toutes nos relations professionnelles."
              />
              <ValueCard
                title="Responsabilité"
                description="Nous assumons la responsabilité de l'impact de notre travail sur les communautés et l'environnement."
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Notre Équipe</h2>
              <p className="text-gray-600">
                Des professionnels passionnés et talentueux dédiés à transformer votre vision en réalité.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <TeamMember
                name="Jean Dupont"
                role="Architecte Principal & Fondateur"
                imageUrl="/placeholder.svg?height=400&width=400"
              />
              <TeamMember
                name="Marie Laurent"
                role="Directrice de Design"
                imageUrl="/placeholder.svg?height=400&width=400"
              />
              <TeamMember
                name="Pierre Martin"
                role="Architecte Senior"
                imageUrl="/placeholder.svg?height=400&width=400"
              />
              <TeamMember
                name="Sophie Moreau"
                role="Designer d'Intérieur"
                imageUrl="/placeholder.svg?height=400&width=400"
              />
              <TeamMember
                name="Thomas Bernard"
                role="Architecte Paysagiste"
                imageUrl="/placeholder.svg?height=400&width=400"
              />
              <TeamMember
                name="Claire Dubois"
                role="Architecte Junior"
                imageUrl="/placeholder.svg?height=400&width=400"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Rejoignez Notre Équipe</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nous sommes toujours à la recherche de talents passionnés pour rejoindre notre équipe créative.
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Voir Nos Offres d'Emploi
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function TeamMember({
  name,
  role,
  imageUrl,
}: {
  name: string
  role: string
  imageUrl: string
}) {
  return (
    <div className="text-center">
      <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  )
}

