"use client"

import { useScroll, useMotionValueEvent, motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import logo from "@/public/images/logo.png"
import NavLink from "@/components/navlink"
import Link from "next/link"

export default function StickyHeader() {
	const { scrollY } = useScroll()
	const [hidden, setHidden] = useState(false)

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious() ?? 0
		const threshold = typeof window !== "undefined" ? window.innerHeight : 0

		if (latest > threshold) {
			if (latest > (previous ?? 0)) {
				setHidden(true)
			} else {
				setHidden(false)
			}
		} else {
			setHidden(false)
		}
	})

	return (
		<motion.header
			variants={{
				visible: { y: 0, opacity: 1 },
				hidden: { y: 100, opacity: 0 },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.3, ease: "easeOut" }}
			className="bg-black/70 fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] -translate-x-1/2 rounded-lg border border-white/5 text-white shadow-md backdrop-blur-md md:w-fit"
		>
			<nav className="flex items-center gap-4 px-6 py-3">
				<Link href="/" className="flex shrink-0 items-center">
					<Image
						src={logo}
						alt="Logo"
						width={32}
						height={32}
						className="h-8 w-auto"
					/>
				</Link>

				<div className="h-6 w-px bg-white/20" aria-hidden="true" />

				<ul className="flex flex-1 items-center justify-around text-xs font-semibold tracking-wider uppercase md:gap-8 md:text-sm">
					<li>
						<NavLink href="/work">work</NavLink>
					</li>
					<li>
						<NavLink href="/studio">studio</NavLink>
					</li>
					<li>
						<NavLink href="mailto:hello@ferrastudio.com" isExternal>
							contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</motion.header>
	)
}
