/* eslint-disable */

import { cn } from "@/lib/utils"
import { leaguegothic } from "@/lib/fonts"
import { useRef } from "react"
import { useScroll, useTransform, motion } from "motion/react"

export default function Hero() {
	const ref = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	})

	const headingOne = useTransform(scrollYProgress, [0, 0.6], ["0px", "50px"])
	const headingTwo = useTransform(scrollYProgress, [0, 1], ["0px", "150px"])
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
	const blur = useTransform(
		scrollYProgress,
		[0, 1],
		["blur(0px)", "blur(2px)"],
	)

	return (
		<div
			ref={ref}
			className="text-bone-white relative isolate grid h-screen w-full grid-cols-4 grid-rows-[auto_min-content] gap-y-8"
		>
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
	)
}
