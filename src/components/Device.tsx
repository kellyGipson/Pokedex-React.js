import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import useIsMobile from '../hooks/getIsMobile'
import { FiPower } from 'react-icons/fi'

import '../styles/Device/Device.css'

type props = {
  screenOn: boolean,
  handleScreenOn: () => void,
}

const PowerIndicator = styled.div`
  height: 1${props => props.vertical};
  width: 1${props =>  props.vertical};
  background: ${props => props.screenOn ? "#32a852" : "#3b3b3b"};
  z-index: 300;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  transform: translateX(41.6${props =>  props.vertical});
  `
  
const StyledFiPower = styled(FiPower)`
  width: 2.5${props => props.vertical};
  height: auto;
  stroke: #161616;
  stroke-width: 3;
  transform: translate(
    0.7${props => props.vertical},
    0.6${props => props.vertical}
  )
`

const PowerContainer = styled.div`
  background: #363636;
  width: 4${props => props.vertical};
  height: 4${props => props.vertical};
  transform: translateY(-4${props => props.vertical}) 
  translateX(44.0${props => props.vertical});
  z-index: 1;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  box-shadow: 
    0.5${props => props.vertical} 
    0.5${props => props.vertical} 
    0.5${props => props.vertical} 
    rgba(0, 0, 0, 0.30),
    inset
    0.5${props => props.vertical} 
    0.5${props => props.vertical} 
    0.5${props => props.vertical} 
    rgba(255, 255, 255, 0.10),
    inset
    -0.5${props => props.vertical} 
    -0.5${props => props.vertical} 
    -0.5${props => props.vertical} 
    rgba(0, 0, 0, 0.10);
`


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
    <div className={`pdContainer pdContainer${useIsMobile()}`}>
      <div className={`pd pdBodyLower pdBodyLower${useIsMobile()}`}></div>
      <div className={`pd pdBodyLowerDark pdBodyLowerDark${useIsMobile()}`}></div>
      <div className={`pd pdBezelLower pdBezelLower${useIsMobile()}`}></div>
      <div className={`pd pdScreenLower pdScreenLower${useIsMobile()}`}></div>
      <div className={`pd pdBodyUpper pdBodyUpper${useIsMobile()}`}></div>
      <div className={`pd pdBezelUpper pdBezelUpper${useIsMobile()}`}></div>
      <div className={`pd pdScreenUpper pdScreenUpper${useIsMobile()}`}></div>
      <div className={`pd pdText pdText${useIsMobile()}`}>PokeDex</div>
      <PowerContainer 
        vertical={vertical} 
        className={'powerContainer'}
        onClick={handleScreenOn}
      >
        <StyledFiPower vertical={vertical} className={`pd pdPower pdPower${useIsMobile()}`}/>
      </PowerContainer>
      <PowerIndicator vertical={vertical} screenOn={screenOn} />
    </div>
  )
}

export default Device