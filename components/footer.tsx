import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/white-logo.png"
                alt="Sami Ullah Dayo & Co. Logo"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain"
              />
              <div className="ml-3">
                <h2 className="text-white font-semibold text-sm sm:text-base">Sami Ullah Dayo & Co.</h2>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-4 text-sm sm:text-base">
              Dedicated to delivering excellence in the field of law with integrity, competence, and unwavering
              commitment to justice.
            </p>
            <p className="text-white/60 text-xs sm:text-sm">www.legalprofessionals.com</p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-base sm:text-lg mb-3 sm:mb-4">Practice Areas</h3>
            <ul className="space-y-1 sm:space-y-2 text-white/80 text-sm sm:text-base">
              <li>Constitutional Law</li>
              <li>Corporate & Commercial Law</li>
              <li>Customs Law</li>
              <li>Shipping, Maritime & Admiralty Law</li>
              <li>Mining Law</li>
              <li>Energy & Power Law</li>
              <li>Construction & Infrastructure Law</li>
              <li>Property Law</li>
              <li>Land Law</li>
              <li>Tax Law</li>
              <li>Employment Law</li>
              <li>Arbitration & Mediation</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact Info</h3>
            <div className="space-y-4 text-white/80">
              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">Karachi Office</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm leading-relaxed text-justify">
                      Office no 201, 2nd floor, 11-C, Al-Murtaza Commercial Lane No 1, Phase-VIII, DHA, Karachi
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">021-33487560, +923322573335</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">Malir Office</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm leading-relaxed text-justify">
                      Office No. A-28 First Floor Rafi Mall near District & Session Court Malir
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-white mb-2 text-sm sm:text-base">Hyderabad Office</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm leading-relaxed text-justify">
                      Suite No 10, Ground Floor, The Smart Tower, Korean Housing Scheme II, Hyderabad
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">022-6972208</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 pt-2 border-t border-white/20">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm">enquiries@sudlegalservices.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
            © 2026 Sami Ullah Dayo & Co. All rights reserved. | Expert legal services across multiple locations.
          </p>
        </div>
      </div>
    </footer>
  )
}
