import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              {/* EDIT: CTA headline */}
              Ready to Transform Your Video Creation?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl lg:text-2xl">
              {/* EDIT: CTA subheadline */}
              Join thousands of satisfied users and experience the power of AI-driven video editing.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3" size="lg">
              {/* EDIT: CTA button text */}
              Get Started for Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}