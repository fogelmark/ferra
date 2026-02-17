import MainIntroHeading from "./main-intro-heading"
import SubHeadingIntro from "./sub-heading-intro"

export default function Intro() {
	// [0.86, 0, 0.07, 1] // för images

	return (
		<section className="grid md:h-[150vh] h-screen bg-ash-gray grid-cols-12 md:grid-rows-12 items-center px-4 md:px-12">
			<SubHeadingIntro />
			<MainIntroHeading />
		</section>
	)
}
