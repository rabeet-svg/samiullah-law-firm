import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Mr. Sami Ullah Dayo",
    position: "Head of Chambers",
    image: "/images/sami-ullah-dayo.jpg",
    bio: "A distinguished lawyer and Head of Chambers with extensive expertise in navigating complex legal terrains. His exceptional dedication includes serving as Assistant to the Chief Legal Counsel of the Land Utilization Department, Board of Revenue, Sindh.",
  },
  {
    name: "Mr. Waqar Ahmed Rajput",
    position: "Associate Partner",
    image: "/images/user-icon.jpg",
    bio: "An esteemed Associate Partner heading our Hyderabad office, specializing in accountability and criminal laws. His astute legal insight and exceptional leadership have been instrumental in our firm's success.",
  },
  {
    name: "Mr. Abubakar Jatoi",
    position: "Head of Tax Department",
    image: "/images/abubakar-jatoi.jpg",
    bio: "A seasoned tax expert leading our Tax Department with extensive experience in tax law. He also serves as the current focal person to the Minister of Mines and Minerals, Sindh for legal affairs.",
  },
  {
    name: "Mr. Ghazanfar Sultan",
    position: "Associate",
    image: "/images/ghazanfar-sultan.jpg",
    bio: "Specializes in real estate and infrastructure development law. His keen eye for detail and deep understanding of property matters make him a trusted advisor for development projects.",
  },
  {
    name: "Mr. Syed Shahryar Hasan",
    position: "Associate",
    image: "/images/shahryar-hasan.jpg",
    bio: "Brings a unique perspective to Intellectual Property law with a background rooted in the arts. His understanding of creative industries makes him invaluable in safeguarding IP rights.",
  },
  {
    name: "Mr. Muhammad Haroon Hatib",
    position: "Associate",
    image: "/images/haroon-hatib.jpg",
    bio: "A versatile legal professional with dual law degrees and extraordinary research skills. His expertise spans corporate financing, development projects, and contentious civil disputes.",
  },
]

export function Team() {
  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-3 sm:mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Our distinguished team of legal professionals brings decades of combined experience and unwavering
            commitment to serving our clients' diverse legal needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-4 border-primary/10"
                  />
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-gray-900 mb-1 sm:mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
