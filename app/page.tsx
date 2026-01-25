/* eslint-disable */

import { sentient, leaguegothic, inter } from "@/lib/fonts"
import { cn } from "@/lib/utils"

const subheading = [
	"We design and build thoughtful digital",
	"experiences for brands and businesses.",
]

export default function Home() {
	return (
		<div className="h-[200vh] bg-red-500">
			<div className="bg-gray-background relative grid h-screen w-full grid-cols-2 grid-rows-[auto_min-content] gap-y-8 overflow-hidden">
				<div className="col-start-2 self-end">
					{subheading.map((line, index) => {
						const highlight = "design and build"
						const idx = line.indexOf(highlight)

						return (
							<div
								key={index}
								className={cn(
									"",
									inter.className,
								)}
							>
								<h2 className={cn("text-2xl font-medium")}>
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
				<div className="col-span-2 self-end">
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
