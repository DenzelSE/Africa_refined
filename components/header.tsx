"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center mr-8">
              <div className="relative h-18 w-18">
                <Image
                  src="/carousel/Untitled design(4)-Photoroom.png"
                  alt="Africa Refined Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation - moved next to logo */}
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink href="/">HOME</NavLink>
              <NavLink href="/about">ABOUT</NavLink>
              <NavLink href="/#team">MEET THE TEAM</NavLink>
              <NavLink href="/projects">OUR PROJECTS</NavLink>
              <NavLink href="/shop">SHOP</NavLink>
              <NavLink href="/gallery">GALLERY</NavLink>
              <NavLink href="/contact">CONTACT US</NavLink>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center">
            <Button
              asChild
              variant="outline"
              className="mr-4 border-amber-700 bg-white text-amber-700 hover:bg-amber-50 hidden md:inline-flex"
            >
              <Link href="/donate">DONATE TODAY</Link>
            </Button>

            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/" onClick={toggleMenu}>
                HOME
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={toggleMenu}>
                ABOUT
              </MobileNavLink>
              <MobileNavLink href="/#team" onClick={toggleMenu}>
                MEET THE TEAM
              </MobileNavLink>
              <MobileNavLink href="/projects" onClick={toggleMenu}>
                OUR PROJECTS
              </MobileNavLink>
              <MobileNavLink href="/shop" onClick={toggleMenu}>
                SHOP
              </MobileNavLink>
              <MobileNavLink href="/gallery" onClick={toggleMenu}>
                GALLERY
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={toggleMenu}>
                CONTACT US
              </MobileNavLink>
              <Button asChild variant="outline" className="border-amber-700 bg-white text-amber-700 hover:bg-amber-50 w-full">
                <Link href="/donate" onClick={toggleMenu}>
                  DONATE TODAY
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-gray-700 hover:text-amber-800 font-medium transition-colors">
      {children}
    </Link>
  )
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-amber-800 font-medium transition-colors block py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
