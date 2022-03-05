"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdScreenUpper = exports.PdBezelUpper = exports.PdBodyUpper = exports.PdBodyLower = exports.OffAnimation = exports.OnAnimation = exports.PdUpper = exports.PdLower = exports.StyledFiPower = exports.PowerContainer = exports.PowerIndicator = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const fi_1 = require("react-icons/fi");
const pdBodyMain = '#a13333';
const pdBodyDark = '#af3535';
const pdBodyText = '#812323';
const pdScreen = 'rgb(36, 36, 36)';
const pdBezel = 'rgb(46, 46, 46)';
const roundCorners = (radius) => (`border-top-left-radius: ${radius};
  border-top-right-radius: ${radius};
  border-bottom-left-radius: ${radius};
  border-bottom-right-radius: ${radius};`);
exports.PowerIndicator = styled_components_1.default.div `
	position: absolute;
  height: 1${props => props.vertical};
  width: 1${props => props.vertical};
  background: ${props => props.screenOn ? "#32a852" : "#3b3b3b"};
  z-index: 300;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  transform: translate(
		43.5${props => props.vertical},
		0${props => props.vertical}
	);
`;
exports.PowerContainer = styled_components_1.default.div `
	position: absolute;
  background: ${pdBezel};
  width: 4${props => props.vertical};
  height: 4${props => props.vertical};
  transform: translate(
    43.5${props => props.vertical},
    -4${props => props.vertical}
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
`;
exports.StyledFiPower = (0, styled_components_1.default)(fi_1.FiPower) `
  width: 2.5${props => props.vertical};
  height: auto;
  stroke: #161616;
  stroke-width: 3;
  transform: translate(
    0.75${props => props.vertical},
    0.66${props => props.vertical}
  )
`;
// device
exports.PdLower = styled_components_1.default.div `
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	//transform: translateY(-15vh)
`;
exports.PdUpper = styled_components_1.default.div `
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	transform: translateY(-6${props => props.vertical});
`;
//-6 for on
const OnAnimation = () => {
};
exports.OnAnimation = OnAnimation;
const OffAnimation = () => {
};
exports.OffAnimation = OffAnimation;
exports.PdBodyLower = styled_components_1.default.div `
	background-color: ${pdBodyMain};
	border-top-left-radius: 4${props => props.vertical};
	border-top-right-radius: 4${props => props.vertical};
	border-bottom-left-radius: 4${props => props.vertical};
	border-bottom-right-radius: 4${props => props.vertical};
	width: 95${props => props.vertical};
	height: 53${props => props.vertical};
	transform: translateY(30%);
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
`;
exports.PdBodyUpper = styled_components_1.default.div `

`;
exports.PdBezelUpper = styled_components_1.default.div `

`;
exports.PdScreenUpper = styled_components_1.default.div `

`;
