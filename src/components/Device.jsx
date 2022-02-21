"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const getIsMobile_1 = __importDefault(require("../hooks/getIsMobile"));
require("../styles/Device/Device.css");
const Device = () => {
    return (<div className="pdContainer">
      <div className={'pd pdBodyLower pdBodyLower' + ((0, getIsMobile_1.default)() ? "Vert" : "Hori")}></div>
      <div className={'pd pdBodyLowerDark pdBodyLowerDark' + ((0, getIsMobile_1.default)() ? "Vert" : "Hori")}></div>
      <div className={'pd pdBezelLower pdBezelLower' + ((0, getIsMobile_1.default)() ? "Vert" : "Hori")}></div>
      <div className={'pd pdScreenLower pdScreenLower' + ((0, getIsMobile_1.default)() ? "Vert" : "Hori")}></div>
      <div className={'pd pdBodyUpper pdBodyUpper' + ((0, getIsMobile_1.default)() ? "Vert" : "Hori")}></div>
      <div className={'pd pdBezelUpper pdBezelUpper' + ((0, getIsMobile_1.default)() ? "Vert" : "Hori")}></div>
      <div className={'pd pdScreenUpper pdScreenUpper' + ((0, getIsMobile_1.default)() ? "Vert" : "Hori")}></div>
      <div className={'pd pdText pdText' + ((0, getIsMobile_1.default)() ? "Vert" : "Hori")}>PokeDex</div>
    </div>);
};
exports.default = Device;
