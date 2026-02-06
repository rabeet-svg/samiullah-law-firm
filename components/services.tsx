"use client"

import {
  Building,
  Landmark,
  Calculator,
  Briefcase,
  Users,
  Scale,
  Gavel,
  Ship,
  Pickaxe,
  Zap,
  HardHat,
} from "lucide-react"
import { useEffect, useRef } from "react"

const services = [
  {
    icon: Gavel,
    title: "Constitutional Law",
    description: "Expert representation in constitutional matters, fundamental rights, and judicial review cases.",
  },
  {
    icon: Briefcase,
    title: "Corporate & Commercial Law",
    description: "Comprehensive business law services including mergers, acquisitions, and commercial disputes.",
  },
  {
    icon: Calculator,
    title: "Customs Law",
    description: "Specialized customs clearance, duty disputes, and international trade compliance services.",
  },
  {
    icon: Ship,
    title: "Shipping, Maritime & Admiralty Law",
    description: "Maritime disputes, shipping contracts, and admiralty jurisdiction matters.",
  },
  {
    icon: Pickaxe,
    title: "Mining Law",
    description: "Mining rights, exploration licenses, and mineral extraction legal frameworks.",
  },
  {
    icon: Zap,
    title: "Energy & Power Law",
    description: "Energy sector regulations, power generation projects, and renewable energy compliance.",
  },
  {
    icon: HardHat,
    title: "Construction & Infrastructure Law",
    description: "Construction contracts, infrastructure projects, and engineering dispute resolution.",
  },
  {
    icon: Building,
    title: "Property Law",
    description: "Comprehensive legal services for property transactions, disputes, and documentation.",
  },
  {
    icon: Landmark,
    title: "Land Law",
    description: "Expert guidance on land acquisition, revenue matters, and regulatory compliance.",
  },
  {
    icon: Users,
    title: "Employment Law",
    description: "Workplace disputes, employment contracts, and labor law compliance.",
  },
  {
    icon: Scale,
    title: "Arbitration & Mediation",
    description: "Alternative dispute resolution services with accredited arbitrators and mediators.",
  },
]

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30) // Smooth continuous scroll

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4">Our Legal Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive legal solutions across multiple practice areas, ensuring expert guidance for all
            your legal needs.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex gap-6 overflow-hidden" style={{ scrollBehavior: "auto" }}>
            {/* First set of services */}
            {services.map((service, index) => (
              <div
                key={`first-${index}`}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-80"
              >
                <service.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {services.map((service, index) => (
              <div
                key={`second-${index}`}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-80"
              >
                <service.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
