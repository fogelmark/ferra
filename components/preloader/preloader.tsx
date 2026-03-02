"use client"

import { cn } from "@/lib/utils"
import { leaguegothic } from "@/lib/fonts"
import { motion } from "motion/react"
import Image from "next/image"
import logo from "@/public/images/logo.png"

export default function PreloaderAlt() {
	return (
		<motion.div
			initial={{ y: 0 }}
			animate={{
				y: "-100%",
				transition: {
					delay: 1.4,
					duration: 0.8,
					ease: [0.645, 0.045, 0.355, 1.0],
				},
			}}
			className="bg-ash-gray fixed inset-0 z-999 flex h-screen w-screen origin-center items-center justify-center gap-4"
		>
			<div className="shrink-0">
				<Image
					src={logo.src}
					alt="Ferra Studio Logo"
					width={64}
					height={64}
				/>
			</div>

			<motion.div
				className="overflow-hidden whitespace-nowrap"
				initial={{ width: 0, opacity: 0 }}
				animate={{
					width: "auto",
					opacity: 1,
					transition: {
						delay: 0.2,
						duration: 0.6,
						ease: [0.65, 0, 0.35, 1],
					},
				}}
			>
				<motion.h1
					initial={{ x: "100%" }}
					animate={{
						x: 0,
						transition: {
							delay: 0,
							duration: 0.5,
							ease: [0.33, 1, 0.68, 1],
						},
					}}
					className={cn(
						"text-bone-white pb-1 text-7xl leading-none font-medium uppercase",
						leaguegothic.className,
					)}
				>
					ferra studio
				</motion.h1>
			</motion.div>
		</motion.div>
	)
}
