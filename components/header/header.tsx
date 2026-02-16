import { inter, leaguegothic, sentient } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import ButtonCtaHeader from "../buttons/button-cta-header"
import logo from "@/public/images/logo.png"
import Image from "next/image"

const navItems = [
	{ label: "projects", href: "#" },
	{ label: "team", href: "#" },
	{ label: "contact", href: "#" },
]

export default function Header() {
	return (
		// <header className="fixed top-0 right-0 left-0 z-10 mx-auto w-full bg-gray-background border-b border-white/5 px-0.5 py-0.5">
		// <header className="fixed top-0 right-0 left-0 z-10 mx-auto mt-[45px] w-full text-white mix-blend-difference px-0.5 py-2">
		<header className="fixed top-0 right-0 left-0 z-10 mx-auto mt-[45px] w-full text-white px-0.5 py-2">
			{/* <nav className="relative grid grid-cols-[20%_1fr_20%] items-center gap-4"> */}
			<nav className="relative grid grid-cols-12 items-center gap-4">
				{/* <div
					className={cn(
						"justify-self-center text-3xl text-white uppercase",
						leaguegothic.className,
					)}
				>
					Ferra Studio
				</div> */}
				<ul
					className={cn(
						"flex items-center justify-center col-start-5 col-span-4 gap-8 text-xs font-medium uppercase",
						inter.className,
					)}
				>
					{navItems.map((item, index) => (
						<li key={index}>{item.label}</li>
					))}
				</ul>

				<div className="px-6 col-start-11 col-span-2 justify-self-end">
					<ButtonCtaHeader />
				</div>
			</nav>
		</header>
	)
}
