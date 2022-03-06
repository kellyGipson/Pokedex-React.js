"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledFiPower = exports.PowerContainer = exports.PowerIndicator = exports.DeviceContainer = exports.pdBezel = exports.pdScreen = exports.pdBodyText = exports.pdBodyDark = exports.pdBodyMain = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const fi_1 = require("react-icons/fi");
exports.pdBodyMain = '#a13333';
exports.pdBodyDark = '#af3535';
exports.pdBodyText = '#812323';
exports.pdScreen = 'rgb(36, 36, 36)';
exports.pdBezel = 'rgb(46, 46, 46)';
exports.DeviceContainer = styled_components_1.default.div `
	position: absolute;
  display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
`;
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
		-16${props => props.vertical}
	);
`;
exports.PowerContainer = styled_components_1.default.div `
	position: absolute;
	display: flex;
	justify-content: center;
  background: ${exports.pdBezel};
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
`;
exports.StyledFiPower = (0, styled_components_1.default)(fi_1.FiPower) `
	transform: translateY(-0.2${props => props.vertical});
  width: 2.5${props => props.vertical};
  height: auto;
  stroke: #161616;
  stroke-width: 3;
`;
