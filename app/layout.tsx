import "./globals.css"
import { GA_ID } from "@/lib/google-analytics"
import { inter } from "@/lib/fonts"
import { MinHeader } from "@/components/header/min-header"
import CookieConsent from "@/components/modals/cookie-consent"
import Preloader from "@/components/preloader/preloader"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
	metadataBase: new URL("https://ferrastudio.com"),
	title: "Ferra Studio | Creative Studio in Stockholm",
	description:
		"Ferra Studio is a Stockholm-based creative studio shaping the visual identity of the music industry and visionary brands through bold design and digital experiences.",
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
			<body className={`${inter.className} antialiased`}>
				<Script id="gtag-consent-default" strategy="beforeInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						window.gtag = gtag;

						gtag('consent', 'default', {
							analytics_storage: 'denied',
							wait_for_update: 500
						});
					`}
				</Script>
				{GA_ID ? (
					<>
						<Script
							src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
							strategy="afterInteractive"
						/>
						<Script id="gtag-init" strategy="afterInteractive">
							{`
								gtag('js', new Date());
								gtag('config', '${GA_ID}', { send_page_view: false });
							`}
						</Script>
					</>
				) : null}
				<CookieConsent />
				<MinHeader />
				<Preloader />
				{children}
			</body>
		</html>
	)
}
