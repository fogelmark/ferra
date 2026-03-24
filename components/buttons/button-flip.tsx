import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { useState } from "react"
import Link from "next/link"

interface ButtonProps {
	children: string
	className?: string
	href?: string
	onClick?: () => void
}

export const ButtonFlip = ({ children, className, href, onClick }: ButtonProps) => {
	const [hoverCount, setHoverCount] = useState(0)
	const [animating, setAnimating] = useState(false)

	const handleHover = () => {
		if (animating) return
		setAnimating(true)
		setHoverCount((prev) => prev + 1)

		setTimeout(() => {
			setAnimating(false)
		}, 300)
	}

	const wrapper = cn(
		"relative flex w-fit cursor-pointer items-center justify-center text-2xl font-semibold uppercase overflow-hidden border-b-2 border-transparent focus:outline-none focus-visible:border-b-2 focus-visible:border-leon-yellow",
		className,
	)

	const inner = (
		<span className="relative block h-[1em] leading-none">
			<motion.span
				key={hoverCount + "-white"}
				className="text-secondary-gray relative inline-block"
				initial={{ y: 0 }}
				animate={{ y: "-100%" }}
				transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
			>
				{children}
			</motion.span>

			<motion.span
				key={hoverCount + "-red"}
				className="text-tertiary-gray absolute top-0 left-0"
				initial={{ y: "100%" }}
				animate={{ y: 0 }}
				transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
			>
				{children}
			</motion.span>
		</span>
	)

	return href ? (
		<Link
			className={wrapper}
			href={href}
			onMouseEnter={handleHover}
			onClick={onClick}
		>
			{inner}
		</Link>
	) : (
		<div className="relative w-fit">
			<span
				className={wrapper}
				role="button"
				tabIndex={0}
				onMouseEnter={handleHover}
			>
				{inner}
			</span>
			<span className="text-secondary-gray/70 pointer-events-none absolute top-0 -right-22 text-[10px] font-medium uppercase">
				coming soon
			</span>
		</div>
	)
}
