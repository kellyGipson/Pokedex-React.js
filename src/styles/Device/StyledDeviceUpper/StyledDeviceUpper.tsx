import styled from 'styled-components'
import {pdBodyMain, pdScreen, pdBezel} from '../StyledDevicePower/StyledDevicePower'

export const PdUpper = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${props => props.animation} 0.7s cubic-bezier(0.85,0.85,0.75,0) forwards;
`
//to 20

export const PdBodyUpper = styled.div`
position: absolute;
  background-color: ${pdBodyMain};
	height: 45${props=>props.vertical};
	width: 80${props=>props.vertical};
	border-top-left-radius: 4${props=>props.vertical};
	border-top-right-radius: 4${props=>props.vertical};
	border-bottom-left-radius: 4${props=>props.vertical};
	border-bottom-right-radius: 4${props=>props.vertical};
	transform: translateY(-94%);
	box-shadow: 
		inset 
		0.5${props=>props.vertical} 
		0.5${props=>props.vertical} 
		1${props=>props.vertical} 
		rgba(255, 255, 255, 0.30), 
		inset 
		-0.5${props=>props.vertical} 
		-0.5${props=>props.vertical} 
		1${props=>props.vertical} 
		rgba(0, 0, 0, 0.40),
		2${props=>props.vertical} 
		2${props=>props.vertical} 
		2${props=>props.vertical} 
		rgba(0, 0, 0, 0.20);
` 

export const PdBezelUpper = styled.div`
	position: absolute;
	background-color: ${pdBezel};
	height: 40${props=>props.vertical}; 
	width: 78${props=>props.vertical};
	border-top-left-radius: 3${props=>props.vertical};
	border-top-right-radius: 3${props=>props.vertical};
	border-bottom-left-radius: 3${props=>props.vertical};
	border-bottom-right-radius: 3${props=>props.vertical};
	transform: translateY(-106%);
  box-shadow: 
    inset  
		0.05${props=>props.vertical}  
		0.05${props=>props.vertical} 
		0.5${props=>props.vertical} 
		rgba(255, 255, 255, 0.30), 

    inset 
		-0.05${props=>props.vertical} 
		-0.05${props=>props.vertical} 
		0.5${props=>props.vertical} 
		rgba(0, 0, 0, 0.30),

    0.025${props=>props.vertical}  
		0.025${props=>props.vertical} 
		0.5${props=>props.vertical} 
		rgba(255, 255, 255, 0.30),

    -0.025${props=>props.vertical} 
		-0.025${props=>props.vertical} 
		0.5${props=>props.vertical} 
		rgba(0, 0, 0, 0.40);
` 
export const PdScreenUpper = styled.div`
	position: absolute;
  background-color: ${pdScreen};
	height: 35${props=>props.vertical};
	width: 70${props=>props.vertical};
	border-top-left-radius: 2${props=>props.vertical};
	border-top-right-radius: 2${props=>props.vertical};
	border-bottom-left-radius: 2${props=>props.vertical};
	border-bottom-right-radius: 2${props=>props.vertical};
  transform: translateY(-121.5%);
  box-shadow: 
    inset 
		0.25${props=>props.vertical} 
		0.25${props=>props.vertical} 
		1${props=>props.vertical} 
		rgba(0, 0, 0, 0.30), 

    inset 
		-0.25${props=>props.vertical} 
		-0.25${props=>props.vertical} 
		1${props=>props.vertical} 
		rgba(0, 0, 0, 0.30);
` 