"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdText = exports.PdScreenLower = exports.PdBezelLower = exports.PdBodyLowerDark = exports.PdBodyLower = exports.PdLower = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const StyledDevicePower_1 = require("../StyledDevicePower/StyledDevicePower");
exports.PdLower = styled_components_1.default.div `
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${props => props.animation} 0.7s cubic-bezier(0.85,0.85,0.75,0) forwards;
`;
//to 25
exports.PdBodyLower = styled_components_1.default.div `
	background-color: ${StyledDevicePower_1.pdBodyMain};
	border-top-left-radius: 4${props => props.vertical};
	border-top-right-radius: 4${props => props.vertical};
	border-bottom-left-radius: 4${props => props.vertical};
	border-bottom-right-radius: 4${props => props.vertical};
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
`;
exports.PdBodyLowerDark = styled_components_1.default.div `
	position: absolute;
	background-color: ${StyledDevicePower_1.pdBodyDark};
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
`;
exports.PdBezelLower = styled_components_1.default.div `
	background-color: ${StyledDevicePower_1.pdBezel};
	position: absolute;
	height: 40${props => props.vertical};
	width: 78${props => props.vertical};
	border-top-left-radius: 3${props => props.vertical};
	border-top-right-radius: 3${props => props.vertical};
	border-bottom-left-radius: 3${props => props.vertical};
	border-bottom-right-radius: 3${props => props.vertical};
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
`;
exports.PdScreenLower = styled_components_1.default.div `
	position: absolute;
	background-color: ${StyledDevicePower_1.pdScreen};
  height: 35${props => props.vertical};
	width: 70${props => props.vertical};
	border-top-left-radius: 2${props => props.vertical};
	border-top-right-radius: 2${props => props.vertical};
	border-bottom-left-radius: 2${props => props.vertical};
	border-bottom-right-radius: 2${props => props.vertical};
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
`;
exports.PdText = styled_components_1.default.div `
	position: absolute;
	font-weight: 1000;
	color: ${StyledDevicePower_1.pdBodyText};
	font-size: 4${props => props.vertical};
	transform: rotate(-90deg) translateY(43.5${props => props.vertical}) translateX(-4${props => props.vertical});
`;
