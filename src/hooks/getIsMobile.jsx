"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const getIsMobile = () => window.innerWidth < window.innerHeight;
function useIsMobile() {
    const [screenWidth, setScreenWidth] = (0, react_1.useState)(window.innerWidth);
    const [screenHeight, setScreenHeight] = (0, react_1.useState)(window.innerHeight);
    const [isMobile, setIsMobile] = (0, react_1.useState)(getIsMobile());
    (0, react_1.useEffect)(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
            setScreenWidth(window.innerWidth);
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);
    return isMobile;
}
exports.default = useIsMobile;
