"use client"

import { Button } from "@/components/ui/button"
import { Scale, Award, Users, FileText } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-white py-12 sm:py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-6xl text-gray-900 leading-tight">
              Navigating Your Legal Landscape with <span className="text-primary">Expertise</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-6 leading-relaxed">
              We are dedicated to delivering excellence in the field of law. With a relentless commitment to our clients
              and deep understanding of property, land, tax, corporate and employment laws, we stand as your steadfast
              legal ally.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-3 w-full sm:w-auto font-medium"
              >
                Schedule a Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 sm:px-8 py-3 bg-white w-full sm:w-auto font-medium"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 lg:mt-0">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-100">
              <Scale className="h-10 sm:h-12 w-10 sm:w-12 text-primary mb-3 sm:mb-4" />
              <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">Expert Legal Counsel</h3>
              <p className="text-gray-600 text-sm">Years of experience in complex legal matters</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-100">
              <Award className="h-10 sm:h-12 w-10 sm:w-12 text-primary mb-3 sm:mb-4" />
              <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600 text-sm">50+ successful litigation cases</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-100">
              <Users className="h-10 sm:h-12 w-10 sm:w-12 text-primary mb-3 sm:mb-4" />
              <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">Dedicated Team</h3>
              <p className="text-gray-600 text-sm">Experienced professionals across all practice areas</p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border border-gray-100">
              <FileText className="h-10 sm:h-12 w-10 sm:w-12 text-primary mb-3 sm:mb-4" />
              <h3 className="font-serif font-semibold text-lg text-gray-900 mb-2">Comprehensive Services</h3>
              <p className="text-gray-600 text-sm">Property, corporate, tax, and employment law</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
