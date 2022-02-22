import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './styles/App/App.css';

import Device from './components/Device';
import BottomScreen from './components/BottomScreen';
import TopScreen from './components/TopScreen'

type pokemonList = {
  name: string, 
  url: string,
}[]

type pokemonInfo = {
  pokemonSpriteURL: string,
  pokemonShinySpriteURL: string,
  pokemonName: string,
  pokemonTypes: {
    slot: number,
    type: {
      name: string,
      url: string,
    }
  }[],
  pokemonAbilities: {
    ability: {
      name: string,
      url: string,
    },
    is_hidden: boolean,
    slot: number,
  }[],
  pokemonHeight: number,
  pokemonWeight: number,
  pokemonStats: {
    base_stat: number,
    effort: number,
    stat: {
      name: string,
      url: string,
    }
  }[],
}[]

const App = () => {
  const [pokemonList, setPokemonList]:[pokemonList, React.Dispatch<React.SetStateAction<any[]>>] = useState([])
  const [pokemonInfo, setPokemonInfo]: [Array<any>, React.Dispatch<React.SetStateAction<any[]>>] = useState([])
  const [offset, setOffset] = useState(12)
  
  useEffect(() => {
    fetchPokemonList(offset)
  }, [offset])
  
  // Fetch initial pokemon list
  function fetchPokemonList(offset: number) {
    let idx = 0
    for (let i = offset; i < offset + 18; i++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=18`)
      .then((res) => {
        const url = res.data.results[idx].url
        idx++
        axios.get(url)
        .then((res) => {
            // assigning json values to local variables
            let pokemonSpriteURL = res.data.sprites.front_default
            let pokemonShinySpriteURL = res.data.sprites.front_shiny
            let pokemonName = res.data.name
            let pokemonTypes = res.data.types
            let pokemonAbilities = res.data.abilities
            let pokemonHeight = res.data.height
            let pokemonWeight = res.data.weight
            let pokemonStats = res.data.stats
            const fetchedPokemonInfo = {
              pokemonSpriteURL, 
              pokemonShinySpriteURL, 
              pokemonName, 
              pokemonTypes, 
              pokemonAbilities, 
              pokemonHeight, 
              pokemonWeight, 
              pokemonStats
            }
            setPokemonInfo(prevInfo => [...prevInfo, fetchedPokemonInfo])
        })
        .catch((err) => {
          console.log(err)
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

  return (
    <div className="App">
      <Device />
      <div className='screenContainer'>
        <TopScreen />
        <BottomScreen offset={offset} setOffset={setOffset} pokemonInfo={pokemonInfo} pokemonList={pokemonList} fetchPokemonList={fetchPokemonList}/>
      </div>
    </div>
  );
}

export default App;