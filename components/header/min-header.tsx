"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { ButtonFlip } from "../buttons/button-flip"
import ButtonCtaHeader from "../buttons/button-cta-header"

export const drawerVariants = {
	open: {
		opacity: 1,
		transition: {
			duration: 0.15,
		},
	},
	closed: {
		opacity: 0,
		transition: {
			duration: 0.15,
		},
	},
}

const menuItems = [
	{ text: "listen", href: "" },
	{ text: "watch", href: "" },
	{ text: "shop" },
	{ text: "tour" },
	{ text: "news" },
]

const socialLinks = [
	{
		href: "https://music.apple.com/se/artist/l%C3%A9on/1065692205?l=en-GB",
		label: "Open Apple Music (opens in a new tab)",
	},
	{
		href: "https://www.instagram.com/leon/",
		label: "Open Instagram (opens in a new tab)",
	},
	{
		href: "https://open.spotify.com/artist/4SqTiwOEdYrNayaGMkc7ia?si=U1ig4JftQm-kCDbByBkTCA",
		label: "Open Spotify (opens in a new tab)",
	},
	{
		href: "https://www.youtube.com/@itsleonmusic",
		label: "Open YouTube (opens in a new tab)",
	},
]

export function MinHeader() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
		<header
			className={cn(
				"fixed z-30 w-full flex justify-between px-4 py-4 text-sm uppercase md:px-10 md:py-12",
				{
					"text-ash-gray": isOpen,
					"mix-blend-difference": !isOpen
					
				},
			)}
		>
			<motion.div
				className={cn(
					"relative z-40 flex w-fit items-center gap-4 max-sm:block",
				)}
			>
				<div
					aria-label={isOpen ? "Close menu" : "Open menu"}
					aria-expanded={isOpen}
					onClick={() => setIsOpen((v) => !v)}
					className="focus-visible:border-leon-yellow flex cursor-pointer items-center gap-2 focus:outline-none"
				>
					<div className="relative flex h-8 w-8 cursor-pointer items-center justify-center">
						<motion.span
							className="absolute top-1/2 left-1/2 h-px w-[30px] -translate-x-1/2 bg-current"
							animate={
								isOpen
									? { rotate: 45, y: 0 }
									: { rotate: 0, y: -4 }
							}
							transition={{ duration: 0.15 }}
						/>
						<motion.span
							className="absolute top-1/2 left-1/2 h-px w-[30px] -translate-x-1/2 bg-current"
							animate={
								isOpen
									? { rotate: -45, y: 0 }
									: { rotate: 0, y: 4 }
							}
							transition={{ duration: 0.15 }}
						/>
					</div>
					<p className="text-base">{isOpen ? "close" : "menu"}</p>
				</div>
			</motion.div>
			<motion.aside
				role="presentation"
				onClick={(e) => e.stopPropagation()}
				animate={isOpen ? "open" : "closed"}
				variants={drawerVariants}
				initial="closed"
				className={cn(
					"bg-bone-white text-secondary-gray text-ash-gray border-ash-gray/50 fixed top-0 left-0 z-20 flex h-full w-full flex-col items-start justify-center gap-8 border-r px-4 capitalize md:w-[30%] md:px-10",
					{ hidden: !isOpen },
				)}
			>
				<ul className={cn("flex h-2/3 flex-col justify-center gap-4")}>
					{menuItems.map((item, index) => (
						<motion.li key={index}>
							<ButtonFlip
								className="text-5xl md:text-6xl"
								href={item.href}
							>
								{item.text}
							</ButtonFlip>
						</motion.li>
					))}
				</ul>

				<div className="flex items-start justify-center gap-4">
					{socialLinks.map(({ href, label }) => (
						<a
							key={href}
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={label}
							className="focus-visible:border-leon-yellow border-b-2 border-transparent px-1 pt-0 pb-1.5 text-current focus:outline-none focus-visible:border-b-2"
						></a>
					))}
				</div>
			</motion.aside>
		</header>
		<div className="ms-auto fixed z-30 flex justify-end px-4 py-4 text-sm uppercase md:px-10 md:py-12 right-0">      		
			<ButtonCtaHeader />
		</div>
		</>
	)
}
