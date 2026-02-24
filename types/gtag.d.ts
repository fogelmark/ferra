export {}

type GtagCommand =
	| ["consent", "default" | "update", Record<string, string | number>]
	| ["config", string, Record<string, unknown>?]
	| ["event", string, Record<string, unknown>?]
	| ["js", Date]

declare global {
	interface Window {
		dataLayer: unknown[]
		gtag: (...args: GtagCommand) => void
	}
}