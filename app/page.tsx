/* eslint-disable */

import { sentient } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function Home() {
	return (
		<div className="relative flex h-screen w-full items-center justify-center bg-[url(/images/water.jpg)] bg-cover bg-center">
			<div className="absolute inset-0 bg-linear-to-b from-transparent to-black/30" />
			<div className={cn("z-10 flex flex-col items-center gap-10")}>
				<h1 className={cn("text-7xl", sentient.className)}>
					Elevate your digital presence
				</h1>
				<h2 className={cn("text-2xl", sentient.className)}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</h2>
			</div>
		</div>
	)
}
