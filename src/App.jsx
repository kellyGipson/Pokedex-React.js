"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
require("./styles/App/App.css");
const Device_1 = __importDefault(require("./components/Device"));
const BottomScreen_1 = __importDefault(require("./components/BottomScreen"));
const TopScreen_1 = __importDefault(require("./components/TopScreen"));
function App() {
    const [poweredOn, setPoweredOn] = (0, react_1.useState)(false);
    const UsePowerOn = () => {
        //when bottom screen is clicked, turn on the screens
    };
    return (<div className="App">
      <Device_1.default />
      <div className='screenContainer'>
        <TopScreen_1.default />
        <BottomScreen_1.default />
      </div>
    </div>);
}
exports.default = App;
