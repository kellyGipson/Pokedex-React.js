import { useEffect, useState } from "react"

const getIsMobile = () => window.innerWidth < window.innerHeight

export default function useIsMobile() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [screenHeight, setScreenHeight] = useState(window.innerHeight)
  const [isMobile, setIsMobile] = useState(getIsMobile())

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile())
      setScreenWidth(window.innerWidth)
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return isMobile
}