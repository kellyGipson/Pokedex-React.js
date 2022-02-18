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
    return (<div className="pdContainer">
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBodyLower'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBodyLowerDark'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBodyLowerMiddle'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBezelLower'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdScreenLower'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBodyUpper'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBodyUpper'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdBezelUpper'}></div>
      <div className={(screenWidth < screenHeight) ? "vert" : "hori" + ' pd pdScreenUpper'}></div>
    </div>);
};
exports.default = Device;
