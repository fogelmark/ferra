/* eslint-disable */

"use client"
import { createContext, useContext, useState, ReactNode } from "react"

const PreloaderContext = createContext({
  hasPlayed: false,
  setHasPlayed: (val: boolean) => {},
})

export const PreloaderProvider = ({ children }: { children: ReactNode }) => {
  const [hasPlayed, setHasPlayed] = useState(false)
  console.log("Provider renderad, hasPlayed är:", hasPlayed);

  return (
    <PreloaderContext.Provider value={{ hasPlayed, setHasPlayed }}>
      {children}
    </PreloaderContext.Provider>
  )
}

export const usePreloader = () => useContext(PreloaderContext)