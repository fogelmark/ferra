"use client"

import { useEffect, useMemo, useState, useSyncExternalStore } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import ButtonConsent from "../buttons/button-consent"
import {
	gtagConsentDenyAll,
	gtagConsentGrantAnalytics,
	gtagPageview,
} from "@/lib/google-analytics"

type ConsentChoice = "unknown" | "accepted_analytics" | "rejected"
const STORAGE_KEY = "cookie_consent"

const readConsent = (): ConsentChoice => {
	if (typeof window === "undefined") return "unknown"
	const saved = localStorage.getItem(STORAGE_KEY)
	return saved === "accepted_analytics" || saved === "rejected" ? saved : "unknown"
}

export default function CookieConsent() {
    const isClient = useSyncExternalStore(
        () => () => {},   // no subscription needed
        () => true,       // client snapshot
        () => false       // server snapshot
    );
	const [choice, setChoice] = useState<ConsentChoice>(() => readConsent())

	const pathname = usePathname()
	const searchParams = useSearchParams()

	const url = useMemo(() => {
		const qs = searchParams?.toString()
		return qs ? `${pathname}?${qs}` : pathname
	}, [pathname, searchParams])

	// Apply consent + track page views when allowed
	useEffect(() => {
		if (choice === "accepted_analytics") {
			gtagConsentGrantAnalytics()
			gtagPageview(url)
			return
		}

		if (choice === "rejected") {
			gtagConsentDenyAll()
		}
		// if unknown: keep default denied from layout
	}, [choice, url])

	const accept = () => {
		localStorage.setItem(STORAGE_KEY, "accepted_analytics")
		setChoice("accepted_analytics")
	}

	const deny = () => {
		localStorage.setItem(STORAGE_KEY, "rejected")
		setChoice("rejected")
	}

	// If you want to debug, use an effect to avoid noisy logs on every render:
	// useEffect(() => console.log("CHOICE?:", choice), [choice])

    console.log("CHOICE?: ", choice)
    if (!isClient) return null;
	if (choice !== "unknown") return null;

	return (
		<div className="bg-ash-gray/80 fixed inset-0 z-50 flex items-end justify-end">
			<div className="bg-bone-white text-ash-gray relative w-full max-w-md rounded-2xl p-5 me-10 mb-10">
				<h2 className="text-xl">We use cookies</h2>
				<hr className="my-3 opacity-50" />
				<p className="text-sm">
					We use cookies to run this site and to understand usage with Google Analytics 4.
					Analytics cookies are optional. You can accept all, reject non-essential cookies,
					or manage your preferences.
				</p>

				<div className="flex mt-5 justify-end gap-5">
					<ButtonConsent onClick={accept} text="accept" color="bg-emerald-800" />
					<ButtonConsent onClick={deny} text="opt-out" />
				</div>
			</div>
		</div>
	)
}