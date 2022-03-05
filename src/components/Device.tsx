import React, { useState, useEffect } from 'react'

import useIsMobile from '../hooks/getIsMobile'

import { 
	PowerContainer, 
	PowerIndicator, 
	StyledFiPower, 
	PdLower, 
	PdUpper,
	OnAnimation,
	OffAnimation,
	PdBodyLower,
} from '../styles/Device/styled/StyledDevicePower/StyledDevicePower'

import '../styles/Device/Device.css'

type props = {
  screenOn: boolean,
  handleScreenOn: () => void,
}

const Device = ({screenOn, handleScreenOn}: props) => {
  // grabbing screen size and returning boolean
  const getIsMobile = () => window.innerWidth < window.innerHeight
  const [isMobile, setIsMobile] = useState(getIsMobile())
  const [vertical, setVertical] = useState(isMobile ? "vw" : "vh")
  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile())
      if(isMobile) {
        setVertical("vw")
      } else {
        setVertical("vh")
      }
    }
    window.addEventListener("resize", onResize)
    
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [isMobile])
  // end of block

  return (
    <>
			<PdLower screenOn={screenOn} vertical={vertical} id={'PdLower'}>
				<PdBodyLower vertical={vertical} isMobile={isMobile} id={'PdBodyLower'}></PdBodyLower>
				<div className={`pd pdBodyLowerDark pdBodyLowerDark${useIsMobile()}`}></div>
				<div className={`pd pdBezelLower pdBezelLower${useIsMobile()}`}></div>
				<div className={`pd pdScreenLower pdScreenLower${useIsMobile()}`}></div>
				<div className={`pd pdText pdText${useIsMobile()}`}>PokeDex</div>
				<PowerContainer vertical={vertical} id={'PowerContainer'} onClick={handleScreenOn}>
					<StyledFiPower vertical={vertical} id={'PdPower'}/>
				</PowerContainer>
				<PowerIndicator vertical={vertical} screenOn={screenOn} />
			</PdLower>
			<PdUpper screenOn={screenOn} vertical={vertical}>
				<div className={`pd pdBodyUpper pdBodyUpper${useIsMobile()}`}></div>
				<div className={`pd pdBezelUpper pdBezelUpper${useIsMobile()}`}></div>
				<div className={`pd pdScreenUpper pdScreenUpper${useIsMobile()}`}></div>
			</PdUpper>
    </>
  )
}

export default Device