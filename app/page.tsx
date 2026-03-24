"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import Intro from "@/components/intro/intro"
import Lenis from "lenis"
import Section from "@/components/section/section"
import StickyService from "@/components/section/sticky-services"

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
		<div className="bg-[#f5f4f2]">
			<Hero />
			<Intro />
			<Section />
			<StickyService />
		</div>
	)
}
