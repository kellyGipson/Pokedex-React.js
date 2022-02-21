import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles/App/App.css';

import Device from './components/Device';
import BottomScreen from './components/BottomScreen';
import TopScreen from './components/TopScreen'

function App() {
  const [fetchFailed, setFetchFailed] = React.useState<boolean>(true)
  const [pokemonList, setPokemonList]: [Array<object>, any] = useState([])
  let pokemonSpriteURL = {}
  let pokemonShinySpriteURL = {}
  let pokemonName = {}
  let pokemonTypes = {}
  let pokemonAbilities = {}
  let pokemonHeight = {}
  let pokemonWeight = {}
  let pokemonStats = {}

  // Fetch initial pokemon list
  useEffect(() => {
    for(let pageIndex = 1; pageIndex <= 898; pageIndex++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${pageIndex}/`)
        .then((res) => {
          setFetchFailed(false)
          // assigning json values to local variables
          pokemonShinySpriteURL = res.data.sprites.front_shiny
          pokemonSpriteURL = res.data.sprites.front_default
          pokemonName = res.data.name
          pokemonTypes = res.data.types
          pokemonAbilities = res.data.abilities
          pokemonHeight = res.data.height
          pokemonWeight = res.data.weight
          // sets local variables to pokemonList state obj
          setPokemonList(
            ...pokemonList, 
            {
              pokemonName,
              sprites: {
                pokemonShinySpriteURL, 
                pokemonSpriteURL,
              },
              pokemonTypes,
              pokemonAbilities,
              pokemonHeight,
              pokemonWeight
            })
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }, [])
  console.log(pokemonList)


  return (
    <div className="App">
      <Device />
      <div className='screenContainer'>
        <TopScreen />
        <BottomScreen {...pokemonList}/>
      </div>
    </div>
  );
}

export default App;
