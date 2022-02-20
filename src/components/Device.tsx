import React, { useState, useEffect } from 'react'
import useIsMobile from '../hooks/getIsMobile'

import '../styles/Device/Device.css'


const Device = () => {
  return (
    <div className="pdContainer">
      <div className={'pd pdBodyLower pdBodyLower'        + (useIsMobile() ? "Vert" : "Hori")}></div>
      <div className={'pd pdBodyLowerDark pdBodyLowerDark'+ (useIsMobile() ? "Vert" : "Hori")}></div>
      <div className={'pd pdBezelLower pdBezelLower'      + (useIsMobile() ? "Vert" : "Hori")}></div>
      <div className={'pd pdScreenLower pdScreenLower'    + (useIsMobile() ? "Vert" : "Hori")}></div>
      <div className={'pd pdBodyUpper pdBodyUpper'        + (useIsMobile() ? "Vert" : "Hori")}></div>
      <div className={'pd pdBezelUpper pdBezelUpper'      + (useIsMobile() ? "Vert" : "Hori")}></div>
      <div className={'pd pdScreenUpper pdScreenUpper'    + (useIsMobile() ? "Vert" : "Hori")}></div>
      <div className={'pd pdText pdText' + (useIsMobile() ? "Vert" : "Hori")}>PokeDex</div>
    </div>
  )
}

export default Device