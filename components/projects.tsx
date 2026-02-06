import { Gavel, FileText, Building2, TrendingUp } from "lucide-react"

const projects = [
  {
    icon: Gavel,
    title: "Litigation Successes",
    description:
      "Led more than 50 litigation cases as Lead Counsel, successfully representing and defending clients while obtaining favorable verdicts and orders.",
    highlight: "50+ Cases Won",
  },
  {
    icon: FileText,
    title: "Franchise-Based Hockey League",
    description:
      "Structured and drafted procurement paperwork for Pakistan's first-ever Franchise-Based Hockey League, including RFP and License Agreement.",
    highlight: "Industry First",
  },
  {
    icon: Building2,
    title: "High-Profile Government Cases",
    description:
      "Played crucial roles in high-profile cases related to state land, including Bahria Town Karachi and BTK Forest land encroachment matters.",
    highlight: "Government Partnership",
  },
  {
    icon: TrendingUp,
    title: "Financial Expertise",
    description:
      "Extended Legal Opinions to various banks on mortgage and financing facilities, demonstrating our expertise in financial transactions.",
    highlight: "Banking Sector",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4">Our Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We take pride in our diverse portfolio of projects, each exemplifying our dedication to delivering
            exceptional legal solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <project.icon className="h-12 w-12 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="font-serif font-semibold text-xl text-gray-900">{project.title}</h3>
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full leading-3">
                      {project.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
