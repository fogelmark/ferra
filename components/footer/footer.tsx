"use client"

import { leaguegothic } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { motion, useTransform, useScroll, useReducedMotion } from "motion/react"
import { useRef, useEffect, useState } from "react"

export default function Footer() {
	const containerRef = useRef<HTMLDivElement>(null)
	const prefersReducedMotion = useReducedMotion()
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}

		checkMobile()
		window.addEventListener("resize", checkMobile)

		return () => window.removeEventListener("resize", checkMobile)
	}, [])

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end end"],
	})

	const y = useTransform(
		scrollYProgress,
		[0, 1],
		prefersReducedMotion || isMobile ? ["0px", "0px"] : ["300px", "0px"]
	)

	return (
		<div
			ref={containerRef}
			className="bg-footer-gray relative h-[50vh] md:h-screen py-8 md:py-0"
			style={{
				clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
			}}
		>
			<div className="relative md:-top-[100vh] md:h-[200vh]">
				<div className="md:sticky md:top-0 h-auto md:h-screen md:overflow-hidden">
					<motion.div
						style={{ y }}
						className="relative flex flex-col gap-18 justify-between h-full w-full px-4 md:py-4"
					>
						<motion.h1
							className={cn(
								"text-ash-gray text-center text-[23vw] md:text-[25.5vw] leading-[82%] whitespace-nowrap uppercase select-none",
								leaguegothic.className,
							)}
						>
							ferra studio
						</motion.h1>
						<div className="flex flex-col md:flex-row justify-between items-center max-sm:gap-2 text-sm text-[#8c8c8c]">
							<a
								href="mailto:hello@ferrastudio.com"
								className="hover:text-ash-gray transition-colors"
							>
								hello@ferrastudio.com
							</a>
							<p className="uppercase">© 2026 Ferra Studio</p>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
