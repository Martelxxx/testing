import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-2 text-center">Contactez-Nous</h1>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Nous sommes à votre disposition pour répondre à toutes vos questions.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un Message</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstname" className="block mb-2 text-sm font-medium">
                          Prénom
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastname" className="block mb-2 text-sm font-medium">
                          Nom
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                        Sujet
                      </label>
                      <select
                        id="subject"
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        <option value="project">Nouveau projet</option>
                        <option value="info">Demande d'information</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="other">Autre</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Envoyer
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-6">Informations de Contact</h2>
                    <div className="space-y-4">
                      <ContactInfo
                        icon={<MapPin className="h-5 w-5 text-blue-500" />}
                        title="Adresse"
                        content="123 Avenue des Champs-Élysées, 75008 Paris, France"
                      />
                      <ContactInfo
                        icon={<Phone className="h-5 w-5 text-blue-500" />}
                        title="Téléphone"
                        content="+33 1 23 45 67 89"
                      />
                      <ContactInfo
                        icon={<Mail className="h-5 w-5 text-blue-500" />}
                        title="Email"
                        content="contact@atelierlumiere.fr"
                      />
                      <ContactInfo
                        icon={<Clock className="h-5 w-5 text-blue-500" />}
                        title="Heures d'Ouverture"
                        content="Lundi - Vendredi: 9h00 - 18h00"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4">Prenez Rendez-vous</h2>
                    <p className="text-gray-600 mb-4">
                      Vous souhaitez discuter de votre projet avec l'un de nos architectes? Prenez rendez-vous pour une
                      consultation initiale.
                    </p>
                    <Button className="w-full">Réserver une Consultation</Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map Section */}
            <Card className="overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Carte Google Maps ici</p>
                {/* In a real implementation, you would embed a Google Map here */}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function ContactInfo({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode
  title: string
  content: string
}) {
  return (
    <div className="flex">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  )
}

