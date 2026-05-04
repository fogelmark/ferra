import MainIntroHeading from "./main-intro-heading"
import SubHeadingIntro from "./sub-heading-intro"

export default function Intro() {
	// [0.86, 0, 0.07, 1] // för images

	return (
		<section className="md:grid h-screen text-bone-white md:h-[150vh] py-12 max-sm:gap-20 flex flex-col bg-ash-gray grid-cols-12 md:grid-rows-12 justify-center md:items-center px-4 md:px-12">
			<MainIntroHeading />
			<SubHeadingIntro />
		</section>
	)
}
