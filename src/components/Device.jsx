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
const styled_components_1 = require("styled-components");
const getIsMobile_1 = __importDefault(require("../hooks/getIsMobile"));
const StyledDevicePower_1 = require("../styles/Device/StyledDevicePower/StyledDevicePower");
const StyledDeviceLower_1 = require("../styles/Device/StyledDeviceLower/StyledDeviceLower");
const StyledDeviceUpper_1 = require("../styles/Device/StyledDeviceUpper/StyledDeviceUpper");
const Device = ({ screenOn, setScreenOn, handleScreenOn, handleAnimationOn, handleAnimationEnd, topFromValue, setTopFromValue, topToValue, setTopToValue, bottomFromValue, setBottomFromValue, bottomToValue, setBottomToValue, getIsMobile, isMobile, setIsMobile, vertical, setVertical, placeholder, setPlaceholder, animationRan, }) => {
    // grabbing screen size and returning boolean
    (0, react_1.useEffect)(() => {
        const onResize = () => {
            setIsMobile(getIsMobile);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMobile]);
    // end of block
    //20
    const OnAnimationTop = (topFromValue, topToValue) => (0, styled_components_1.keyframes) `
	0%{
		transform: translateY(${topFromValue}${vertical});
	}
	100%{
		transform: translateY(${topToValue}${vertical});
	}
	`;
    //25
    const OnAnimationBottom = (bottomFromValue, bottomToValue) => (0, styled_components_1.keyframes) `
		0% {
			transform: translateY(${bottomFromValue}${vertical})
		}
		100% {
			transform: translateY(${bottomToValue}${vertical})
		}
	`;
    return (<StyledDevicePower_1.DeviceContainer vertical={vertical} id={'DeviceContainer'}>
			<StyledDeviceLower_1.PdLower animation={() => OnAnimationBottom(bottomFromValue, bottomToValue)} onAnimationEnd={() => {
            handleAnimationEnd();
        }} vertical={vertical} id={'PdLower'}>
				<StyledDeviceLower_1.PdBodyLower vertical={vertical} id={'PdBodyLower'}/>
				<StyledDeviceLower_1.PdBodyLowerDark vertical={vertical} id={`PdBodyLowerDark`}/>
				<StyledDeviceLower_1.PdBezelLower vertical={vertical} id={`PdBezelLower`}/>
				<StyledDeviceLower_1.PdScreenLower vertical={vertical} className={`pd pdScreenLower pdScreenLower${(0, getIsMobile_1.default)()}`}/>
				<StyledDeviceLower_1.PdText vertical={vertical} className={`pd pdText pdText${(0, getIsMobile_1.default)()}`}>PokeDex</StyledDeviceLower_1.PdText>
				<StyledDevicePower_1.PowerContainer vertical={vertical} id={'PowerContainer'} onClick={() => {
            handleAnimationOn();
            (!screenOn) ? setTimeout(() => setScreenOn(!screenOn), 700)
                : setScreenOn(!screenOn);
        }}>
					<StyledDevicePower_1.StyledFiPower vertical={vertical} id={'PdPower'}/>
				</StyledDevicePower_1.PowerContainer>
				<StyledDevicePower_1.PowerIndicator vertical={vertical} screenOn={screenOn}/>
			</StyledDeviceLower_1.PdLower>
			<StyledDeviceUpper_1.PdUpper animation={() => OnAnimationTop(topFromValue, topToValue)} screenOn={screenOn} vertical={vertical} id={'PdUpper'}>
				<StyledDeviceUpper_1.PdBodyUpper vertical={vertical} id={`PdBodyUpper`}/>
				<StyledDeviceUpper_1.PdBezelUpper vertical={vertical} id={`PdBezelUpper`}/>
				<StyledDeviceUpper_1.PdScreenUpper vertical={vertical} id={`PdScreenUpper`}/>
			</StyledDeviceUpper_1.PdUpper>
    </StyledDevicePower_1.DeviceContainer>);
};
exports.default = Device;
