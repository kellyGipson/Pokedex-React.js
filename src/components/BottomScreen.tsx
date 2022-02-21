import "../styles/Screens/Screens.css"

import useIsMobile from "../hooks/getIsMobile"
import { useEffect } from "react"

const BottomScreen = (pokemonList: Array<any>) => {
  
  return (
    <>
      <div className={"bottomScreen bottomScreen" + (useIsMobile() ? "Vert" : "Hori")}>
        <div className="bottomScreenContents">
        </div>
      </div>
    </>
  )
}

export default BottomScreen