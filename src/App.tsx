import React, { useState, useEffect } from 'react';

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

const App = () => {
  const [pokemonList]:[pokemonListType, React.Dispatch<React.SetStateAction<any[]>>] = useState(pokemonJSON)
  const [offset, setOffset] = useState(4)

  // console.log(pokemonJSON)

  return (
    <div className="App">
      <Device />
      <div className='screenContainer'>
        <TopScreen />
        <BottomScreen offset={offset} setOffset={setOffset} pokemonList={pokemonList}/>
      </div>
    </div>
  );
}

export default App;