const pokemonList = document.getElementById('pokemonList')
const more = document.getElementById('more')
const maxRecords = 151
const limit = 10
let offset = 0;



function convertPokemonLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}"
                    alt="${pokemon.name}">
            </div>
        </li>
    `
}

function loadMore(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
                    <li class="pokemon ${pokemon.type}">
                        <span class="number">${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>
        
                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                            </ol>
        
                            <img src="${pokemon.photo}"
                                alt="${pokemon.name}">
                        </div>
                    </li>
                `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadMore(offset, limit)

more.addEventListener('click', () => {
    offset += limit
    const register = offset + limit
    if (register => maxRecords) {
        const newLimit = maxRecords - offset
        loadMore(offset, newLimit)

        more.parentElement.removeChild(more)
    } else {
        loadMore(limit, offset)
    }
})




