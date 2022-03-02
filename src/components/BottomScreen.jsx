"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getIsMobile_1 = __importDefault(require("../hooks/getIsMobile"));
require("../styles/Screens/Screens.css");
function BottomScreen({ offset, handlePokemonClick, handleClickUp, handleClickDown, filteredPokemonList, handleFilterPokemon, filter, setFilter, }) {
    return (<div className={`bottomScreen bottomScreen${(0, getIsMobile_1.default)()}`}>
      <div className="bottomScreenContents">
        <div className="searchContainer">
          <input className="searchBox" type="text" onChange={(e) => { handleFilterPokemon(e.target.value); }}/>
        </div>
        <div className={`pokemonContainer pokemonContainer${(0, getIsMobile_1.default)()}`}>
          {filteredPokemonList.map((pokemon, idx) => ((idx <= 17) ?
            <img className={'pokemon'} src={filteredPokemonList[idx + offset].pokemonSpriteURL} alt={filteredPokemonList[idx + offset].pokemonName} key={filteredPokemonList[idx + offset].key} id={filteredPokemonList[idx + offset].key.toString()} onClick={handlePokemonClick}/>
            : null))}
        </div>
        <div className={`btnContainer btnContainer${(0, getIsMobile_1.default)()}`}>
          <button onClick={handleClickUp} className={`btnUp btnUp${(0, getIsMobile_1.default)()}`}>↑</button>
          <button onClick={handleClickDown} className={`btnDown btnDown${(0, getIsMobile_1.default)()}`}>↓</button>
        </div>
      </div>
    </div>);
}
exports.default = BottomScreen;
