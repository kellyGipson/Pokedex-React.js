"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const getIsMobile_1 = __importDefault(require("../hooks/getIsMobile"));
const fi_1 = require("react-icons/fi");
require("../styles/Device/Device.css");
const PowerIndicator = styled_components_1.default.div `
  height: 1${props => props.vertical};
  width: 1${props => props.vertical};
  background: ${props => props.screenOn ? "#32a852" : "#3b3b3b"};
  z-index: 300;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  transform: translateX(41.6${props => props.vertical});
  `;
const StyledFiPower = (0, styled_components_1.default)(fi_1.FiPower) `
  width: 2.5${props => props.vertical};
  height: auto;
  stroke: #161616;
  stroke-width: 3;
  transform: translate(
    0.7${props => props.vertical},
    0.6${props => props.vertical}
  )
`;
const PowerContainer = styled_components_1.default.div `
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
`;
const Device = ({ screenOn, handleScreenOn }) => {
    // grabbing screen size and returning boolean
    const getIsMobile = () => window.innerWidth < window.innerHeight;
    const [isMobile, setIsMobile] = (0, react_1.useState)(getIsMobile());
    const [vertical, setVertical] = (0, react_1.useState)(isMobile ? "vw" : "vh");
    (0, react_1.useEffect)(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
            if (isMobile) {
                setVertical("vw");
            }
            else {
                setVertical("vh");
            }
        };
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [isMobile]);
    // end of block
    return (<div className={`pdContainer pdContainer${(0, getIsMobile_1.default)()}`}>
      <div className={`pd pdBodyLower pdBodyLower${(0, getIsMobile_1.default)()}`}></div>
      <div className={`pd pdBodyLowerDark pdBodyLowerDark${(0, getIsMobile_1.default)()}`}></div>
      <div className={`pd pdBezelLower pdBezelLower${(0, getIsMobile_1.default)()}`}></div>
      <div className={`pd pdScreenLower pdScreenLower${(0, getIsMobile_1.default)()}`}></div>
      <div className={`pd pdBodyUpper pdBodyUpper${(0, getIsMobile_1.default)()}`}></div>
      <div className={`pd pdBezelUpper pdBezelUpper${(0, getIsMobile_1.default)()}`}></div>
      <div className={`pd pdScreenUpper pdScreenUpper${(0, getIsMobile_1.default)()}`}></div>
      <div className={`pd pdText pdText${(0, getIsMobile_1.default)()}`}>PokeDex</div>
      <PowerContainer vertical={vertical} className={'powerContainer'} onClick={handleScreenOn}>
        <StyledFiPower vertical={vertical} className={`pd pdPower pdPower${(0, getIsMobile_1.default)()}`}/>
      </PowerContainer>
      <PowerIndicator vertical={vertical} screenOn={screenOn}/>
    </div>);
};
exports.default = Device;
