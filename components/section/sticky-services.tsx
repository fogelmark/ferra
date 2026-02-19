const services = [
	{
		id: "01",
		title: "Web Design & Development",
		description:
			"We curate immersive digital environments where motion meets functionality. Every interaction is intentionally choreographed to elevate your brand’s narrative.",
	},
	{
		id: "02",
		title: "Brand Identity",
		description:
			"Identity is the soul of your business. We translate your core values into a visual language that commands attention and builds lasting loyalty.",
	},
	{
		id: "03",
		title: "SEO Strategy",
		description:
			"Presence is nothing without findability. We implement sophisticated search strategies that align your content with the specific intent of your highest-value customers.",
	},
	{
		id: "04",
		title: "Maintenance & Hosting",
		description:
			"Performance is a standard, not an option. Our architectural hosting ensures your platform remains a seamless, high-speed sanctuary for your audience.",
	},
]

export default function StickyService() {
	return (
		<div className="bg-[#f5f4f2]">
			{/* Hero Header Section */}
			<div className="mx-auto max-w-7xl px-6 py-32 lg:px-20">
				<div className="flex flex-col items-start justify-between pb-20 md:flex-row">
					<div className="mb-8 flex items-center gap-2 md:mb-0">
						<span className="text-sm font-medium text-black/40 tabular-nums">
							00
						</span>
						<span className="text-ash-gray text-sm font-medium uppercase">
							services
						</span>
					</div>
					<div className="max-w-2xl text-right">
						<h1 className="text-ash-gray mb-6 text-5xl leading-[1.1] font-medium md:text-7xl">
							Form Meets Function.
						</h1>
						<p className="text-ash-gray/70 text-lg leading-[1.4] md:text-3xl">
							We combine intentional design with modern technology
							to elevate your digital presence.
						</p>
					</div>
				</div>
			</div>

			{/* Sticky Stacking List */}
			<div className="relative pb-40">
				{services.map((service, index) => (
					<div
						key={service.id}
						className="sticky top-20 mx-auto w-[90%] border-t border-b border-black/10 bg-[#f5f4f2]"
						style={{ marginTop: index === 0 ? "0" : "-1px" }}
					>
						<div className="mx-auto max-w-7xl px-6 py-18 lg:px-20 lg:py-24">
							<div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12">
								{/* ID Column */}
								<div className="md:col-span-1">
									<span className="text-sm font-medium text-black/40 tabular-nums">
										{service.id}
									</span>
								</div>

								{/* Title Column */}
								<div className="md:col-span-5">
									<h3 className="text-3xl font-medium tracking-tight text-[#1A1A1A] md:text-4xl lg:text-5xl">
										{service.title}
									</h3>
								</div>

								{/* Description Column */}
								<div className="md:col-span-6 md:pl-12 lg:pl-24">
									<p className="max-w-md text-lg leading-relaxed text-black/70 md:text-xl">
										{service.description}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
