// lib/ga.ts
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export function gtagConsentDefaultDenied() {
	if (!GA_ID) return
	if (typeof window === "undefined" || !window.gtag) return

	window.gtag("consent", "default", {
		ad_storage: "denied",
		analytics_storage: "denied",
		ad_user_data: "denied",
		ad_personalization: "denied",
		// recommended to give your banner time to update consent before tags fully act
		wait_for_update: 500,
	})
}

export function gtagConsentGrantAnalytics() {
	if (!GA_ID) return
	if (typeof window === "undefined" || !window.gtag) return

	window.gtag("consent", "update", {
		analytics_storage: "granted",
		// keep ads denied unless you explicitly ask for ads consent
		ad_storage: "denied",
		ad_user_data: "denied",
		ad_personalization: "denied",
	})
}

export function gtagConsentDenyAll() {
	if (!GA_ID) return
	if (typeof window === "undefined" || !window.gtag) return

	window.gtag("consent", "update", {
		analytics_storage: "denied",
		ad_storage: "denied",
		ad_user_data: "denied",
		ad_personalization: "denied",
	})
}

export function gtagPageview(url: string) {
	if (!GA_ID) return
	if (typeof window === "undefined" || !window.gtag) return

	window.gtag("event", "page_view", {
		page_path: url,
	})
}