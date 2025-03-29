import type React from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Atelier Lumière</h3>
            <p className="text-gray-400 mb-4">Créer des espaces qui inspirent, transforment et perdurent.</p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={20} />} label="Facebook" />
              <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Accueil</FooterLink>
              <FooterLink href="/projets">Projets</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/a-propos">À Propos</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="/services/residentiel">Architecture Résidentielle</FooterLink>
              <FooterLink href="/services/commercial">Architecture Commerciale</FooterLink>
              <FooterLink href="/services/renovation">Rénovation & Restauration</FooterLink>
              <FooterLink href="/services/urbanisme">Urbanisme</FooterLink>
              <FooterLink href="/services/interieur">Design d'Intérieur</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>123 Avenue des Champs-Élysées</p>
              <p>75008 Paris, France</p>
              <p className="mt-2">+33 1 23 45 67 89</p>
              <p>contact@atelierlumiere.fr</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Atelier Lumière Architecture. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a href={href} className="text-gray-400 hover:text-white transition-colors" aria-label={label}>
      {icon}
    </a>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  )
}

