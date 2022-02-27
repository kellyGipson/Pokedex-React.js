import React, { useState, useEffect } from 'react'
import useIsMobile from '../hooks/getIsMobile'

import '../styles/Device/Device.css'


const Device = () => {
  return (
    <div className="pdContainer">
      <div className={`pd pdBodyLower pdBodyLower${useIsMobile()}`}></div>
      <div className={`pd pdBodyLowerDark pdBodyLowerDark${useIsMobile()}`}></div>
      <div className={`pd pdBezelLower pdBezelLower${useIsMobile()}`}></div>
      <div className={`pd pdScreenLower pdScreenLower${useIsMobile()}`}></div>
      <div className={`pd pdBodyUpper pdBodyUpper${useIsMobile()}`}></div>
      <div className={`pd pdBezelUpper pdBezelUpper${useIsMobile()}`}></div>
      <div className={`pd pdScreenUpper pdScreenUpper${useIsMobile()}`}></div>
      <div className={`pd pdText pdText${useIsMobile()}`}>PokeDex</div>
    </div>
  )
}

export default Device