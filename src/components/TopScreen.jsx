"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/Screens/Screens.css");
const getIsMobile_1 = __importDefault(require("../hooks/getIsMobile"));
const BottomScreen = () => {
    return (<>
      <div className={"topScreen" + ((0, getIsMobile_1.default)() ? "Vert" : "Hori")}>
        TopScreen
      </div>
    </>);
};
exports.default = BottomScreen;
