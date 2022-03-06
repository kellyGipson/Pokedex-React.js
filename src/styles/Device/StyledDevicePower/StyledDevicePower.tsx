import styled from 'styled-components'
import { FiPower } from 'react-icons/fi'

export const pdBodyMain = '#a13333'
export const pdBodyDark = '#af3535'
export const pdBodyText = '#812323'
export const pdScreen = 'rgb(36, 36, 36)'
export const pdBezel = 'rgb(46, 46, 46)'

export const DeviceContainer = styled.div`
	position: absolute;
  display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
`

export const PowerIndicator = styled.div`
	position: absolute;
  height: 1${props => props.vertical};
  width: 1${props =>  props.vertical};
  background: ${props => props.screenOn ? "#32a852" : "#3b3b3b"};
  z-index: 300;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  transform: translate(
		43.5${props =>  props.vertical},
		-16${props => props.vertical}
	);
`
  
export const PowerContainer = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
  background: ${pdBezel};
  width: 4${props => props.vertical};
  height: 4${props => props.vertical};
  transform: translate(
    43.5${props => props.vertical},
    -20${props => props.vertical}
  );
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
		0${props => props.vertical} 
		0${props => props.vertical} 
		0${props => props.vertical} 
		rgba(0, 0, 0, 0.10);
`
  
export const StyledFiPower = styled(FiPower)`
	transform: translateY(-0.2${props => props.vertical});
  width: 2.5${props => props.vertical};
  height: auto;
  stroke: #161616;
  stroke-width: 3;
`