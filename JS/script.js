const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

const pokemonListNoHTML = document.getElementById('pokemonList')

fetch(url)
    /* Convertendo em JSON */
    .then((response) => response.json())

    .then((jsonBody) => jsonBody.results)
    /* Recebe o JSON e printa no console */
    .then((pokemonList) => {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            pokemonListNoHTML.innerHTML += convertPokemonToHTML(pokemon)
        }
    })
    .catch((error) => console.error(error))


function convertPokemonToHTML(pokemon) {
    return `
        <li class="oPokemon">
            <span class="numberPoke">#001</span>
            <span class="nomePoke">${pokemon.name}</span>
        
            <div class="detailPoke">
                <ol class="typePoke">
                    <li class="slotsTypes">Grass</li>
                    <li class="slotsTypes">Poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="${pokemon.name}">
            </div>
        </li>`
}