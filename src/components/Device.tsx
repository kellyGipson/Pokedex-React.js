import React from 'react'

import '../styles/Device.css'


const Device = () => {
  const screenWidth: number = window.screen.width
  const screenHeight: number = window.screen.height

  return (
    <div className="pdContainer">
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBodyLower'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBodyLowerDark'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBodyLowerMiddle'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBezelLower'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdScreenLower'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBodyUpper'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBodyUpper'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBezelUpper'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdScreenUpper'}></div>
    </div>
  )
}

export default Device