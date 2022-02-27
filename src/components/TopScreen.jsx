"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/Screens/Screens.css");
require("../styles/PokemonDetails/PokemonDetails.css");
const getIsMobile_1 = __importDefault(require("../hooks/getIsMobile"));
const TopScreen = ({ handlePokemonClick, selectedPokemon }) => {
    return (<>
      <div className={`topScreen topScreen${(0, getIsMobile_1.default)()}`}>
        <div className="topScreenContents">
          {selectedPokemon.map((idx) => (<div key={selectedPokemon[0].key} className="pokemonDetailsContainer">
                <img className="pImg notShiny" src={selectedPokemon[0].pokemonSpriteURL} alt=""/>
                <img className="pImg shiny" src={selectedPokemon[0].pokemonShinySpriteURL} alt=""/>
                <div className="pokemonDetails">
                  <div className="abilityContainer">
                    <div className="pName">{selectedPokemon[0].pokemonName}</div>
                    <div>Abilities</div>
                    <div className="pAbilityOne">{selectedPokemon[0].pokemonAbilityOne}</div>
                    {(selectedPokemon[0].pokemonAbilityTwo) ? <div className={(selectedPokemon[0].pokemonAbilityTwoIsHidden) ? "Hidden pAbilityTwo" : 'pAbilityTwo'}>{selectedPokemon[0].pokemonAbilityTwo}</div> : null}
                    {(selectedPokemon[0].pokemonAbilityThree) ? <div className={(selectedPokemon[0].pokemonAbilityThreeIsHidden) ? "Hidden pAbilityThree" : "pAbilityThree"}>{selectedPokemon[0].pokemonAbilityThree}</div> : null}
                  </div>
                  <div className="sizeContainer">
                    <div className="pHeight">Height: {selectedPokemon[0].pokemonHeight / 10} m</div>
                    <div className="pWeight">Weight: {selectedPokemon[0].pokemonWeight / 10} kg</div>
                  </div>
                </div>
                <div className="typeContainer">
                  <div>Types</div>
                  <div className="pTypeOne">{selectedPokemon[0].pokemonTypeOne}</div>
                  {(selectedPokemon[0].pokemonTypeTwo) ? <div className="pTypeTwo">{selectedPokemon[0].pokemonTypeTwo}</div> : null}
                </div>
                <div className="statContainer">
                  <div className="pStat">
                    <div className="pHp">HP</div>
                    <div className="pHpValue">{selectedPokemon[0].pokemonStatHp}</div>
                  </div>
                  <div className="pStat">
                    <div className="pAtt">Attack</div>
                    <div className="pAttValue">{selectedPokemon[0].pokemonStatAtt}</div>
                  </div>
                  <div className="pStat">
                    <div className="pDef">Defense</div>
                    <div className="pDefValue">{selectedPokemon[0].pokemonStatDef}</div>
                  </div>
                  <div className="pStat">
                    <div className="pSpA">Sp. Attack</div>
                    <div className="pSpAValue">{selectedPokemon[0].pokemonStatSpA}</div>
                  <div className="pStat">
                  </div>
                    <div className="pSpD">Sp. Def</div>
                    <div className="pSpDValue">{selectedPokemon[0].pokemonStatSpD}</div>
                  </div>
                  <div className="pStat">
                    <div className="pSpd">Speed</div>
                    <div className="pSpdValue">{selectedPokemon[0].pokemonStatSpd}</div>
                  </div>
                </div>
              </div>))}
        </div>
      </div>
    </>);
};
exports.default = TopScreen;
