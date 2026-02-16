/* eslint-disable */

"use client"

import Lenis from "lenis"
import { useEffect } from "react"
import Footer from "@/components/footer/footer"
import Intro from "@/components/intro/intro"
import Section from "@/components/section/section"
import Services from "@/components/section/services"
import Hero from "@/components/hero"

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
		<div className="bg-ash-gray">
			<Hero />
			<Intro />
			<Section />
			<Services />
			<Footer />
		</div>
	)
}
