import { CheckCircle } from 'lucide-react'

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          {/* EDIT: Features section title */}
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* EDIT: Feature list */}
          {[
            "AI-powered editing",
            "One-click sharing",
            "Collaborative workspace",
            "Custom branding",
            "Advanced analytics",
            "24/7 support"
          ].map((feature, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-blue-600 w-6 h-6" />
              <span className="text-xl font-semibold">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}