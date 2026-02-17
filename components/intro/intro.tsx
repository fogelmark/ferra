import MainIntroHeading from "./main-intro-heading"
import SubHeadingIntro from "./sub-heading-intro"

export default function Intro() {
	// [0.86, 0, 0.07, 1] // för images

	return (
		<section className="grid h-[150vh] grid-cols-12 grid-rows-12 items-center px-12">
			<SubHeadingIntro />
			<MainIntroHeading />
		</section>
	)
}
