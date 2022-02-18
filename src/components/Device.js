"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../styles/Device.css");
const Device = () => {
    return (react_1.default.createElement("div", { className: "pdContainer" },
        react_1.default.createElement("div", { className: 'pd pdBodyLower' }),
        react_1.default.createElement("div", { className: 'pd pdBodyLowerDark' }),
        react_1.default.createElement("div", { className: 'pd pdBodyLowerMiddle' }),
        react_1.default.createElement("div", { className: "pd pdBezelLower" }),
        react_1.default.createElement("div", { className: "pd pdScreenLower" }),
        react_1.default.createElement("div", { className: 'pd pdBodyUpper' }),
        react_1.default.createElement("div", { className: 'pd pdBodyUpper' }),
        react_1.default.createElement("div", { className: "pd pdBezelUpper" }),
        react_1.default.createElement("div", { className: "pd pdScreenUpper" })));
};
exports.default = Device;
