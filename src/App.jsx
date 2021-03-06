"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    const [screenOn, setScreenOn] = (0, react_1.useState)(false);
    const [pokemonList] = (0, react_1.useState)(pokemonJSON);
    const [filteredPokemonList, setFilteredPokemonList] = (0, react_1.useState)(pokemonList);
    const [selectedPokemon, setSelectedPokemon] = (0, react_1.useState)([]);
    const [offset, setOffset] = (0, react_1.useState)(0);
    const [showShiny, setShowShiny] = (0, react_1.useState)(false);
    const [filter, setFilter] = (0, react_1.useState)('');
    const getIsMobile = () => window.innerWidth < window.innerHeight;
    const [isMobile, setIsMobile] = (0, react_1.useState)(getIsMobile);
    const [vertical, setVertical] = (0, react_1.useState)(isMobile ? 'vw' : 'vh');
    const [placeholder, setPlaceholder] = (0, react_1.useState)('');
    const [topFromValue, setTopFromValue] = (0, react_1.useState)('40.5');
    const [topToValue, setTopToValue] = (0, react_1.useState)('40.5');
    const [bottomFromValue, setBottomFromValue] = (0, react_1.useState)('5');
    const [bottomToValue, setBottomToValue] = (0, react_1.useState)('5');
    const [animationRan, setAnimationRan] = (0, react_1.useState)(false);
    //top 20, bottom 25
    const globalReset = () => {
        setFilteredPokemonList(pokemonList);
        setSelectedPokemon([]);
        setOffset(0);
        setShowShiny(false);
        setFilter('');
    };
    const handleAnimationOn = () => {
        globalReset();
        if (topToValue === '20') {
            setTopToValue('40.5');
            setBottomToValue('5');
        }
        else {
            setTopToValue('20');
            setBottomToValue('25');
        }
    };
    const handleAnimationEnd = () => {
        if (topToValue !== '20') {
            setTopFromValue('40.5');
            setBottomFromValue('5');
        }
        else {
            setAnimationRan(true);
            setTopFromValue('20');
            setBottomFromValue('25');
        }
    };
    const handleScreenOn = () => {
        globalReset();
    };
    const handleFilterPokemon = (filterText) => {
        globalReset();
        setFilteredPokemonList(pokemonList);
        //type in the field
        //return the pokemon that match the text field
        const filterPokemon = pokemonList.filter(pokemon => pokemon.pokemonName.startsWith(filterText.toLowerCase()));
        if (filterPokemon.length % 6 !== 0) {
            //calc by how much its off
            const leftOver = filterPokemon.length % 6;
            const objectsToInsert = 6 - leftOver;
            //insert blank objects
            const blankObjectsEmpty = [];
            for (let i = 0; i < objectsToInsert; i++) {
                blankObjectsEmpty.push({
                    key: i + filterPokemon.length + 1,
                    pokemonAbilityOne: null,
                    pokemonAbilityOneIsHidden: null,
                    pokemonAbilityThree: null,
                    pokemonAbilityThreeIsHidden: null,
                    pokemonAbilityTwo: null,
                    pokemonAbilityTwoIsHidden: null,
                    pokemonHeight: null,
                    pokemonName: null,
                    pokemonShinySpriteURL: null,
                    pokemonSpriteURL: null,
                    pokemonStatAtt: null,
                    pokemonStatDef: null,
                    pokemonStatHp: null,
                    pokemonStatSpA: null,
                    pokemonStatSpD: null,
                    pokemonStatSpd: null,
                    pokemonTypeOne: null,
                    pokemonTypeTwo: null,
                    pokemonWeight: null,
                });
            }
            const newFilteredPokemon = [...filterPokemon, ...blankObjectsEmpty]; //existing list plus the blank objects
            setFilteredPokemonList(newFilteredPokemon);
            return;
        }
        else {
            setFilteredPokemonList(filterPokemon);
        }
    };
    const toggleShinySprite = (e) => {
        setShowShiny(!showShiny);
    };
    const handlePokemonClick = (e) => {
        // click, 
        // grab the id, 
        // e.target.id
        // grab id from pokemon list, 
        // set that obj to selected pokemon
        setSelectedPokemon(filteredPokemonList.filter((pokemon, idx) => filteredPokemonList[idx].key === Number(e.target.id)));
        setShowShiny(false);
    };
    const handleClickUp = (e) => {
        if (offset > 0) {
            setOffset(offset - 6);
        }
    };
    const handleClickDown = (e) => {
        if (offset >= 0 && offset < filteredPokemonList.length - 19) {
            setOffset(offset + 6);
        }
    };
    return (<div className="App">
      <Device_1.default screenOn={screenOn} setScreenOn={setScreenOn} handleScreenOn={handleScreenOn} handleAnimationOn={handleAnimationOn} handleAnimationEnd={handleAnimationEnd} topFromValue={topFromValue} setTopFromValue={setTopFromValue} topToValue={topToValue} setTopToValue={setTopToValue} bottomFromValue={bottomFromValue} setBottomFromValue={setBottomFromValue} bottomToValue={bottomToValue} setBottomToValue={setBottomToValue} getIsMobile={getIsMobile} isMobile={isMobile} vertical={vertical} setIsMobile={setIsMobile} setVertical={setVertical} placeholder={placeholder} setPlaceholder={setPlaceholder} animationRan={animationRan}/>
      <div className={'screenContainer'}>
        {(screenOn) &&
            <>
          <TopScreen_1.default selectedPokemon={selectedPokemon} handlePokemonClick={handlePokemonClick} showShiny={showShiny} setShowShiny={setShowShiny} toggleShinySprite={toggleShinySprite}/>
          <BottomScreen_1.default offset={offset} filteredPokemonList={filteredPokemonList} handlePokemonClick={handlePokemonClick} handleClickUp={handleClickUp} handleClickDown={handleClickDown} handleFilterPokemon={handleFilterPokemon} filter={filter} setFilter={setFilter}/>
        </>}
      </div>
			<div className='credits'>Crafted from scratch by Kelly Gipson. 2022</div>
    </div>);
};
exports.default = App;
