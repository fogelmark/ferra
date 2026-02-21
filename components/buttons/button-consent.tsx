import React from "react"

type ButtonProps = {
  onClick: () => void;
  text: string;
  color?: string;
};


export default function ButtonConsent({onClick, text, color}: ButtonProps) {
	// return (
	//   <button className='py-3 font-medium rounded-sm text-xs uppercase text-white border border-white/20 bg-black/50 backdrop-blur-md cursor-pointer px-8'>let&apos;s talk</button>
	// )
	return (
		<button 
      className={`cursor-pointer rounded-sm border border-white/20 ${color ?? "bg-black/50"} px-8 py-3 text-xs font-medium text-white uppercase backdrop-blur-md`}
      onClick={onClick}
      >
			{text}
		</button>
	)
}
