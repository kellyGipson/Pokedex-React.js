import "../styles/Screens/Screens.css"

import useIsMobile from "../hooks/getIsMobile"

const BottomScreen = () => {
  return (
    <>
      <div className={"bottomScreen" + (useIsMobile() ? "Vert" : "Hori")}>
        BottomScreen
      </div>
    </>
  )
}

export default BottomScreen