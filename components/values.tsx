import { Shield, Clock, Lock, Target, Award } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Quality & Dedication",
    description:
      "We uphold the highest standards of quality and legal excellence, approaching each case with meticulous attention to detail.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Integrity is at the heart of everything we do. We hold ourselves to the highest ethical standards in all our practices.",
  },
  {
    icon: Clock,
    title: "Promptness",
    description:
      "We understand the importance of timely legal solutions and are responsive to our clients' needs and deadlines.",
  },
  {
    icon: Lock,
    title: "Confidentiality",
    description:
      "Protecting our clients' sensitive information is paramount. We treat all client matters with the utmost confidentiality.",
  },
  {
    icon: Target,
    title: "Precision",
    description:
      "Precision is the cornerstone of our practice. We approach every task with attention to detail to achieve optimal outcomes.",
  },
]

export function Values() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These values are not just words; they are the principles that underpin our practice and guide our commitment
            to serving you with excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <value.icon className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="font-serif font-semibold text-xl text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
