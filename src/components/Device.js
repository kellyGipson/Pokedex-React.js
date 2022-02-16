"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../styles/Device.css");
const Device = () => {
    return (react_1.default.createElement("div", { className: "pdContainer" },
        react_1.default.createElement("div", { className: 'pbBodyLower' }),
        react_1.default.createElement("div", { className: 'pbBodyLowerDark' }),
        react_1.default.createElement("div", { className: 'pbBodyLowerMiddle' }),
        react_1.default.createElement("div", { className: 'pbBodyUpper' }),
        react_1.default.createElement("div", { className: 'pbBodyUpper' })));
};
exports.default = Device;
