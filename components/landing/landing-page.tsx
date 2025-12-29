"use client"

import React, { useEffect, useState } from "react"
import { murmure } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"

const letters = "ferra studio".split("")

export default function LandingPage() {
	const [gray, setGray] = useState(false)

	const baseDuration = 1.2
	const lastDelay = 0.05 * (letters.length - 1)
	const totalDuration = (baseDuration + lastDelay) * 1000

	useEffect(() => {
		const t = setTimeout(() => setGray(true), totalDuration)
		return () => clearTimeout(t)
	}, [totalDuration])

	const slideIn = {
		initial: (i: number) => ({
			x: letters[i] === "i" ? "200%" : "100%",
		}),
		animate: (i: number) => ({
			x: 0,
			transition: {
				duration: baseDuration,
				delay: 0.05 * i,
				ease: [0.16, 1, 0.3, 1],
			},
		}),
	}

	return (
		<div
			className={cn(
				"flex h-screen w-screen items-center justify-center text-[20vw] uppercase transition-colors duration-500",
				gray ? "bg-gray-background" : "bg-red-primary",
				murmure.className,
			)}
		>
			{letters.map((letter, i) => {
				return (
					<div
						key={i}
						className={cn("overflow-hidden text-black", {
							"text-white": gray,
						})}
					>
						<motion.div
							className="will-change-transform"
							initial="initial"
							animate="animate"
							custom={i}
							variants={slideIn as any}
						>
							{letter === " " ? "\u00A0" : letter}
						</motion.div>
					</div>
				)
			})}
		</div>
	)
}
