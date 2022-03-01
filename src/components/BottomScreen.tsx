import useIsMobile from "../hooks/getIsMobile"

import "../styles/Screens/Screens.css"

type bottomScreenPropTypes = {
  offset: number,
  setOffset: React.Dispatch<React.SetStateAction<number>>,
  setSelectedPokemon: React.Dispatch<React.SetStateAction<any[]>>,
  handlePokemonClick: React.MouseEventHandler<HTMLImageElement>,
  handleClickUp: (e: any) => void,
  handleClickDown: (e: any) => void,
  setShowShiny: React.Dispatch<React.SetStateAction<boolean>>
  pokemonList: {
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

export default function BottomScreen({ 
  offset, 
  setOffset, 
  pokemonList, 
  setSelectedPokemon,
  handlePokemonClick,
  handleClickUp,
  handleClickDown,
  setShowShiny
}: bottomScreenPropTypes) {
  
  return (
    <div className={`bottomScreen bottomScreen${useIsMobile()}`}>
      <div className="bottomScreenContents">
        <div className={`pokemonContainer pokemonContainer${useIsMobile()}`}>
          {pokemonList.map((pokemon, idx) => (
              (idx <= 17) ?
                <img 
                  className={'pokemon'} 
                  src={pokemonList[idx + offset].pokemonSpriteURL} 
                  alt={pokemonList[idx + offset].pokemonName} 
                  key={pokemonList[idx + offset].key}
                  id={pokemonList[idx + offset].key.toString()}
                  onClick={handlePokemonClick}
                />
              : null
            ))}
        </div>
        <div className={`btnContainer btnContainer${useIsMobile()}`}>
          <button onClick={handleClickUp} className={`btnUp btnUp${useIsMobile()}`}>↑</button>
          <button onClick={handleClickDown} className={`btnDown btnDown${useIsMobile()}`}>↓</button>
        </div>
      </div>
    </div>
  )
}