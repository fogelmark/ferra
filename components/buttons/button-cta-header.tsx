import React from 'react'

export default function ButtonCtaHeader() {
  // return (
  //   <button className='py-3 font-medium rounded-sm text-xs uppercase text-white border border-white/20 bg-black/50 backdrop-blur-md cursor-pointer px-8'>let&apos;s talk</button>
  // )
  return (
    <a 
      className='py-3 font-medium rounded-sm text-xs uppercase text-white border border-white/20 bg-black/50 backdrop-blur-md cursor-pointer px-8' 
      href="mailto:contact@ferrastudio.com"
    >
      let&apos;s talk
    </a>
  )
}
