import styled from 'styled-components'
import {pdBodyMain, pdBodyDark, pdBodyText, pdScreen, pdBezel} from '../StyledDevicePower/StyledDevicePower'

export const PdLower = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${props => props.animation} 0.7s cubic-bezier(0.85,0.85,0.75,0) forwards;
`
//to 25

export const PdBodyLower = styled.div`
	background-color: ${pdBodyMain};
	border-top-left-radius: 4${props=>props.vertical};
	border-top-right-radius: 4${props=>props.vertical};
	border-bottom-left-radius: 4${props=>props.vertical};
	border-bottom-right-radius: 4${props=>props.vertical};
	width: 95${props => props.vertical};
	height: 48${props => props.vertical};
	transform: translateY(-11%);
  box-shadow: 
    inset 
		0.5${props => props.vertical} 
		0.5${props => props.vertical} 
		1${props => props.vertical} 
		rgba(255, 255, 255, 0.30),

    inset 
		-0.5${props => props.vertical} 
		-0.5${props => props.vertical} 
		1${props => props.vertical} 
		rgba(0, 0, 0, 0.40),

    2${props => props.vertical} 
		2${props => props.vertical} 
		2${props => props.vertical} 
		rgba(0, 0, 0, 0.20);
`

export const PdBodyLowerDark = styled.div`
	position: absolute;
	background-color: ${pdBodyDark};
  width: 80.5${props => props.vertical};
  height: 48${props => props.vertical};
	transform: translateY(-11%);
  box-shadow: 
		inset 
		-0.5${props => props.vertical} 
		-0.5${props => props.vertical} 
		2${props => props.vertical} 
		rgba(0, 0, 0, 0.50),

		inset  
		0.5${props => props.vertical}  
		0.5${props => props.vertical} 
		2${props => props.vertical} 
		rgba(0, 0, 0, 0.50);
`

export const PdBezelLower = styled.div`
	background-color: ${pdBezel};
	position: absolute;
	height: 40${props => props.vertical};
	width: 78${props => props.vertical};
	border-top-left-radius: 3${props=>props.vertical};
	border-top-right-radius: 3${props=>props.vertical};
	border-bottom-left-radius: 3${props=>props.vertical};
	border-bottom-right-radius: 3${props=>props.vertical};
	transform: translateY(-12%);
  box-shadow: 
    inset 
		-0.05${props => props.vertical} 
		-0.05${props => props.vertical} 
		0.5${props => props.vertical} 
		rgba(255, 255, 255, 0.30), 
		
    inset  
		0.05${props => props.vertical}
		0.05${props => props.vertical}
		0.5${props => props.vertical}
		rgba(0, 0, 0, 0.30),

    0.25${props => props.vertical}
		0.25${props => props.vertical}
		0.5${props => props.vertical}
		rgba(255, 255, 255, 0.10), 

    -0.25${props => props.vertical}
		-0.25${props => props.vertical}
		0.5${props => props.vertical}
		rgba(0, 0, 0, 0.40);
`

export const PdScreenLower = styled.div`
	position: absolute;
	background-color: ${pdScreen};
  height: 35${props => props.vertical};
	width: 70${props => props.vertical};
	border-top-left-radius: 2${props=>props.vertical};
	border-top-right-radius: 2${props=>props.vertical};
	border-bottom-left-radius: 2${props=>props.vertical};
	border-bottom-right-radius: 2${props=>props.vertical};
	transform: translateY(-14%);
  box-shadow: 
    inset 
		0.25${props => props.vertical} 
		0.25${props => props.vertical} 
		1${props => props.vertical} 
		rgba(0, 0, 0, 0.30),

    inset 
		-0.25${props => props.vertical} 
		-0.25${props => props.vertical} 
		1${props => props.vertical} 
		rgba(0, 0, 0, 0.30);
`

export const PdText = styled.div`
	position: absolute;
	font-weight: 1000;
	color: ${pdBodyText};
	font-size: 4${props => props.vertical};
	transform: rotate(-90deg) translateY(43.5${props => props.vertical}) translateX(-4${props => props.vertical});
`