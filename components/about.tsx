export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4 sm:mb-6">
              About Our Law Firm
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Established with a commitment to delivering excellence in the legal field, our firm is founded on the
              principles of integrity, competence, and an unwavering dedication to justice.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
              Our firm brings years of navigating the complexities of the legal world and championing the causes of
              justice with expertise across multiple practice areas.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div>
                <h3 className="font-serif font-semibold text-lg sm:text-xl text-primary mb-2">2018</h3>
                <p className="text-gray-600 text-sm sm:text-base">Founded with a vision for legal excellence</p>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-lg sm:text-xl text-primary mb-2">50+</h3>
                <p className="text-gray-600 text-sm sm:text-base">Successful litigation cases</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-6 sm:p-8 rounded-lg mt-8 lg:mt-0">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-gray-900 mb-3 sm:mb-4">Our Commitment</h3>
            <blockquote className="text-gray-700 italic leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
              "Our firm is dedicated to providing comprehensive legal solutions with integrity, professional excellence,
              and an unwavering commitment to justice for all our clients."
            </blockquote>
            <cite className="text-primary font-semibold text-sm sm:text-base">— Our Leadership</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
