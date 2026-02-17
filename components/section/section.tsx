import { subheadingMask } from "@/lib/animations"
import { motion, useInView, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

const subheading = [
	"Social platforms limit your reach. A",
	"dedicated website ensures you own the",
	"connection, the data, and the revenue.",
]

export default function Section() {
	const containerRef = useRef<HTMLDivElement>(null)
	const subheadingRef = useRef<HTMLDivElement>(null)

	const isInView = useInView(subheadingRef, {
		once: false,
	})

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	})

	const video = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

	return (
		<div
			ref={containerRef}
			className="relative grid h-[120vh] grid-cols-12 grid-rows-12"
		>
			<div className="text-red-secondary z-10 col-start-1 leading-[60px] text-[60px] row-span-4 row-start-2 md:row-start-4 flex h-full col-span-12 flex-col justify-center gap-1 p-4 md:text-[120px] md:leading-[100px] font-semibold tracking-tighter uppercase">
				<h2>own</h2>
				<h2>your</h2>
				<h2>audience</h2>
			</div>
			<div
				ref={subheadingRef}
				className="text-red-secondary p-4 z-10 md:col-span-5 col-span-12 md:col-start-8 row-span-2 row-start-7 md:row-start-9 text-lg md:text-2xl leading-8 font-medium"
			>
				{subheading.map((line, i) => (
					<div key={i} className="overflow-hidden">
						<motion.h3
							variants={subheadingMask}
							initial="initial"
							animate={isInView ? "animate" : "initial"}
							custom={i}
							viewport={{ margin: "-100px" }}
							className="leading-tight"
						>
							{line}
						</motion.h3>
					</div>
				))}
			</div>
			<div className="absolute inset-0 overflow-hidden">
				<motion.video
					src="/videos/leon-concert-3.mp4"
					style={{ y: video }}
					autoPlay
					muted
					loop
					playsInline
					className="size-full scale-125 object-cover grayscale"
				/>
			</div>
		</div>
	)
}
