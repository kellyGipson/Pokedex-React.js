import { useEffect, useState } from "react"

const getIsMobile = () => window.innerWidth < window.innerHeight

export default function useIsVert() {
  const [isMobile, setIsMobile] = useState(getIsMobile())

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile())
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  if (isMobile) { 
    return true
  } else {
    return false
  }
}