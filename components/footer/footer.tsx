"use client"

import { leaguegothic } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { motion, useTransform, useScroll } from "motion/react"
import { useRef } from "react"

export default function Footer() {
	const containerRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end end"],
	})

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	const y = useTransform(scrollYProgress, [0, 1], ["300px", "0px"])

	return (
		<div
			ref={containerRef}
			className="bg-footer-gray relative h-screen"
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
								"text-ash-gray text-center text-[25.5vw] leading-[80%] whitespace-nowrap uppercase select-none max-sm:hidden",
								leaguegothic.className,
							)}
						>
							ferra studio
						</motion.h1>
						<div className="text-ash-gray col-span-12 md:hidden">
							<motion.h1
								className={cn(
									"text-center text-[50vw] leading-[80%] whitespace-nowrap uppercase select-none",
									leaguegothic.className,
								)}
							>
								ferra
							</motion.h1>
							<motion.h1
								className={cn(
									"text-center text-[45vw] leading-[80%] whitespace-nowrap uppercase select-none",
									leaguegothic.className,
								)}
							>
								studio
							</motion.h1>
						</div>
						<div className="h-min-content col-span-12 flex flex-col items-center justify-end gap-3 text-sm text-[#8c8c8c] md:flex-row md:items-end md:justify-between">
							<p className="uppercase">© 2026 Ferra Studio</p>
							<p>
								<a href="mailto:hello@ferrastudio.com">
									hello@ferrastudio.com
								</a>
							</p>
							<p
								className="cursor-pointer uppercase"
								onClick={scrollToTop}
							>
								Back to top
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
