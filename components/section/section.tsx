import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export default function Section() {
	const containerRef = useRef<HTMLDivElement>(null)

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
			<div className="text-red-secondary z-10 p-4 col-start-1 row-span-4 row-start-4 flex h-full flex-col justify-center gap-1">
				<h2 className="text-[120px] leading-[100px] font-semibold tracking-tighter uppercase">
					own
				</h2>
				<h2 className="text-[120px] leading-[100px] font-semibold tracking-tighter uppercase">
					your
				</h2>
				<h2 className="text-[120px] leading-[100px] font-semibold tracking-tighter uppercase">
					audience
				</h2>
			</div>
			<div className="text-red-secondary col-start-8 row-start-9 col-span-4 leading-8 z-10 font-medium text-2xl">
				<h3 className="leading-tight">
					Social platforms limit your reach. A dedicated website
					ensures you own the connection, the data, and the revenue.
				</h3>
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
