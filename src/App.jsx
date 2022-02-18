"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./styles/App.css");
const Device_1 = __importDefault(require("./components/Device"));
function App() {
    return (<div className="App">
      <Device_1.default />
      <div>{`${window.screen.height} by ${window.screen.width}`}</div>
    </div>);
}
exports.default = App;
