import { motion, useInView, Variants } from "motion/react"
import { cn } from "@/lib/utils"
import { useRef } from "react"
import { subheadingMask } from "@/lib/animations"

export default function Intro() {

	const ref = useRef<HTMLDivElement>(null)
	const isInView = useInView(ref, {
		once: false,
		amount: 0.5,
	})

	const mainheadingMask: Variants = {
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

	// [0.86, 0, 0.07, 1] // för images

	return (
		<section className="grid h-[150vh] grid-cols-12 grid-rows-12 px-12">
			<div ref={ref} className="col-span-4 col-start-1 row-start-4">
				{subheading.map((line, i) => (
					<div className="overflow-hidden" key={i}>
						<motion.p
							variants={subheadingMask}
							initial="initial"
							whileInView="animate"
							custom={i}
							viewport={{ margin: "-100px" }}
							className="text-lg leading-tight will-change-transform"
						>
							{line}
						</motion.p>
					</div>
				))}
			</div>
			<div ref={ref} className="col-span-12 col-start-1 row-start-7 row-span-5 text-7xl">
				{heading.map((line, i) => (
					<div key={i} className="min-h-[1em] leading-14 overflow-hidden">
						<motion.h2
							variants={mainheadingMask}
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
		</section>
	)
}

const heading = [
	"A Stockholm based",
	"creative studio, shaping the visual",
	"identity of the music industry and",
	"visionary brands through bold design.",
]

const subheading = [
	"Specializing in brand identity, motion design, and",
	"websites. We craft high-end digital touchpoints for",
	"those who value precision, aesthetics, and",
	"seamless user experiences across all platforms.",
]
