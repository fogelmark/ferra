"use client"

import { useEffect, useMemo, useState, useSyncExternalStore } from "react"
import { usePathname } from "next/navigation"
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
	// true only on the client snapshot, false on server snapshot
	const isClient = useSyncExternalStore(
		() => () => {}, // no-op subscribe
		() => true,     // client snapshot
		() => false     // server snapshot
	)

	const [choice, setChoice] = useState<ConsentChoice>(() => readConsent())
	const pathname = usePathname()

	const url = useMemo(() => {
		if (typeof window === "undefined") return pathname
		return `${pathname}${window.location.search || ""}`
	}, [pathname])

	useEffect(() => {
		if (!isClient) return

		if (choice === "accepted_analytics") {
			gtagConsentGrantAnalytics()
			gtagPageview(url)
		} else if (choice === "rejected") {
			gtagConsentDenyAll()
		}
	}, [isClient, choice, url])

	const accept = () => {
		localStorage.setItem(STORAGE_KEY, "accepted_analytics")
		setChoice("accepted_analytics")
	}

	const deny = () => {
		localStorage.setItem(STORAGE_KEY, "rejected")
		setChoice("rejected")
	}

	// Avoid rendering anything until we're on the client
	if (!isClient) return null
	if (choice !== "unknown") return null

	return (
		<div className="bg-ash-gray/80 fixed inset-0 z-50 flex items-end justify-end">
			<div className="bg-bone-white text-ash-gray relative w-full max-w-md rounded-2xl p-5 me-10 mb-10">
				<h2 className="text-xl">We use cookies</h2>
				<hr className="my-3 opacity-50" />
				<p className="text-sm">
					We use cookies to run this site and to understand usage with Google Analytics 4.
					Analytics cookies are optional.
				</p>

				<div className="flex mt-5 justify-end gap-5">
					<ButtonConsent onClick={accept} text="accept" color="bg-emerald-800" />
					<ButtonConsent onClick={deny} text="opt-out" />
				</div>
			</div>
		</div>
	)
}