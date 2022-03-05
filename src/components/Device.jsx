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
const getIsMobile_1 = __importDefault(require("../hooks/getIsMobile"));
const StyledDevicePower_1 = require("../styles/Device/styled/StyledDevicePower/StyledDevicePower");
require("../styles/Device/Device.css");
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
    return (<>
			<StyledDevicePower_1.PdLower screenOn={screenOn} vertical={vertical} id={'PdLower'}>
				<StyledDevicePower_1.PdBodyLower vertical={vertical} isMobile={isMobile} id={'PdBodyLower'}></StyledDevicePower_1.PdBodyLower>
				<div className={`pd pdBodyLowerDark pdBodyLowerDark${(0, getIsMobile_1.default)()}`}></div>
				<div className={`pd pdBezelLower pdBezelLower${(0, getIsMobile_1.default)()}`}></div>
				<div className={`pd pdScreenLower pdScreenLower${(0, getIsMobile_1.default)()}`}></div>
				<div className={`pd pdText pdText${(0, getIsMobile_1.default)()}`}>PokeDex</div>
				<StyledDevicePower_1.PowerContainer vertical={vertical} id={'PowerContainer'} onClick={handleScreenOn}>
					<StyledDevicePower_1.StyledFiPower vertical={vertical} id={'PdPower'}/>
				</StyledDevicePower_1.PowerContainer>
				<StyledDevicePower_1.PowerIndicator vertical={vertical} screenOn={screenOn}/>
			</StyledDevicePower_1.PdLower>
			<StyledDevicePower_1.PdUpper screenOn={screenOn} vertical={vertical}>
				<div className={`pd pdBodyUpper pdBodyUpper${(0, getIsMobile_1.default)()}`}></div>
				<div className={`pd pdBezelUpper pdBezelUpper${(0, getIsMobile_1.default)()}`}></div>
				<div className={`pd pdScreenUpper pdScreenUpper${(0, getIsMobile_1.default)()}`}></div>
			</StyledDevicePower_1.PdUpper>
    </>);
};
exports.default = Device;
