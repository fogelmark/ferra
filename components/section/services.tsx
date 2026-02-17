/* eslint-disable */

"use client"

import { useScroll, motion } from "motion/react"
import type { Variants } from "motion/react"
import React, { useRef } from "react"

interface ServiceItem {
	id: string
	title: string
	description: string
	gridSpan: string
}

const SERVICES_DATA: ServiceItem[] = [
	{
		id: "01",
		title: "Web Design & Development",
		description:
			"We curate immersive digital environments where motion meets functionality. Every interaction is intentionally choreographed to elevate your brand’s narrative.",
		gridSpan: "col-span-12 md:col-span-7",
	},
	{
		id: "02",
		title: "Brand Identity",
		description:
			"Identity is the soul of your business. We translate your core values into a visual language that commands attention and builds lasting loyalty.",
		gridSpan: "col-span-12 md:col-span-5",
	},
	{
		id: "03",
		title: "SEO Strategy",
		description:
			"Presence is nothing without findability. We implement sophisticated search strategies that align your content with the specific intent of your highest-value customers.",
		gridSpan: "col-span-12 md:col-span-6",
	},
	{
		id: "04",
		title: "Maintenance & Hosting",
		description:
			"Performance is a standard, not an option. Our architectural hosting ensures your platform remains a seamless, high-speed sanctuary for your audience.",
		gridSpan: "col-span-12 md:col-span-6",
	},
]

// Animation Variants
const maskAnimation: Variants = {
	initial: { y: "100%" },
	enter: (i: number) => ({
		y: "0%",
		transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
	}),
}

// [0.86, 0, 0.07, 1] // för images

const cardAnimation: Variants = {
	initial: { opacity: 0, y: 20 },
	enter: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: 0.5 + i * 0.1, duration: 0.5 },
	}),
}

export default function Services() {
	const container = useRef<HTMLDivElement>(null)

	return (
		<section ref={container} className="bg-bone-white px-8 py-24 md:px-48">
			{/* Header Section with Overflow Masks */}
			<div className="text-ash-gray mx-auto mb-16 flex w-full flex-col gap-4 text-center md:w-[80%]">
				<div className="overflow-hidden">
					<motion.h1
						variants={maskAnimation}
						initial="initial"
						whileInView="enter"
						viewport={{ margin: "-50px" }} // Trigger slightly before fully in view
						className="text-5xl font-medium"
					>
						Form Meets Function.
					</motion.h1>
				</div>

				<div className="overflow-hidden">
					<motion.p
						variants={maskAnimation}
						initial="initial"
						whileInView="enter"
						viewport={{ margin: "-50px" }} // Trigger slightly before fully in view
						transition={{ delay: 0.1 }} // Slight delay after the title
						className="text-3xl"
					>
						We combine intentional design with modern technology to
						elevate your digital presence.
					</motion.p>
				</div>
			</div>

			{/* Grid Mapping */}
			<div className="grid grid-cols-12 gap-4">
				{SERVICES_DATA.map((service, i) => (
					<motion.div
						key={service.id}
						custom={i}
						variants={cardAnimation}
						initial="initial"
						whileInView="enter"
						viewport={{ once: true }}
						className={`text-ash-gray relative flex flex-col justify-center gap-2 rounded-lg bg-[#f5f4f280] px-6 py-8 ${service.gridSpan}`}
					>
						<p className="text-md absolute top-3 right-5 font-medium opacity-30">
							{service.id}
						</p>
						<h3 className="text-xl font-semibold">
							{service.title}
						</h3>
						<p className="text-balance">{service.description}</p>
					</motion.div>
				))}
			</div>
		</section>
	)
}
