const axios = require('axios');
const fs = require('fs');
function fetchPokemonList() {
    let responses = [];
    for (let i = 1; i <= 898; i++) {
        let response = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        responses.push(response);
    }
    return Promise.all(responses);
}
const awaitJson = (responses) => Promise.all(responses.map(response => {
    if (response.status === 200)
        return response.data;
    throw new Error(response.status);
}));
let pokemonList = [];
fetchPokemonList()
    .then(awaitJson)
    .then(data => {
    axios.get('https://pokeapi.co/')
        .then(response => {
        if (response.status === 200)
            return data;
        throw new Error(response.status);
    })
        .then(data => {
        const pokemonData = data;
        pokemonData.forEach((pokemon, idx) => {
            const key = pokemon.id;
            const pokemonName = pokemon.name;
            const pokemonSpriteURL = pokemon.sprites.front_default;
            const pokemonShinySpriteURL = pokemon.sprites.front_shiny;
            const pokemonTypeOne = pokemon.types[0].type.name;
            const pokemonTypeTwo = (pokemon.types[1]) ? pokemon.types[1].type.name : null;
            const pokemonAbilityOne = pokemon.abilities[0].ability.name;
            const pokemonAbilityOneIsHidden = pokemon.abilities[0].is_hidden;
            const pokemonAbilityTwo = (pokemon.abilities[1]) ? pokemon.abilities[1].ability.name : null;
            const pokemonAbilityTwoIsHidden = (pokemon.abilities[1]) ? pokemon.abilities[1].is_hidden : null;
            const pokemonAbilityThree = (pokemon.abilities[2]) ? pokemon.abilities[2].ability.name : null;
            const pokemonAbilityThreeIsHidden = (pokemon.abilities[2]) ? pokemon.abilities[2].is_hidden : null;
            const pokemonHeight = pokemon.height;
            const pokemonWeight = pokemon.weight;
            const pokemonStatHp = pokemon.stats[0].base_stat;
            const pokemonStatAtt = pokemon.stats[1].base_stat;
            const pokemonStatDef = pokemon.stats[2].base_stat;
            const pokemonStatSpA = pokemon.stats[3].base_stat;
            const pokemonStatSpD = pokemon.stats[4].base_stat;
            const pokemonStatSpd = pokemon.stats[5].base_stat;
            const fetchedPokemonInfo = {
                key,
                pokemonName,
                pokemonSpriteURL,
                pokemonShinySpriteURL,
                pokemonTypeOne,
                pokemonTypeTwo,
                pokemonAbilityOne,
                pokemonAbilityOneIsHidden,
                pokemonAbilityTwo,
                pokemonAbilityTwoIsHidden,
                pokemonAbilityThree,
                pokemonAbilityThreeIsHidden,
                pokemonHeight,
                pokemonWeight,
                pokemonStatHp,
                pokemonStatAtt,
                pokemonStatDef,
                pokemonStatSpA,
                pokemonStatSpD,
                pokemonStatSpd,
            };
            pokemonList.push(fetchedPokemonInfo);
        });
        return pokemonList;
    })
        .then(pokemonList => {
        fs.writeFile('./src/assets/test.json', JSON.stringify(pokemonList), err => {
            if (err) {
                console.error(err);
            }
        });
    });
}).catch(function handleError(error) {
    console.log(error);
});
