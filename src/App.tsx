import React, { useState } from 'react';

import './styles/App/App.css';
import Device from './components/Device';
import BottomScreen from './components/BottomScreen';
import TopScreen from './components/TopScreen'
import useIsMobile from './hooks/getIsMobile'

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

const pokemonJSON: Array<any> = require('./assets/pokemonList.json')

// click the pokemon on the bottom screen
// render the pokemon to the top screen

const App = () => {
	const [screenOn, setScreenOn] = useState(false)
	const [pokemonList]:[pokemonListType, React.Dispatch<React.SetStateAction<any[]>>] = useState(pokemonJSON)
  const [filteredPokemonList, setFilteredPokemonList]:[pokemonListType, React.Dispatch<React.SetStateAction<any[]>>] = useState(pokemonList)
  const [selectedPokemon, setSelectedPokemon]:[pokemonListType, React.Dispatch<React.SetStateAction<any[]>>] = useState([])
  const [offset, setOffset] = useState(0)
  const [showShiny, setShowShiny] = useState(false)
  const [filter, setFilter] = useState('')
	const getIsMobile = () => window.innerWidth < window.innerHeight
  const [isMobile, setIsMobile] = useState(getIsMobile)
  const [vertical, setVertical] = useState(isMobile ? 'vw' : 'vh')
	const [placeholder, setPlaceholder] = useState('')
	const [topFromValue, setTopFromValue] = useState('40.5')
	const [topToValue, setTopToValue] = useState('40.5')
	const [bottomFromValue, setBottomFromValue] = useState('5')
	const [bottomToValue, setBottomToValue] = useState('5')
	const [animationRan, setAnimationRan] = useState(false)
//top 20, bottom 25

	const globalReset = () => {
		setFilteredPokemonList(pokemonList)
		setSelectedPokemon([])
		setOffset(0)
		setShowShiny(false)
		setFilter('')
	}

	const handleAnimationOn = () => {
		globalReset()
		if(topToValue === '20') {
			setTopToValue('40.5')
			setBottomToValue('5')
		} else {
			setTopToValue('20')
			setBottomToValue('25')
		}
	}

	const handleAnimationEnd = () => {
		if(topToValue !== '20') {
			setTopFromValue('40.5')
			setBottomFromValue('5')
		} else {
			setAnimationRan(true)
			setTopFromValue('20')
			setBottomFromValue('25')
		}
	}
	
  const handleScreenOn = () => {
		globalReset()
  }

  const handleFilterPokemon = (filterText: string) => {
		globalReset()
    setFilteredPokemonList(pokemonList)
    //type in the field
    //return the pokemon that match the text field
    const filterPokemon = pokemonList.filter(pokemon => pokemon.pokemonName.startsWith(filterText.toLowerCase()))
    if (filterPokemon.length % 6 !== 0) {
      //calc by how much its off
      const leftOver = filterPokemon.length % 6
      const objectsToInsert = 6 - leftOver
      //insert blank objects
      const blankObjectsEmpty = []
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
        })
      }
      const newFilteredPokemon = [...filterPokemon, ...blankObjectsEmpty]//existing list plus the blank objects
      setFilteredPokemonList(newFilteredPokemon)
      return
    } else {
      setFilteredPokemonList(filterPokemon)
    }
  }

  const toggleShinySprite = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    setShowShiny(!showShiny)
  }

  const handlePokemonClick = (e) => {
    // click, 
    // grab the id, 
    // e.target.id
    // grab id from pokemon list, 
    // set that obj to selected pokemon
    setSelectedPokemon(filteredPokemonList.filter((pokemon, idx) => filteredPokemonList[idx].key === Number(e.target.id)))
    setShowShiny(false)
  }
  
  const handleClickUp = (e) => {
    if (offset > 0) {
      setOffset(offset - 6)
    }
  }

  const handleClickDown = (e) => {
    if (offset >= 0 && offset < filteredPokemonList.length-19) {
      setOffset(offset + 6)
    }
  }

  return (
    <div className="App">
      <Device 
				screenOn={screenOn} 
				setScreenOn={setScreenOn}
				handleScreenOn={handleScreenOn} 
				handleAnimationOn={handleAnimationOn}
				handleAnimationEnd={handleAnimationEnd}
				topFromValue={topFromValue}
				setTopFromValue={setTopFromValue}
				topToValue={topToValue}
				setTopToValue={setTopToValue}
				bottomFromValue={bottomFromValue}
				setBottomFromValue={setBottomFromValue}
				bottomToValue={bottomToValue}
				setBottomToValue={setBottomToValue}
				getIsMobile={getIsMobile}
				isMobile={isMobile}
				vertical={vertical}
				setIsMobile={setIsMobile}
				setVertical={setVertical}
				placeholder={placeholder}
				setPlaceholder={setPlaceholder}
				animationRan={animationRan}
			/>
      <div className={'screenContainer'}>
        {(screenOn) && 
        <>
          <TopScreen 
          selectedPokemon={selectedPokemon}
          handlePokemonClick={handlePokemonClick} 
          showShiny={showShiny}
          setShowShiny={setShowShiny}
          toggleShinySprite={toggleShinySprite}
          />
          <BottomScreen 
          offset={offset}
          filteredPokemonList={filteredPokemonList}
          handlePokemonClick={handlePokemonClick}
          handleClickUp={handleClickUp}
          handleClickDown={handleClickDown}
          handleFilterPokemon={handleFilterPokemon}
          filter={filter}
          setFilter={setFilter}
          />
        </>
        }
      </div>
			<div className='credits'>Crafted from scratch by Kelly Gipson. 2022</div>
    </div>
  );
}

export default App;