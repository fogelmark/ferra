"use client"

import { motion, useTransform, useScroll } from "motion/react"
import { useRef } from "react"

export default function Footer() {
	const containerRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end end"],
	})

	const y = useTransform(scrollYProgress, [0, 1], ["200px", "0px"])

	return (
		<div
			ref={containerRef}
			className="relative h-[700px] bg-white"
			style={{
				clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
			}}
		>
			<div className="relative -top-[100vh] h-[calc(100vh+700px)]">
				<div className="sticky top-[calc(100vh-700px)] h-[700px]">
					<motion.div
						style={{ y }}
						className="relative flex h-full w-full items-center justify-center px-4 py-8"
					>
						<h1 className="text-8xl text-ash-gray">
							FOOTER
						</h1>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
