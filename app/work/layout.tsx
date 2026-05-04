import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Ferra Studio | Work",
	description:
		"Selected branding and digital design projects by Ferra Studio.",
	alternates: {
		canonical: "/work",
	},
	openGraph: {
		title: "Ferra Studio | Work",
		description:
			"Selected branding and digital design projects by Ferra Studio.",
		url: "/work",
		images: ["/images/og-image.jpg"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Ferra Studio | Work",
		description:
			"Selected branding and digital design projects by Ferra Studio.",
		images: ["/images/og-image.jpg"],
	},
}

export default function WorkLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return children
}
