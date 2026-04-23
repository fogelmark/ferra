import { subheadingMask } from "@/lib/animations"
import { motion, useInView, useScroll, useTransform, type Variants } from "motion/react"
import { useRef } from "react"

const subheading = [
	"Social platforms limit your reach. A",
	"dedicated website ensures you own the",
	"connection, the data, and the revenue.",
]

const curtain: Variants = {
  initial: {
    clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)",
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    transition: {
      duration: 1.5,
      ease: [0.32, 0.72, 0, 1],
      delay: 1.8,
    },
  },
}

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
			className="relative w-full bg-ash-gray py-20 flex flex-col justify-center max-sm:gap-10 h-screen md:grid md:h-[120vh] grid-cols-12 grid-rows-12"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1, delay: 3 }}
				className="text-red-secondary max-sm:text-center z-10 col-start-1 leading-15 text-[60px] row-span-4 row-start-2 md:row-start-4 flex col-span-12 flex-col justify-center gap-1 p-4 md:text-[120px] md:leading-25 font-semibold tracking-tighter uppercase"
			>
				<h2>own</h2>
				<h2>your</h2>
				<h2>audience</h2>
			</motion.div>
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
							className="leading-tight will-change-transform"
						>
							{line}
						</motion.h3>
					</div>
				))}
			</div>
			<motion.div
				className="absolute inset-0 overflow-hidden"
				initial="initial"
				animate="animate"
				variants={curtain}
			>
				<motion.video
					src="/videos/leon-concert-3.mp4"
					style={{ y: video }}
					autoPlay
					muted
					loop
					playsInline
					className="size-full will-change-transform scale-125 object-cover grayscale"
				/>
			</motion.div>
		</div>
	)
}
