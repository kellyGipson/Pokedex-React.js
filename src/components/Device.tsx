import React, { useEffect } from 'react'
import { keyframes } from 'styled-components'

import useIsMobile from '../hooks/getIsMobile'

import { DeviceContainer, PowerContainer, PowerIndicator, StyledFiPower, } from '../styles/Device/StyledDevicePower/StyledDevicePower'
import { PdBodyLower, PdLower, PdBodyLowerDark, PdBezelLower, PdScreenLower, PdText } from '../styles/Device/StyledDeviceLower/StyledDeviceLower'
import { PdUpper, PdBodyUpper, PdBezelUpper, PdScreenUpper } from '../styles/Device/StyledDeviceUpper/StyledDeviceUpper'

type props = {
  screenOn: boolean,
	setScreenOn: React.Dispatch<React.SetStateAction<boolean>>,
  handleScreenOn: () => void,
	handleAnimationOn: () => void,
	handleAnimationEnd: () => void,
	topFromValue: string,
	setTopFromValue: React.Dispatch<React.SetStateAction<string>>,
	topToValue: string,
	setTopToValue: React.Dispatch<React.SetStateAction<string>>,
	bottomFromValue: string,
	setBottomFromValue: React.Dispatch<React.SetStateAction<string>>,
	bottomToValue: string,
	setBottomToValue: React.Dispatch<React.SetStateAction<string>>,
	getIsMobile: () => boolean,
	isMobile: boolean,
	vertical: string,
	setIsMobile: React.Dispatch<React.SetStateAction<boolean>>,
	setVertical: React.Dispatch<React.SetStateAction<string>>,
	placeholder: string,
	setPlaceholder: React.Dispatch<React.SetStateAction<string>>,
	animationRan: boolean,
}

const Device = ({
	screenOn, 
	setScreenOn,
	handleScreenOn, 
	handleAnimationOn,
	handleAnimationEnd,
	topFromValue, 
	setTopFromValue,
	topToValue, 
	setTopToValue,
	bottomFromValue,
	setBottomFromValue, 
	bottomToValue,
	setBottomToValue,
	getIsMobile,
	isMobile,
	setIsMobile,
	vertical,
	setVertical,
	placeholder,
	setPlaceholder,
	animationRan,
}: props) => {
  // grabbing screen size and returning boolean

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile)
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile])
  // end of block

	//20
	const OnAnimationTop = (topFromValue, topToValue) => keyframes`
	0%{
		transform: translateY(${topFromValue}${vertical});
	}
	100%{
		transform: translateY(${topToValue}${vertical});
	}
	`

	//25
	const OnAnimationBottom = (bottomFromValue, bottomToValue) => keyframes`
		0% {
			transform: translateY(${bottomFromValue}${vertical})
		}
		100% {
			transform: translateY(${bottomToValue}${vertical})
		}
	`
	
  return (
    <DeviceContainer vertical={vertical} id={'DeviceContainer'}>
			<PdLower 
				animation={() => OnAnimationBottom(bottomFromValue, bottomToValue)}
				onAnimationEnd={() => {
					handleAnimationEnd();
				}} 
				vertical={vertical} 
				id={'PdLower'}
			>
				<PdBodyLower     vertical={vertical} id={'PdBodyLower'} />
				<PdBodyLowerDark vertical={vertical} id={`PdBodyLowerDark`} />
				<PdBezelLower    vertical={vertical} id={`PdBezelLower`} />
				<PdScreenLower   vertical={vertical} className={`pd pdScreenLower pdScreenLower${useIsMobile()}`} />
				<PdText          vertical={vertical} className={`pd pdText pdText${useIsMobile()}`}>PokeDex</PdText>
				<PowerContainer  
					vertical={vertical} 
					id={'PowerContainer'} 
					onClick={
						() => {
							handleAnimationOn(); 
							(!screenOn) ? setTimeout(() => setScreenOn(!screenOn), 700)
							: setScreenOn(!screenOn)}}>
					<StyledFiPower vertical={vertical} id={'PdPower'}/>
				</PowerContainer>
				<PowerIndicator  vertical={vertical} screenOn={screenOn} />
			</PdLower>
			<PdUpper 
				animation={() => OnAnimationTop(topFromValue, topToValue)}
				screenOn={screenOn} 
				vertical={vertical} 
				id={'PdUpper'}
			>
				<PdBodyUpper vertical={vertical} id={`PdBodyUpper`} />
				<PdBezelUpper vertical={vertical} id={`PdBezelUpper`} />
				<PdScreenUpper vertical={vertical} id={`PdScreenUpper`}/>
			</PdUpper>
    </DeviceContainer>
  )
}

export default Device