var elPokemonsList = document.querySelector(".pokemons-list");

for (var pokemon of pokemons) {
    var newPokemonItem = document.createElement("li");
    var newPokemonNum = document.createElement("span");
    var newPokemonTitle = document.createElement("h3");
    var newPokemonImg = document.createElement("img");
    var newPokemonWeight = document.createElement("span");
    var newPokemonTime = document.createElement("time");
    var newPokemonWeak = document.createElement("p");

    elPokemonsList.appendChild(newPokemonItem);
    newPokemonItem.append(newPokemonNum, newPokemonTitle, newPokemonImg, newPokemonWeight,newPokemonTime, newPokemonWeak);
    newPokemonItem.className = "pokemon-item";
    newPokemonNum.className = "number";
    newPokemonWeight.className = "weight";
    newPokemonTime.className = "time";


    newPokemonNum.textContent = pokemon.num;
    newPokemonTitle.textContent = pokemon.name;
    newPokemonImg.src = pokemon.img;
    newPokemonWeight.textContent = pokemon.weight;
    newPokemonTime.textContent = pokemon.spawn_time;
    newPokemonWeak.textContent = pokemon.weaknesses.join(", ");
};