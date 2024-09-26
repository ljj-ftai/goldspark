import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              {/* EDIT: Main headline */}
              Create, Edit, Share Video <span className="text-blue-600">in Minutes</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
              {/* EDIT: Subheadline */}
              Powerful AI video editor that saves you 10x time. No tutorial needed.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="flex-1 bg-gray-100 border-0 text-lg"
                placeholder="Enter your email"
                type="email"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3">
                {/* EDIT: CTA button text */}
                Try for free
              </Button>
            </form>
          </div>
          <div className="w-full max-w-5xl pt-8">
            <Image
              src="/images/hero-image.png"
              alt="Hero"
              width={1200}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}