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
	const headingTwo = useTransform(scrollYProgress, [0, 1], ["0%", "-80px"])
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
	const blur = useTransform(
		scrollYProgress,
		[0, 1],
		["blur(0px)", "blur(2px)"],
	)

	return (
		<div
			ref={ref}
			className="text-bone-white bg-ash-gray relative isolate z-10 grid h-dvh w-full grid-cols-4 grid-rows-[auto_min-content] gap-y-4 px-4 py-14 md:h-screen md:gap-y-8 md:py-0"
		>
			<div className="relative z-10 col-span-4 self-end md:col-span-2 md:col-start-3 md:pl-4">
				<motion.div
					style={{ y: headingTwo }}
					initial={{ opacity: 0, y: "-50%" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1.8,
						delay: 1.7,
						ease: [0.16, 1, 0.3, 1],
					}}
				>
					<h2 className="text-center text-[22px] font-medium md:text-4xl">
						Elevate your{" "}
						<span className="text-red-secondary">
							digital presence.
						</span>
					</h2>
				</motion.div>
			</div>

			<div className="relative col-span-4 self-end max-sm:hidden">
				<motion.h1
					initial={{ opacity: 0, y: "-30%" }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1.8,
						delay: 1.5,
						ease: [0.16, 1, 0.3, 1],
					}}
					className={cn(
						"text-center text-[25.5vw] leading-[82%] whitespace-nowrap uppercase select-none",
						leaguegothic.className,
					)}
				>
					ferra studio
				</motion.h1>
			</div>

			<div className="relative col-span-4 self-end md:hidden">
				<motion.h1
					transition={{ duration: 1 }}
					className={cn(
						"text-center text-[50vw] leading-[80%] whitespace-nowrap uppercase select-none",
						leaguegothic.className,
					)}
				>
					ferra
				</motion.h1>
				<motion.h1
					transition={{ duration: 1 }}
					className={cn(
						"text-center text-[45vw] leading-[80%] whitespace-nowrap uppercase select-none",
						leaguegothic.className,
					)}
				>
					studio
				</motion.h1>
			</div>
		</div>
	)
}
