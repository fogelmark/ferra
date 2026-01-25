import { inter, leaguegothic, sentient } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import ButtonCtaHeader from "../buttons/button-cta-header"

const navItems = [
	{ label: "projects", href: "#" },
	{ label: "team", href: "#" },
	{ label: "contact", href: "#" },
]

export default function Header() {
	return (
		<header className="fixed top-4 right-0 left-0 z-10 mx-auto w-[80%] rounded-sm bg-white px-1 py-1">
			<nav className="relative grid grid-cols-[20%_1fr_20%] items-center gap-4">
				<div>
				<ButtonCtaHeader />
				</div>
				<div
					className={cn(
						"text-2xl text-black justify-self-center uppercase",
						leaguegothic.className,
					)}
				>
					Ferra Studio
				</div>
				<ul
					className={cn(
						"flex items-center justify-center gap-4 text-black capitalize font-medium",
					)}
				>
					{navItems.map((item, index) => (
						<li key={index}>{item.label}</li>
					))}
				</ul>
			</nav>
		</header>
	)
}
