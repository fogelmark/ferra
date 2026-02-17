import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header/header"
import { inter } from "@/lib/fonts"

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
				{/* <Header /> */}
				{children}
			</body>
		</html>
	)
}
