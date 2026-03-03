import "./globals.css"
import { GA_ID, gtagConsentDefault, gtagInit } from "@/lib/google-analytics"
import { inter } from "@/lib/fonts"
import { MinHeader } from "@/components/header/min-header"
import { organizationSchema } from "@/lib/structured-data"
import CookieConsent from "@/components/modals/cookie-consent"
import Preloader from "@/components/preloader/preloader"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
	metadataBase: new URL("https://ferrastudio.com"),
	title: "Ferra Studio | Creative Studio in Stockholm",
	description:
		"Ferra Studio is a Stockholm-based creative studio specializing in visual identity, branding and digital design for the music industry and visionary brands.",
	keywords: [
		"creative studio Stockholm",
		"branding agency Sweden",
		"music industry design",
		"visual identity studio",
		"digital design agency",
	],
	authors: [{ name: "Ferra Studio", url: "https://ferrastudio.com" }],
	creator: "Ferra Studio",
	publisher: "Ferra Studio",
	category: "Design Agency",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		siteName: "Ferra Studio",
		url: "https://ferrastudio.com",
		description:
			"Creative studio in Stockholm shaping bold brand identities.",
		images: [
			{
				url: "/images/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Ferra Studio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		description:
			"Creative studio in Stockholm shaping bold brand identities.",
		images: ["/images/og-image.jpg"],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				<Script id="gtag-consent-default" strategy="beforeInteractive">
					{gtagConsentDefault}
				</Script>
				{!!GA_ID && (
					<>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
							strategy="afterInteractive"
						/>
						<Script id="gtag-init" strategy="afterInteractive">
							{gtagInit(GA_ID)}
						</Script>
					</>
				)}
				<script
					id="organization-schema"
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
				<CookieConsent />
				<MinHeader />
				<Preloader />
				{children}
			</body>
		</html>
	)
}
