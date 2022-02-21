import "../styles/Screens/Screens.css"

import useIsMobile from "../hooks/getIsMobile"

const BottomScreen = () => {
  return (
    <>
      <div className={"topScreen topScreen" + (useIsMobile() ? "Vert" : "Hori")}>
        <div className="topScreenContents">
          
        </div>
      </div>
    </>
  )
}

export default BottomScreen