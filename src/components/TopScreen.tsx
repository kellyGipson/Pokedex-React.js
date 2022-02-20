import "../styles/Screens/Screens.css"

import useIsMobile from "../hooks/getIsMobile"

const BottomScreen = () => {
  return (
    <>
      <div className={"topScreen" + (useIsMobile() ? "Vert" : "Hori")}>
        TopScreen
      </div>
    </>
  )
}

export default BottomScreen