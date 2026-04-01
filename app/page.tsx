"use client"

import { useEffect, useState } from "react"
import Preloader from "@/components/preloader/preloader"
import Hero from "@/components/hero"
import Intro from "@/components/intro/intro"
import Lenis from "lenis"
import Section from "@/components/section/section"
import StickyService from "@/components/section/sticky-services"
import { usePreloader } from "@/context/preloader-context"
export default function Home() {
	const { hasPlayed, setHasPlayed } = usePreloader()
	const [showPreloader, setShowPreloader] = useState(!hasPlayed)

	useEffect(() => {
		if (!hasPlayed) {
			const timer = setTimeout(() => {
				setShowPreloader(false)
				setHasPlayed(true)
			}, 2200)

			return () => clearTimeout(timer)
		}
	}, [hasPlayed, setHasPlayed])

	useEffect(() => {
		const lenis = new Lenis()

		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		window.scrollTo(0, 0)
		requestAnimationFrame(raf)
	}, [])

	return (
		<div className="bg-[#f5f4f2]">
			{showPreloader && <Preloader />}
			<Hero animateText={showPreloader} />
			<Section />
			<Intro />
			<StickyService />
		</div>
	)
}
