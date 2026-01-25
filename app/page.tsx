/* eslint-disable */

"use client"

import { sentient, leaguegothic } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Lenis from "lenis"
import { useEffect } from "react"

const subheading = [
	"We design and build thoughtful digital",
	"experiences for brands and businesses.",
]

export default function Home() {
	useEffect(() => {
		const lenis = new Lenis()
		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	}, [])

	return (
		<div className="h-[100vh] bg-gray-background">
			<div className="bg-gray-background relative grid h-screen w-full grid-cols-4 grid-rows-[auto_min-content] gap-y-8 overflow-hidden">
				{/* column lines */}
				<div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-4">
					<div className="border-r border-white/10" />
					<div className="border-r border-white/10" />
					<div className="border-r border-white/10" />
				</div>

				{/* content */}
				<div className="relative z-10 col-span-2 col-start-3 self-end pl-4">
					{subheading.map((line, index) => {
						const highlight = "design and build"
						const idx = line.indexOf(highlight)

						return (
							<div key={index}>
								<h2 className="text-2xl font-medium">
									{idx === -1 ? (
										line
									) : (
										<>
											{line.slice(0, idx)}
											<span className="text-white/60">
												{highlight}
											</span>
											{line.slice(idx + highlight.length)}
										</>
									)}
								</h2>
							</div>
						)
					})}
				</div>

				<div className="relative col-span-4 self-end">
					<h1
						className={cn(
							"text-center text-[25.5vw] leading-[80%] whitespace-nowrap uppercase",
							leaguegothic.className,
						)}
					>
						ferra studio
					</h1>
				</div>
			</div>
		</div>
	)
}
