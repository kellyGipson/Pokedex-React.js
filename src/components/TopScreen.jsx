"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../styles/Screens/Screens.css");
require("../styles/PokemonDetails/PokemonDetails.css");
const getIsMobile_1 = __importDefault(require("../hooks/getIsMobile"));
const TopScreen = ({ handlePokemonClick, selectedPokemon, showShiny, setShowShiny, toggleShinySprite }) => {
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    return (<>
      <div className={`topScreen topScreen${(0, getIsMobile_1.default)()}`}>
        <div className={`topScreenContents topScreenContents${(0, getIsMobile_1.default)()}`}>
          {selectedPokemon.map((idx) => (<div key={selectedPokemon[0].key} className="pokemonDetailsContainer">
                <div className="pImgContainer">
                  <img onClick={toggleShinySprite} className="pImg" style={{ display: (showShiny) ? "none" : "block" }} src={selectedPokemon[0].pokemonSpriteURL} alt=""/>
                  <img onClick={toggleShinySprite} className="pImg" style={{ display: (showShiny) ? "block" : "none" }} src={selectedPokemon[0].pokemonShinySpriteURL} alt=""/>
                  <p>Click for Shiny Sprite</p>
                </div>
                <div className="pName">{capitalize(selectedPokemon[0].pokemonName)}</div>
                <div className="abilityContainer">
                  <div>Abilities:</div>
                  <div className="pAbilityOne">{capitalize(selectedPokemon[0].pokemonAbilityOne)}</div>
                  {(selectedPokemon[0].pokemonAbilityTwo) ? <div className={(selectedPokemon[0].pokemonAbilityTwoIsHidden) ? "Hidden pAbilityTwo" : 'pAbilityTwo'}>{capitalize(selectedPokemon[0].pokemonAbilityTwo)}</div> : null}
                  {(selectedPokemon[0].pokemonAbilityThree) ? <div className={(selectedPokemon[0].pokemonAbilityThreeIsHidden) ? "Hidden pAbilityThree" : "pAbilityThree"}>{capitalize(selectedPokemon[0].pokemonAbilityThree)}</div> : null}
                </div>
                <div className="sizeContainer">
                  <div className="pHeight">Height: {selectedPokemon[0].pokemonHeight / 10}m</div>
                  <div className="pWeight">Weight: {selectedPokemon[0].pokemonWeight / 10}kg</div>
                </div>
                <div className="typeContainer">
                  <div>Types:</div>
                  <div className="pTypeOne">{capitalize(selectedPokemon[0].pokemonTypeOne)}</div>
                  {(selectedPokemon[0].pokemonTypeTwo) ? <div className="pTypeTwo">{capitalize(selectedPokemon[0].pokemonTypeTwo)}</div> : null}
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
                  </div>
                  <div className="pStat">
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
