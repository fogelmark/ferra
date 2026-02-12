/* eslint-disable */

"use client"

import { leaguegothic } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Lenis from "lenis"
import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import Footer from "@/components/footer/footer"
import Intro from "@/components/intro/intro"
import Section from "@/components/section/section"

const subheading = [
	"We design and build thoughtful digital",
	"experiences for brands and businesses.",
]

// const slogan = ["Elevate your digital presence."]

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis()
		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])

	const containerRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	})

	const image = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
	const headingOne = useTransform(scrollYProgress, [0, 1], ["0px", "-600px"])
	const headingTwo = useTransform(scrollYProgress, [0, 1], ["0px", "400px"])
	const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
	const blur = useTransform(
		scrollYProgress,
		[0, 1],
		["blur(0px)", "blur(5px)"],
	)
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3])

	return (
		<div ref={containerRef} className="bg-ash-gray">
			{/* <div className="relative isolate grid h-screen w-full grid-cols-4 grid-rows-[auto_min-content] bg-[url(/images/water-full.jpg)] bg-cover bg-center overflow-hidden gap-y-8"> */}
			<div className="text-bone-white relative isolate grid h-screen w-full grid-cols-4 grid-rows-[auto_min-content] gap-y-8">
				<div className="relative z-10 col-span-2 col-start-3 self-end pl-4">
					<motion.div style={{ y: headingTwo }}>
						<h2 className="text-4xl font-medium">
							Elevate your{" "}
							<span className="text-red-secondary">
								digital presence.
							</span>
						</h2>
					</motion.div>
				</div>

				<div className="relative col-span-4 self-end">
					<motion.h1
						style={{ y: headingOne, opacity }}
						className={cn(
							"text-center text-[25.5vw] leading-[80%] whitespace-nowrap uppercase select-none",
							leaguegothic.className,
						)}
					>
						ferra studio
					</motion.h1>
				</div>
			</div>
			<Intro />
			<Section />
			<Footer />
		</div>
	)
}
