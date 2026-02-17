import type { Metadata } from "next"
import "./globals.css"
import { inter } from "@/lib/fonts"
import { MinHeader } from "@/components/header/min-header"

export const metadata: Metadata = {
	title: "Ferra Studio",
	description: "Ferra Studio",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} antialiased`}
			>
				<MinHeader />
				{children}
			</body>
		</html>
	)
}
