import React, { useState } from 'react';

import './styles/App/App.css';
import Device from './components/Device';
import BottomScreen from './components/BottomScreen';
import TopScreen from './components/TopScreen'

const pokemonJSON = require('./assets/pokemonList.json')

type pokemonListType = {
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
}[]

// click the pokemon on the bottom screen
// render the pokemon to the top screen

const App = () => {
  const [pokemonList]:[pokemonListType, React.Dispatch<React.SetStateAction<any[]>>] = useState(pokemonJSON)
  const [selectedPokemon, setSelectedPokemon]:[pokemonListType, React.Dispatch<React.SetStateAction<any[]>>] = useState([])
  const [offset, setOffset] = useState(0)

  const handlePokemonClick = (e) => {
    // click, 
    // grab the id, 
    // e.target.id
    // grab id from pokemon list, 
    // set that obj to selected pokemon
    setSelectedPokemon(pokemonList.filter((pokemon, idx) => pokemonList[idx].key === Number(e.target.id)))
  }
  
  const handleClickUp = (e) => {
    if (offset === 4) {
      setOffset(0)
    } else if (offset > 0) {
      setOffset(offset - 6)
    }
  }

  const handleClickDown = (e) => {
    //breaks at 876
    if (offset === 876) {
      setOffset(880)
    }
    if (offset >= 0 && offset < 876) {
      setOffset(offset + 6)
    }
  }

  return (
    <div className="App">
      <Device />
      <div className='screenContainer'>
        <TopScreen 
          selectedPokemon={selectedPokemon}
          handlePokemonClick={handlePokemonClick} 
        />
        <BottomScreen 
          offset={offset} 
          setOffset={setOffset} 
          pokemonList={pokemonList} 
          handlePokemonClick={handlePokemonClick} 
          setSelectedPokemon={setSelectedPokemon}
          handleClickUp={handleClickUp}
          handleClickDown={handleClickDown}
        />
      </div>
    </div>
  );
}

export default App;