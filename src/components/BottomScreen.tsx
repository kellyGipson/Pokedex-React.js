import useIsMobile from "../hooks/getIsMobile"

import "../styles/Screens/Screens.css"

type bottomScreenPropTypes = {
  offset: number,
  handlePokemonClick: React.MouseEventHandler<HTMLImageElement>,
  handleClickUp: React.MouseEventHandler<HTMLButtonElement>,
  handleClickDown: React.MouseEventHandler<HTMLButtonElement>,
  handleFilterPokemon: (value: string) => void,
  filter: string,
  setFilter: React.Dispatch<React.SetStateAction<string>>,
  filteredPokemonList: {
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
  handlePokemonClick,
  handleClickUp,
  handleClickDown,
  filteredPokemonList,
  handleFilterPokemon,
  filter,
  setFilter, 
}: bottomScreenPropTypes) {
  
  return (
    <div className={`bottomScreen bottomScreen${useIsMobile()}`}>
      <div className="bottomScreenContents">
        <div className="searchContainer">
          <input className="searchBox" type="text" placeholder="Search" onChange={(e) => {handleFilterPokemon(e.target.value)}}/>
        </div>
        <div className={`pokemonContainer pokemonContainer${useIsMobile()}`}>
          {filteredPokemonList.map((pokemon, idx) => (
              (idx <= 17) ?
                <img 
                  className={'pokemon'} 
                  src={filteredPokemonList[idx + offset].pokemonSpriteURL} 
                  alt={filteredPokemonList[idx + offset].pokemonName} 
                  key={filteredPokemonList[idx + offset].key}
                  id={filteredPokemonList[idx + offset].key.toString()}
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