"use client"
import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const services = [
  {
    title: "Web Design & Development",
    description: "We curate immersive digital environments where motion meets functionality. Every interaction is intentionally choreographed to elevate your brand’s narrative.",
  },
  {
    title: "Brand Identity",
    description: "Identity is the soul of your business. We translate your core values into a visual language that commands attention and builds lasting loyalty.",
  },
  {
    title: "SEO Strategy",
    description: "Presence is nothing without findability. We implement sophisticated search strategies that align your content with the specific intent of your highest-value customers.",
  },
  {
    title: "Maintenance & Hosting",
    description: "Performance is a standard, not an option. Our architectural hosting ensures your platform remains a seamless, high-speed sanctuary for your audience.",
  },
]

export default function ServicesSection() {
  const container = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <div ref={container} className="relative h-[600vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center justify-center uppercase">
        <h1 className="text-9xl font-bold text-white/10">Capabilities</h1>
      </div>
      
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="grid w-full max-w-7xl grid-cols-4 gap-4 px-8">
          {services.map((service, i) => {
            // Stagger logic for 4 items: sides (1) and middle (0)
            // [Outer Left, Inner Left, Inner Right, Outer Right]
            const order = [0, 1, 2, 3][i]
            
            const start = 0.1 * order
            const end = start + 0.4

            const y = useTransform(
              scrollYProgress,
              [start, end],
              ["100vh", "0vh"],
            )
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
            const scale = useTransform(scrollYProgress, [start, end], [0.8, 1])

            return (
              <motion.div 
                key={i} 
                style={{ y, opacity, scale }} 
                className="flex flex-col gap-4 rounded-lg bg-[#f5f4f210] p-6 border border-white/5 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}