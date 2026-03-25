"use client"

import { motion, useAnimationControls } from "framer-motion"
import { ReactNode } from "react"
import Link from "next/link"

interface NavLinkProps {
	href: string
	children: ReactNode
	isExternal?: boolean
}

export default function NavLink({ href, children, isExternal }: NavLinkProps) {
	const controls = useAnimationControls()

	const handleHoverStart = async () => {
		await controls.start({
			y: "-100%",
			transition: { duration: 0.4, ease: [0.6, 0.01, -0.05, 0.95] },
		})

		controls.set({ y: "0%" })
	}

	const content = (
		<motion.div
			animate={controls}
			initial={{ y: "0%" }}
			className="relative flex flex-col"
		>
			<span className="block h-full text-white">{children}</span>
			<span className="absolute top-full block h-full text-white">
				{children}
			</span>
		</motion.div>
	)

	const className = "relative block overflow-hidden"

	if (isExternal) {
		return (
			<a
				href={href}
				onMouseEnter={handleHoverStart}
				className={className}
			>
				{content}
			</a>
		)
	}

	return (
		<Link href={href} onMouseEnter={handleHoverStart} className={className}>
			{content}
		</Link>
	)
}
