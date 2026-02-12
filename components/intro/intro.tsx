import React from "react"

export default function Intro() {
	return (
		<section className="grid h-[150vh] grid-cols-12 grid-rows-12 px-12">
			<div className="col-span-4 col-start-1 row-start-4">
				<p className="text-lg leading-tight">
					Specializing in brand identity, motion design, and websites.
					We craft high-end digital touchpoints for those who value
					precision, aesthetics, and seamless user experiences across
					all platforms.
				</p>
			</div>
			<div className="col-span-12 col-start-1 row-start-7 text-7xl">
				<h2 className="indent-[35vw]">
					A Stockholm based creative studio, shaping the visual identity of the music industry and visionary brands through bold design.
				</h2>
			</div>
		</section>
	)
}
