import type { Metadata } from "next"
import "./globals.css"
import { inter } from "@/lib/fonts"
import { MinHeader } from "@/components/header/min-header"

export const metadata: Metadata = {
	metadataBase: new URL("https://ferrastudio.com"),
	title: "Ferra Studio | Creative Studio in Stockholm",
	description: "Ferra Studio is a Stockholm-based creative studio shaping the visual identity of the music industry and visionary brands through bold design and digital experiences.",
	alternates: {
    	canonical: "/",
  	},
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
