const urlParam = new URLSearchParams(window.location.search);
const pokeId = urlParam.get('id');
const url = 'https://pokeapi.co/api/v2/pokemon/' + pokeId;
const morePokemonInfo = document.getElementById('pokemon');

function convertPokemonDetailsToLi(retorno) {
//para funcionar o fundo dinâmico: adicionei o "classList.add" usando a const de cima ao invés de criar outra tipo "colors"
  morePokemonInfo.classList.add(retorno.types[0].type.name);

  morePokemonInfo.innerHTML = `
  <div class="spans">
    <span class="number">#${retorno.id}</span>
    <span> <a class="home" href="index.html">Show all</a></span>
  </div>
  <div class="detail">
    <div class="imgAndType">
      <span class="name">${retorno.name}</span>
      <div class="img_background">
        <img id="photo" src="${retorno.sprites.other.dream_world.front_default}" alt="${retorno.name}">
      </div>
      <ol class="types">
        ${retorno.types.map((type) => `<li class="type ${type.type.name}">${type.type.name}</li>`).join('')}
      </ol>
  </div>

  <div id="morePokemonInfo" class="moreDetails">
    <p class="statusDesc">Pokémon Base Status</p>
    <div class="infoList">
      <div class="info">HP: ${retorno.stats.find(stat => stat.stat.name === 'hp').base_stat}</div>
      <div class="bar">
        <div class="porcentageBar" style="width: ${Math.round(retorno.stats.find(stat => stat.stat.name === 'hp').base_stat / 256 * 100).toFixed(1)}%; border-right: #000 solid 3px; height: 17px;"></div>
        <div class="porcentage">${Math.round(retorno.stats.find(stat => stat.stat.name === 'hp').base_stat / 256 * 100).toFixed(1)}%</div>
      </div>
    </div>

    <div class="infoList">
      <div class="info">Attack: ${retorno.stats.find(stat => stat.stat.name === 'attack').base_stat}</div>
      <div class="bar">
        <div class="porcentageBar" style="width: ${Math.round(retorno.stats.find(stat => stat.stat.name === 'attack').base_stat / 256 * 100).toFixed(1)}%; border-right: #000 solid 3px; height: 17px;"></div>
        <div class="porcentage">${Math.round(retorno.stats.find(stat => stat.stat.name === 'attack').base_stat / 256 * 100).toFixed(1)}%</div>
      </div>
    </div>

    <div class="infoList">
      <div class="info">Defense: ${retorno.stats.find(stat => stat.stat.name === 'defense').base_stat}</div>
      <div class="bar">
        <div class="porcentageBar" style="width: ${Math.round(retorno.stats.find(stat => stat.stat.name === 'defense').base_stat / 256 * 100).toFixed(1)}%; border-right: #000 solid 3px; height: 17px;"></div>
        <div class="porcentage">${Math.round(retorno.stats.find(stat => stat.stat.name === 'defense').base_stat / 256 * 100).toFixed(1)}%</div>
      </div>
    </div>

    <div class="infoList">
      <div class="info">Sp. Atk.: ${retorno.stats.find(stat => stat.stat.name === 'special-attack').base_stat}</div>
      <div class="bar">
        <div class="porcentageBar" style="width: ${Math.round(retorno.stats.find(stat => stat.stat.name === 'special-attack').base_stat / 256 * 100).toFixed(1)}%; border-right: #000 solid 3px; height: 17px;"></div>
        <div class="porcentage">${Math.round(retorno.stats.find(stat => stat.stat.name === 'special-attack').base_stat / 256 * 100).toFixed(1)}%</div
      ></div>
    </div>

    <div class="infoList">
      <div class="info">Sp. Def.: ${retorno.stats.find(stat => stat.stat.name === 'special-defense').base_stat}</div>
      <div class="bar">
        <div class="porcentageBar" style="width: ${Math.round(retorno.stats.find(stat => stat.stat.name === 'special-defense').base_stat / 256 * 100).toFixed(1)}%; border-right: #000 solid 3px; height: 17px;"></div>
        <div class="porcentage">${Math.round(retorno.stats.find(stat => stat.stat.name === 'special-defense').base_stat / 256 * 100).toFixed(1)}%</div>
      </div>
    </div>

    <div class="infoList">
      <div class="info">Speed: ${retorno.stats.find(stat => stat.stat.name === 'speed').base_stat}</div>
      <div class="bar">
        <div class="porcentageBar" style="width: ${Math.round(retorno.stats.find(stat => stat.stat.name === 'speed').base_stat / 256 * 100).toFixed(1)}%; border-right: #000 solid 3px; height: 17px;"></div>
        <div class="porcentage">${Math.round(retorno.stats.find(stat => stat.stat.name === 'speed').base_stat / 256 * 100).toFixed(1)}%</div>
      </div>
    </div>
  </div>
</div>`;
}

fetch(url)
  .then((response) => response.json())
  .then((retorno) => {
    convertPokemonDetailsToLi(retorno);
  })
  .catch((error) => console.error('Erro ao obter dados do Pokémon:', error));

  