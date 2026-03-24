"use client"

import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform } from "motion/react"
import { projectz } from "@/lib/projects"
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
	const container = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const lenis = new Lenis()
		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
		return () => lenis.destroy()
	}, [])

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	})

	const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"])
	const overlayOpacity = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[0.3, 0.3, 0.7],
	)

	return (
		<section ref={container} className="relative h-screen bg-black">
			<div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
				<motion.img
					style={{ y }}
					src={src}
					alt={alt}
					className={cn(
						"h-full w-full scale-110 object-cover object-center will-change-transform",
						{
							"object-left md:object-bottom":
								alt === "Östermalms Måleriservice",
						},
					)}
				/>
				<motion.div
					style={{ opacity: overlayOpacity }}
					className="absolute inset-0 bg-black"
				/>
			</div>

			<div className="sticky top-0 z-10 flex px-10 text-white">
				<div className="col-span-3 col-start-6 w-full">{children}</div>
			</div>
		</section>
	)
}

export default function Projects() {
	return (
		<main className="relative bg-black">
			{projectz.map((project, idx) => (
				<ParallaxSection
					key={idx}
					src={project.images}
					alt={project.name}
				>
					<div className="col-span-12 flex h-full w-full flex-col gap-12 py-28 md:flex-row">
						<div className="z-50 flex min-w-[300px] flex-col justify-center gap-12 md:max-w-[400px]">
							<div className="flex flex-col gap-2">
								<div className="overflow-hidden">
									<h3 className="text-4xl">{project.name}</h3>
								</div>
								<div>
									<p className="text-md leading-[17px]">
										{project.description}
									</p>
								</div>
							</div>

							<div className="text-sm uppercase md:max-w-[300px]">
								<div className="grid grid-cols-2">
									<p className="text-gray-secondary">type</p>
									<p>{project.type}</p>
								</div>
								<div className="grid grid-cols-2">
									<p className="text-gray-secondary">role</p>
									<p>{project.role}</p>
								</div>
								<div className="grid grid-cols-2">
									<p className="text-gray-secondary">date</p>
									<p>{project.date}</p>
								</div>
							</div>

							<div className="grid grid-cols-2 grid-rows-1 text-sm uppercase md:max-w-[300px]">
								<p className="text-gray-secondary">tools</p>
								<div>
									{project.tools.map((tool, id) => (
										<p key={id}>{tool}</p>
									))}
								</div>
							</div>

							{/* <div className="flex flex-col gap-2 md:max-w-[300px] text-xs">
                <Button href={selectedProject.href}>visit/preview</Button>
                <Button href={selectedProject.github}>source code</Button>
              </div> */}
						</div>

						<div className="relative h-full w-full"></div>
					</div>
				</ParallaxSection>
			))}
		</main>
	)
}
