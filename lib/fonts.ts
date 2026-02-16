import localFont from "next/font/local"
import { Inter } from "next/font/google"

export const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
})

export const leaguegothic = localFont({
	src: [
		{
			path: "../public/fonts/LeagueGothic-Regular.woff2",
			weight: "400",
			style: "normal",
		},
	],
})

export const sentient = localFont({
	src: [
		{
			path: "../public/fonts/Sentient-Regular.woff2",
			weight: "400",
			style: "normal",
		},
	],
})
