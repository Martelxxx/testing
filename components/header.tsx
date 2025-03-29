"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold">
            Atelier Lumière
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/projets">Projets</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/a-propos">À Propos</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Contact Button */}
          <Button className="hidden md:flex">Prendre Rendez-vous</Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </MobileNavLink>
            <MobileNavLink href="/projets" onClick={() => setIsMenuOpen(false)}>
              Projets
            </MobileNavLink>
            <MobileNavLink href="/services" onClick={() => setIsMenuOpen(false)}>
              Services
            </MobileNavLink>
            <MobileNavLink href="/a-propos" onClick={() => setIsMenuOpen(false)}>
              À Propos
            </MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <Button className="w-full mt-2">Prendre Rendez-vous</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-black font-medium transition-colors">
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="text-gray-700 hover:text-black font-medium py-2 transition-colors" onClick={onClick}>
      {children}
    </Link>
  )
}

