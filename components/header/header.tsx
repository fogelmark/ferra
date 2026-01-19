import { leaguegothic, sentient } from "@/lib/fonts"
import { cn } from "@/lib/utils"

const navItems = [
	{ label: "projects", href: "#" },
	{ label: "team", href: "#" },
	{ label: "contact", href: "#" },
]

export default function Header() {
	return (
		<header className="fixed top-4 right-0 left-0 z-10 mx-auto w-[80%] rounded-sm bg-white px-8 py-2">
			<nav className="relative flex items-center justify-between">
				<div
					className={cn(
						"text-2xl text-black uppercase",
						leaguegothic.className,
					)}
				>
					Ferra Studio
				</div>
				<ul
					className={cn(
						"flex items-center justify-center gap-4 text-sm text-black capitalize",
						sentient.className,
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
