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
const axios_1 = __importDefault(require("axios"));
require("./styles/App/App.css");
const Device_1 = __importDefault(require("./components/Device"));
const BottomScreen_1 = __importDefault(require("./components/BottomScreen"));
const TopScreen_1 = __importDefault(require("./components/TopScreen"));
const App = () => {
    const [pokemonList, setPokemonList] = (0, react_1.useState)([]);
    const [pokemonInfo, setPokemonInfo] = (0, react_1.useState)([]);
    const [offset, setOffset] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        fetchPokemonList(offset);
    }, [offset]);
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }
    // Fetch initial pokemon list
    function fetchPokemonList(offset) {
        setPokemonInfo([]);
        // sleep(16) to fix a bug where the api would resolve too slowly and the 
        // pokemon would appear out of order
        axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=18`)
            .then((res) => {
            for (let i = 0; i < 18; i++) {
                sleep(50);
                const url = res.data.results[i].url;
                axios_1.default.get(url)
                    .then((res) => {
                    // assigning json values to local variables
                    let pokemonSpriteURL = res.data.sprites.front_default;
                    let pokemonShinySpriteURL = res.data.sprites.front_shiny;
                    let pokemonName = res.data.name;
                    let pokemonTypes = res.data.types;
                    let pokemonAbilities = res.data.abilities;
                    let pokemonHeight = res.data.height;
                    let pokemonWeight = res.data.weight;
                    let pokemonStats = res.data.stats;
                    let key = i;
                    const fetchedPokemonInfo = {
                        key,
                        pokemonSpriteURL,
                        pokemonShinySpriteURL,
                        pokemonName,
                        pokemonTypes,
                        pokemonAbilities,
                        pokemonHeight,
                        pokemonWeight,
                        pokemonStats
                    };
                    setPokemonInfo(prevInfo => [...prevInfo, fetchedPokemonInfo]);
                })
                    .catch((err) => {
                    console.log(err);
                });
            }
        });
    }
    return (<div className="App">
      <Device_1.default />
      <div className='screenContainer'>
        <TopScreen_1.default />
        <BottomScreen_1.default offset={offset} setOffset={setOffset} pokemonInfo={pokemonInfo} pokemonList={pokemonList} fetchPokemonList={fetchPokemonList}/>
      </div>
    </div>);
};
exports.default = App;
