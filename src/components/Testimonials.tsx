'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'

// EDIT: Testimonial data
const testimonials = [
  {
    name: "Alice Johnson",
    role: "Product Manager",
    content: "ClipFlow has revolutionized our team's video creation process. It's intuitive and powerful!",
    avatar: "/images/avatar1.png"
  },
  {
    name: "Bob Smith",
    role: "Content Creator",
    content: "I've tried many video editors, but ClipFlow stands out. It's a game-changer for my workflow!",
    avatar: "/images/avatar2.png"
  },
  {
    name: "Carol Williams",
    role: "Marketing Director",
    content: "The AI features in ClipFlow have significantly reduced our video production time. Highly recommended!",
    avatar: "/images/avatar3.png"
  }
]

export default function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
          {/* EDIT: Testimonials section title */}
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <Card className="h-full bg-gray-50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-lg mb-4">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}