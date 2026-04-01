/* eslint-disable */

import { cn } from "@/lib/utils"
import { leaguegothic } from "@/lib/fonts"
import { useRef } from "react"
import { useScroll, useTransform, motion } from "motion/react"

interface HeroProps {
	animateText?: boolean
}

export default function Hero({ animateText = false }: HeroProps) {
	const ref = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	})

	const headingOne = useTransform(scrollYProgress, [0, 0.6], ["0px", "50px"])
	const headingTwo = useTransform(
		scrollYProgress,
		(progress) => {
			const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
			return isMobile ? 0 : progress * -80
		}
	)

	return (
		<div
			ref={ref}
			className="text-bone-white bg-ash-gray relative h-screen isolate z-10 flex flex-col justify-center max-sm:gap-6 md:grid w-full grid-cols-4 md:grid-rows-[min-content_auto] px-4 py-14 md:h-[70vh] md:py-6"
		>
			{/* Subtitle with accent line - mobile enhanced */}
			<div className="relative col-span-4 will-change-transform">
				<motion.h1
					initial={animateText ? { opacity: 0, y: "-100%" } : false}
					animate={animateText ? { opacity: 1, y: 0 } : false}
					transition={
						animateText
							? {
									duration: 1.2,
									delay: 1.4,
									ease: [0.16, 1, 0.3, 1],
								}
							: {}
					}
					className={cn(
						"text-center text-[23vw] leading-[82%] whitespace-nowrap uppercase select-none md:text-[25.5vw]",
						leaguegothic.className,
					)}
				>
					ferra studio
				</motion.h1>
			</div>
				<motion.div
					initial={animateText ? { opacity: 0, scaleX: 0 } : false}
					animate={animateText ? { opacity: 1, scaleX: 1 } : false}
					transition={{
						duration: 1.4,
						delay: 1.6,
						ease: [0.16, 1, 0.3, 1],
					}}
					className="bg-red-secondary mx-auto h-0.5 w-16 origin-center md:hidden"
				/>
			<div className="relative max-sm:text-center z-10 col-span-4 md:self-start will-change-transform md:col-span-2 md:col-start-3">
				<motion.div
					style={{ y: headingTwo }}
					initial={animateText ? { opacity: 0, y: "-100%" } : false}
					animate={animateText ? { opacity: 1, y: 0 } : false}
					transition={
						animateText
							? {
									duration: 1.4,
									delay: 1.8,
									ease: [0.16, 1, 0.3, 1],
								}
							: {}
					}
				>
					<h2 className="text-[22px] font-medium md:text-4xl">
						Elevate your{" "}
						<span className="text-red-secondary">
							digital presence.
						</span>
					</h2>
				</motion.div>
				<motion.div
					initial={animateText ? { opacity: 0, y: "-100%" } : false}
					animate={animateText ? { opacity: 1, y: 0 } : false}
					transition={
						animateText
							? {
									duration: 1.4,
									delay: 2,
									ease: [0.16, 1, 0.3, 1],
								}
							: {}
					}
					className="text-bone-white/50 mt-3 text-xs tracking-widest uppercase"
				>
					design · development · strategy
				</motion.div>
			</div>

			{/* Main title */}
		</div>
	)
}
