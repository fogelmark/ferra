  import type { Variants } from "motion/react"

  export const subheadingMask: Variants = {
		initial: { y: "100%", opacity: 0 },
		animate: (i: number) => ({
			y: "0%",
			opacity: 1,
			transition: {
				delay: 0.08 * i,
				duration: 0.8,
				ease: [0, 0, 0.2, 1],
			},
		}),
	}
  
  export const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 1,
        duration: 1.2,
        ease: [0, 0, 0.2, 1],
      },
    },
  }

  export const slideUp = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.1 * i,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  }

  export const staggerOne: Variants = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.05 * i,
        ease: [0, 0, 0.2, 1],
      },
    }),
  }

  export const staggerTwo = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.15 + 0.05 * i,
        ease: [0, 0, 0.2, 1],
      },
    }),
  }

  export const staggerThree = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0, 0.2, 1],
      },
    },
  }

  export const staggerFour = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.25,
        ease: [0, 0, 0.2, 1],
      },
    },
  }

  export const staggerFive = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0, 0.2, 1],
      },
    },
  }

  export const staggerSix = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.35 + 0.05 * i,
        ease: [0, 0, 0.2, 1],
      },
    }),
  }

  export const staggerSixNoArray = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.35,
        ease: [0, 0, 0.2, 1],
      },
    },
  }