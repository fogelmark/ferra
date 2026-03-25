"use client"

import { useScroll, useMotionValueEvent, motion } from "framer-motion"
import { useState } from "react"

export default function StickyHeader() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    const threshold = window.innerHeight * 1

    if (latest > threshold) {
      if (latest > previous) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-4 left-1/2 z-50 max-w-2xl -translate-x-1/2 rounded-lg bg-background/50 text-white shadow-md backdrop-blur-md"
    >
      <nav>
        <ul className="flex items-center justify-around gap-4 px-8 py-3 text-sm font-semibold uppercase">
          <li><a href="#">work</a></li>
          <li><a href="#">videos</a></li>
          <li><a href="#">tour</a></li>
          <li><a href="#">shop</a></li>
          <li><a href="#">subscribe</a></li>
        </ul>
      </nav>
    </motion.header>
  )
}
