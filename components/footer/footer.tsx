"use client"

import { leaguegothic } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { motion, useTransform, useScroll } from "motion/react"
import { useRef } from "react"

export default function Footer() {
	const containerRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: containerRef,
		// We track from when the top of the footer hits the bottom of the viewport
		// until the bottom of the footer hits the bottom of the viewport.
		offset: ["start end", "end end"],
	})

	// Adjusted the parallax transform to start further down for a 100vh height
	const y = useTransform(scrollYProgress, [0, 1], ["300px", "0px"])

	return (
		<div
			ref={containerRef}
			className="relative h-screen bg-[#e7e7e7]"
			style={{
				clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
			}}
		>
			<div className="relative -top-[100vh] h-[200vh]">
				<div className="sticky top-0 h-screen overflow-hidden">
					<motion.div
						style={{ y }}
						className="relative grid h-full w-full grid-cols-12 px-4 py-4"
					>
						<motion.h1
							className={cn(
								"text-ash-gray text-center text-[25.5vw] leading-[80%] whitespace-nowrap uppercase select-none",
								leaguegothic.className,
							)}
						>
							ferra studio
						</motion.h1>
						<div className="h-min-content col-span-12 flex items-end justify-between text-sm text-[#8c8c8c]">
							<p className="uppercase">© 2026 Ferra Studio</p>
							<p>hello@ferrastudio.com</p>
							{/* <p>11:35 AM Stockholm</p> */}
							<p className="uppercase">Back to top</p>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
