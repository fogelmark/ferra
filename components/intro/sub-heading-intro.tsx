import * as motion from "motion/react-client"
import { useRef } from "react"
import { useInView, Variants } from "motion/react"

export default function SubHeadingIntro() {
	const ref = useRef<HTMLDivElement>(null)

	const isInView = useInView(ref, {
		once: true,
	})

	const maskAnimation: Variants = {
		initial: { y: "100%", opacity: 0 },
		animate: (i: number) => ({
			y: "0%",
			opacity: 1,
			transition: {
				delay: 0.08 * i,
				duration: 0.8,
				ease: [0, 0, 0.2, 1],
			},
		}),
	}

	return (
		<div
			ref={ref}
			className="col-span-4 col-start-1 row-span-2 row-start-4"
		>
			{subheading.map((line, i) => (
				<div className="min-h-[1em] overflow-hidden" key={i}>
					<motion.p
						variants={maskAnimation}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						custom={i}
						className="text-lg will-change-transform"
					>
						{line}
					</motion.p>
				</div>
			))}
		</div>
	)
}

const subheading = [
	"Specializing in brand identity, motion design, and",
	"websites. We craft high-end digital touchpoints for",
	"those who value precision, aesthetics, and",
	"seamless user experiences across all platforms.",
]
