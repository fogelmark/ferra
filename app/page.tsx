"use client"

import Lenis from "lenis"
import { useEffect } from "react"
import Footer from "@/components/footer/footer"
import Intro from "@/components/intro/intro"
import Section from "@/components/section/section"
import Hero from "@/components/hero"
import StickyService from "@/components/section/sticky-services"
import Services from "@/components/section/services"

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
			{/* <Services /> */}
			<StickyService />
			{/* <div className="h-screen bg-blue-200"></div> */}
			<Footer />
		</div>
	)
}
