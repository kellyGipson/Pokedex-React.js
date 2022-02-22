"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getIsMobile_1 = __importDefault(require("../hooks/getIsMobile"));
const react_1 = __importDefault(require("react"));
require("../styles/Screens/Screens.css");
function BottomScreen({ offset, setOffset, pokemonInfo, fetchPokemonList }) {
    return (<>
      <div className={"bottomScreen bottomScreen" + ((0, getIsMobile_1.default)() ? "Vert" : "Hori")}>
        <div className="bottomScreenContents">
          {pokemonInfo.map((p, idx) => (<img className="pokemon" src={p.pokemonSpriteURL} key={idx}/>))}
        </div>
        <button onClick={(e) => { (offset >= 0) && setOffset(offset - 5); }} className="btnUp"></button>
        <button onClick={(e) => { setOffset(offset + 6); }} className="btnDown"></button>
      </div>
    </>);
}
exports.default = BottomScreen;
