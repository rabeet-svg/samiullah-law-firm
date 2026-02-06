"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Image
              src="/images/white-header-logo.png"
              alt="Sami Ullah Dayo & Co - Advocates & Legal Consultants"
              width={240}
              height={70}
              className="h-10 sm:h-14 w-auto object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-primary transition-colors text-sm lg:text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-primary transition-colors text-sm lg:text-base"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 hover:text-primary transition-colors text-sm lg:text-base"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-primary transition-colors text-sm lg:text-base"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-primary transition-colors text-sm lg:text-base"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-white text-sm lg:text-base px-4 lg:px-6"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 -mr-2">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-primary transition-colors py-2 px-2 rounded hover:bg-gray-50"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-primary transition-colors py-2 px-2 rounded hover:bg-gray-50"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-left text-gray-700 hover:text-primary transition-colors py-2 px-2 rounded hover:bg-gray-50"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-gray-700 hover:text-primary transition-colors py-2 px-2 rounded hover:bg-gray-50"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-700 hover:text-primary transition-colors py-2 px-2 rounded hover:bg-gray-50"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary/90 text-white w-full mt-4 mx-2"
              >
                Schedule Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
