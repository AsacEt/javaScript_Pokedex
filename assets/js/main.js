const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')


const maxRecords = 151
const limit = 12
let offset = 0


function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => `  
    <a href="details.html?id=${pokemon.number}" target="blank">
    <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>
          <div class="detail">
              <ol class="types">
                  ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
              </ol>
              <img src="${pokemon.photo}"
              alt="${pokemon.name}">
          </div>
      </li>
      </a>
    `).join('')

    pokemonList.innerHTML += newHtml
  })
}


// Botão de carregar mais
loadPokemonItens(offset, limit)
loadMoreButton.addEventListener('click', () => {
  offset += limit

  const qtdRecordWithNextPage = offset + limit

  if (qtdRecordWithNextPage >= maxRecords) {
    const newLimit = maxRecords - offset 
    loadPokemonItens(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton) 
  } else {
    loadPokemonItens(offset, limit)
  }
})