import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://ferrastudio.com",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: "https://ferrastudio.com/work",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
	]
}
