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
const pokemonJSON = require('./assets/pokemonList.json');
// click the pokemon on the bottom screen
// render the pokemon to the top screen
const App = () => {
    const [pokemonList] = (0, react_1.useState)(pokemonJSON);
    const [selectedPokemon, setSelectedPokemon] = (0, react_1.useState)([]);
    const [offset, setOffset] = (0, react_1.useState)(0);
    const [showShiny, setShowShiny] = (0, react_1.useState)(false);
    const toggleShinySprite = (e) => {
        setShowShiny(!showShiny);
    };
    const handlePokemonClick = (e) => {
        // click, 
        // grab the id, 
        // e.target.id
        // grab id from pokemon list, 
        // set that obj to selected pokemon
        setSelectedPokemon(pokemonList.filter((pokemon, idx) => pokemonList[idx].key === Number(e.target.id)));
        setShowShiny(false);
    };
    const handleClickUp = (e) => {
        if (offset === 4) {
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
    return (<div className="App">
      <Device_1.default />
      <div className='screenContainer'>
        <TopScreen_1.default selectedPokemon={selectedPokemon} handlePokemonClick={handlePokemonClick} showShiny={showShiny} setShowShiny={setShowShiny} toggleShinySprite={toggleShinySprite}/>
        <BottomScreen_1.default offset={offset} setOffset={setOffset} pokemonList={pokemonList} handlePokemonClick={handlePokemonClick} setSelectedPokemon={setSelectedPokemon} handleClickUp={handleClickUp} handleClickDown={handleClickDown} setShowShiny={setShowShiny}/>
      </div>
    </div>);
};
exports.default = App;
