import * as motion from "motion/react-client"
import { cn } from "@/lib/utils"
import { useRef } from "react"
import { useInView, Variants } from "motion/react"

export default function MainIntroHeading() {
	const ref = useRef<HTMLDivElement>(null)

	const isInView = useInView(ref, {
		once: true,
		amount: 0.5,
	})

	const maskAnimation: Variants = {
		initial: { y: "100%", opacity: 0 },
		animate: (i: number) => ({
			y: "0%",
			opacity: 1,
			transition: {
				delay: 0.1 * i,
				duration: 0.8,
				ease: [0, 0, 0.2, 1],
			},
		}),
	}

	return (
		<div
			ref={ref}
			className="col-span-12 col-start-1 md:row-span-5 grid-rows-[min-content_min-content] row-start-2 md:row-start-7 md:text-right text-xl md:text-7xl"
		>
			{heading.map((line, i) => (
				<div key={i} className="min-h-[1em] overflow-hidden md:leading-14">
					<motion.h2
						variants={maskAnimation}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						custom={i}
						className={cn("will-change-transform", {
							"indent-[35vw]": i === 0,
						})}
					>
						{line}
					</motion.h2>
				</div>
			))}
		</div>
	)
}

const heading = [
	"A Stockholm based",
	"creative studio, shaping the visual",
	"identity of the music industry and",
	"visionary brands through bold design.",
]
