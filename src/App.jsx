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
function App() {
    const [fetchFailed, setFetchFailed] = react_1.default.useState(true);
    const [pokemonList, setPokemonList] = (0, react_1.useState)([]);
    let pokemonSpriteURL = {};
    let pokemonShinySpriteURL = {};
    let pokemonName = {};
    let pokemonTypes = {};
    let pokemonAbilities = {};
    let pokemonHeight = {};
    let pokemonWeight = {};
    let pokemonStats = {};
    // Fetch initial pokemon list
    (0, react_1.useEffect)(() => {
        for (let pageIndex = 1; pageIndex <= 898; pageIndex++) {
            axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pageIndex}/`)
                .then((res) => {
                setFetchFailed(false);
                // assigning json values to local variables
                pokemonShinySpriteURL = res.data.sprites.front_shiny;
                pokemonSpriteURL = res.data.sprites.front_default;
                pokemonName = res.data.name;
                pokemonTypes = res.data.types;
                pokemonAbilities = res.data.abilities;
                pokemonHeight = res.data.height;
                pokemonWeight = res.data.weight;
                // sets local variables to pokemonList state obj
                setPokemonList(...pokemonList, {
                    pokemonName,
                    sprites: {
                        pokemonShinySpriteURL,
                        pokemonSpriteURL,
                    },
                    pokemonTypes,
                    pokemonAbilities,
                    pokemonHeight,
                    pokemonWeight
                });
            })
                .catch((error) => {
                console.log(error);
            });
        }
    }, []);
    console.log(pokemonList);
    return (<div className="App">
      <Device_1.default />
      <div className='screenContainer'>
        <TopScreen_1.default />
        <BottomScreen_1.default {...pokemonList}/>
      </div>
    </div>);
}
exports.default = App;
