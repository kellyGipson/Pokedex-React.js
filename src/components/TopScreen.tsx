import "../styles/Screens/Screens.css"
import "../styles/PokemonDetails/PokemonDetails.css"

import useIsMobile from "../hooks/getIsMobile"

type topScreenProps = {
  handlePokemonClick: React.Dispatch<React.SetStateAction<number>>,
  showShiny: boolean,
  setShowShiny: React.Dispatch<React.SetStateAction<boolean>>,
  toggleShinySprite: (e: any) => void,
  selectedPokemon: {
    "key": number,
    "pokemonName": string,
    "pokemonSpriteURL": string,
    "pokemonShinySpriteURL": string,
    "pokemonTypeOne": string,
    "pokemonTypeTwo": string,
    "pokemonAbilityOne": string,
    "pokemonAbilityOneIsHidden": boolean,
    "pokemonAbilityTwo": string | null,
    "pokemonAbilityTwoIsHidden": boolean | null,
    "pokemonAbilityThree": string | null,
    "pokemonAbilityThreeIsHidden": boolean | null,
    "pokemonHeight": 7,
    "pokemonWeight": 69,
    "pokemonStatHp": 45,
    "pokemonStatAtt": 49,
    "pokemonStatDef": 49,
    "pokemonStatSpA": 65,
    "pokemonStatSpD": 65,
    "pokemonStatSpd": 45
}[],
}

const TopScreen = ({ handlePokemonClick, selectedPokemon, showShiny, setShowShiny, toggleShinySprite }: topScreenProps) => {
  
  const capitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  return (
    <>
      <div className={`topScreen topScreen${useIsMobile()}`}>
        <div className="topScreenContents">
          {
            selectedPokemon.map((idx) => (
              <div key={selectedPokemon[0].key} className="pokemonDetailsContainer">
                <div className="pImg">
                  <img onClick={toggleShinySprite} className="pImg" style={{ display: (showShiny) ? "none" : "block" }} src={selectedPokemon[0].pokemonSpriteURL} alt="" />
                  <img onClick={toggleShinySprite} className="pImg" style={{ display: (showShiny) ? "block" : "none" }} src={selectedPokemon[0].pokemonShinySpriteURL} alt="" />
                  <p>Click for Shiny Sprite</p>
                </div>
                <div className="pName">{capitalize(selectedPokemon[0].pokemonName)}</div>
                <div className="abilityContainer">
                  <div>Abilities:</div>
                  <div className="pAbilityOne">{capitalize(selectedPokemon[0].pokemonAbilityOne)}</div>
                  {(selectedPokemon[0].pokemonAbilityTwo)   ? <div className={(selectedPokemon[0].pokemonAbilityTwoIsHidden) ? "Hidden pAbilityTwo" : 'pAbilityTwo'}>{capitalize(selectedPokemon[0].pokemonAbilityTwo)}</div> : null}
                  {(selectedPokemon[0].pokemonAbilityThree) ? <div className={(selectedPokemon[0].pokemonAbilityThreeIsHidden) ? "Hidden pAbilityThree" : "pAbilityThree"}>{capitalize(selectedPokemon[0].pokemonAbilityThree)}</div> : null}
                </div>
                <div className="sizeContainer">
                  <div className="pHeight">Height: {selectedPokemon[0].pokemonHeight/10}m</div>
                  <div className="pWeight">Weight: {selectedPokemon[0].pokemonWeight/10}kg</div>
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
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default TopScreen