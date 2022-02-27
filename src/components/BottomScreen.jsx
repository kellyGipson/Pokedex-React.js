"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getIsMobile_1 = __importDefault(require("../hooks/getIsMobile"));
const react_1 = __importDefault(require("react"));
require("../styles/Screens/Screens.css");
function BottomScreen({ offset, setOffset, pokemonList }) {
    const handleClickUp = (e) => {
        if (offset == 4) {
            setOffset(0);
        }
        else if (offset > 0) {
            setOffset(offset - 6);
        }
    };
    const handleClickDown = (e) => {
        //breaks at 876
        if (offset === 876) {
            setOffset(880);
        }
        if (offset >= 0 && offset < 876) {
            setOffset(offset + 6);
        }
    };
    return (<>
      <div className={`bottomScreen bottomScreen${(0, getIsMobile_1.default)()}`}>
        <div>{offset}</div>
        <div className="bottomScreenContents">
          <div className={`pokemonContainer pokemonContainer${(0, getIsMobile_1.default)()}`}>
            {pokemonList.map((pokemon, idx) => ((idx <= 17) ?
            <img className={'pokemon'} src={pokemonList[idx + offset].pokemonSpriteURL} alt={pokemonList[idx + offset].pokemonName} key={pokemonList[idx + offset].key}/>
            : null))}
          </div>
          <div className={`btnContainer btnContainer${(0, getIsMobile_1.default)()}`}>
            <button onClick={handleClickUp} className={`btnUp btnUp${(0, getIsMobile_1.default)()}`}>↑</button>
            <button onClick={handleClickDown} className={`btnDown btnDown${(0, getIsMobile_1.default)()}`}>↓</button>
          </div>
        </div>
      </div>
    </>);
}
exports.default = BottomScreen;
/* {pokemonList.map((p, idx) => (
              (idx <= 23) ?
                <img className={'pokemon'} src={p.pokemonSpriteURL} alt={p.pokemonName} key={p.key}/>
                : null
            ))} */ 
