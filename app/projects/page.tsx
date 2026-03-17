"use client"

import { motion, useScroll, useTransform } from "motion/react"
import Lenis from "lenis"
import React, { useEffect, useRef } from "react"

interface ParallaxSectionProps {
	src: string
	alt: string
	children: React.ReactNode
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
	src,
	alt,
	children,
}) => {
	useEffect(() => {
		const lenis = new Lenis()
		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])

	const container = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	})

	// Parallax för bilden
	const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])

	/**
	 * DYNAMISK OVERLAY LOGIK:
	 * [0, 0.5, 1] representerar scroll-positionen.
	 * [0, 0, 0.8] representerar opaciteten.
	 * * Från 0 till 0.5 (halva sektionen) förblir opaciteten 0.
	 * Från 0.5 till 1 (slutet av sektionen) ökar den linjärt till 0.8.
	 */
	const overlayOpacity = useTransform(
		scrollYProgress,
		[0, 0.3, 1],
		[0, 0, 0.7],
	)

	return (
		<section
			ref={container}
			className="relative h-[150vh] w-screen overflow-hidden bg-black"
		>
			<div className="absolute inset-0 h-full w-full overflow-hidden">
				<motion.img
					style={{ y }}
					src={src}
					alt={alt}
					className="h-full w-full scale-110 object-cover"
				/>

				{/* Overlay som triggas efter halva scrollen */}
				<motion.div
					style={{ opacity: overlayOpacity }}
					className="pointer-events-none absolute inset-0 bg-black"
				/>
			</div>

			<div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
				{children}
			</div>
		</section>
	)
}

export default function Projects() {
	return (
		<main className="relative overflow-x-hidden bg-black">
			<ParallaxSection src="/images/leon_bomb.jpg" alt="Project Leon">
				<h2 className="text-5xl font-bold tracking-tighter uppercase">
					Project Leon
				</h2>
				<p className="mt-4 text-xl opacity-80">Lead Developer</p>
			</ParallaxSection>

			<ParallaxSection
				src="/images/ostermalm_small.jpg"
				alt="Project Leon"
			>
				<h2 className="text-5xl font-bold tracking-tighter uppercase">
					Project Leon
				</h2>
				<p className="mt-4 text-xl opacity-80">Lead Developer</p>
			</ParallaxSection>

			<ParallaxSection
				src="/images/tedrico_desktop.jpg"
				alt="Project Leon"
			>
				<h2 className="text-5xl font-bold tracking-tighter uppercase">
					Project Leon
				</h2>
				<p className="mt-4 text-xl opacity-80">Lead Developer</p>
			</ParallaxSection>
		</main>
	)
}
