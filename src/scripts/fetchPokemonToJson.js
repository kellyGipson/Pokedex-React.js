const fs = require('fs');
const axios = require('axios');
const { stringify } = require('flatted');
let pokemonList = [];
function fetchPokemon() {
    for (let i = 1; i <= 898; i++) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            .then((res) => {
            // assigning json values to local variables
            let pokemonSpriteURL = res.data.sprites.front_default;
            let pokemonShinySpriteURL = res.data.sprites.front_shiny;
            let pokemonName = res.data.name;
            let pokemonTypes = res.data.types;
            let pokemonAbilities = res.data.abilities;
            let pokemonHeight = res.data.height;
            let pokemonWeight = res.data.weight;
            let pokemonStats = res.data.stats;
            let key = i;
            const fetchedPokemonInfo = {
                key,
                pokemonSpriteURL,
                pokemonShinySpriteURL,
                pokemonName,
                pokemonTypes,
                pokemonAbilities,
                pokemonHeight,
                pokemonWeight,
                pokemonStats
            };
            pokemonList.push(fetchedPokemonInfo);
            fs.writeFile('./src/assets/test.json', stringify(pokemonList), err => {
                if (err) {
                    console.error(err);
                }
            });
        });
    }
}
fetchPokemon();
// axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898')
//   .then((res) => {
//     const data = stringify(res)
//     console.log(res)
//     fs.writeFile('./src/assets/test.json', data, err => {
//       if (err) {
//         console.error(err)
//       }
//     })
//   })
// axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898`)
//     const url = res.data.results[i].url
//     axios.get(url)
//         assigning json values to local variables
//         let pokemonSpriteURL = res.data.sprites.front_default
//         let pokemonShinySpriteURL = res.data.sprites.front_shiny
//         let pokemonName = res.data.name
//         let pokemonTypes = res.data.types
//         let pokemonAbilities = res.data.abilities
//         let pokemonHeight = res.data.height
//         let pokemonWeight = res.data.weight
//         let pokemonStats = res.data.stats
//         let key = i
//         const fetchedPokemonInfo = {
//           key,
//           pokemonSpriteURL, 
//           pokemonShinySpriteURL, 
//           pokemonName, 
//           pokemonTypes, 
//           pokemonAbilities, 
//           pokemonHeight, 
//           pokemonWeight, 
//           pokemonStats
