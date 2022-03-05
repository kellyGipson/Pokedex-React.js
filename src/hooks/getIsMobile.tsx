import { useEffect, useState } from "react"

const getIsMobile = () => window.innerWidth < window.innerHeight


function useIsMobile() {
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
    return "Vert"
  } else return "Hori"
}

export default useIsMobile;