"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const getIsMobile = () => window.innerWidth < window.innerHeight;
function useIsVert() {
    const [isMobile, setIsMobile] = (0, react_1.useState)(getIsMobile());
    (0, react_1.useEffect)(() => {
        const onResize = () => {
            setIsMobile(getIsMobile());
        };
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, []);
    if (isMobile) {
        return true;
    }
    else {
        return false;
    }
}
exports.default = useIsVert;
