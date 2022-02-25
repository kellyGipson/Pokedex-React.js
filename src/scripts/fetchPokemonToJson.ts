const axios = require('axios')
const fs = require('fs')

// function sleep(milliseconds: number) {
//   const date = Date.now()
//   let currentDate = null;
//   do {
//     currentDate = Date.now()
//   } while (currentDate - date < milliseconds)
// }

type pokemonInfo = {
  pokemonSpriteURL: string,
  pokemonShinySpriteURL: string,
  pokemonName: string,
  pokemonTypeOne: string,
  pokemonTypeTwo: string | null,
  pokemonAbilities: {
    pokemonAbilityOne: string,
    pokemonAbilityOneIsHidden: boolean,
    pokemonAbilityTwo: string | null,
    pokemonAbilityTwoIsHidden: boolean,
    pokemonAbilityThree: string | null,
    pokemonAbilityThreeIsHidden: boolean,
  },
  pokemonHeight: number,
  pokemonWeight: number,
  pokemonStats: {
      name: string,
  }[],
}[]

// let pokemonList:pokemonInfo = []

function fetchPokemonList() {
  let responses = []
  for (let i = 1; i <= 2; i++) {
    let response = axios.get(`pokeapi.co/api/v2/pokemon/${i}/`)
    responses.push(response)
  }
  return Promise.all(responses)
}

const awaitJson = (responses) => Promise.all(responses.map(response => {
  console.log(responses.status)
  if(response.status === 200) return response
  throw new Error(response.status)
}))

fetchPokemonList()
  .then(awaitJson)
  .then(data => {
    axios.get('pokeapi.co')
      .then(response => {
        if(response.status === 200) return response
        throw new Error(response.status)
      })
  }).catch(function handleError(error) {
    console.log(error)
  })

// for (let i = 1; i <= 898; i++) {
//   sleep(20)
//   axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//   .then((res) => {
//   sleep(20)
//   // assigning json values to local variables
//     let key = i
//     let pokemonName = res.data.name
//     let pokemonSpriteURL = res.data.sprites.front_default
//     let pokemonShinySpriteURL = res.data.sprites.front_shiny
//     let pokemonTypes = res.data.types
//     let pokemonAbilities = res.data.abilities
//     let pokemonHeight = res.data.height
//     let pokemonWeight = res.data.weight
//     let pokemonStats = res.data.stats
//     const fetchedPokemonInfo = {
//       key,
//       pokemonName, 
//       pokemonSpriteURL, 
//       pokemonShinySpriteURL, 
//       pokemonTypes, 
//       pokemonAbilities, 
//       pokemonHeight, 
//       pokemonWeight, 
//       pokemonStats
//     }
//     pokemonList.push(fetchedPokemonInfo)
//     fs.writeFile('./src/assets/test.json', JSON.stringify(pokemonList), err => {
//       if (err) {
//         console.error(err)
//       }
//     })