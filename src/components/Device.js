"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../styles/Device.css");
const Device = () => {
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    return (react_1.default.createElement("div", { className: "pdContainer" },
        react_1.default.createElement("div", { className: true }),
        "((screenWidth ",
        react_1.default.createElement("screenHeight", null),
        ") ? \"vert\" : \"hori\") + ' pd pdBodyLower'>")
        ,
            react_1.default.createElement("div", { className: true }))((screenWidth < screenHeight) ? "vert" : "hori") + ' pd pdBodyLowerDark' > ;
    div >
        react_1.default.createElement("div", { className: true });
    ((screenWidth < screenHeight) ? "vert" : "hori") + ' pd pdBodyLowerMiddle' > ;
    div >
        react_1.default.createElement("div", { className: true });
    ((screenWidth < screenHeight) ? "vert" : "hori") + ' pd pdBezelLower' > ;
    div >
        react_1.default.createElement("div", { className: true });
    ((screenWidth < screenHeight) ? "vert" : "hori") + ' pd pdScreenLower' > ;
    div >
        react_1.default.createElement("div", { className: true });
    ((screenWidth < screenHeight) ? "vert" : "hori") + ' pd pdBodyUpper' > ;
    div >
        react_1.default.createElement("div", { className: true });
    ((screenWidth < screenHeight) ? "vert" : "hori") + ' pd pdBodyUpper' > ;
    div >
        react_1.default.createElement("div", { className: true });
    ((screenWidth < screenHeight) ? "vert" : "hori") + ' pd pdBezelUpper' > ;
    div >
        react_1.default.createElement("div", { className: true });
    ((screenWidth < screenHeight) ? "vert" : "hori") + ' pd pdScreenUpper' > ;
    div >
    ;
};
div >
;
exports.default = Device;
