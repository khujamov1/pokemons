var elPokemonsList = document.querySelector(".pokemons-list");
var elMainForm = document.querySelector(".main-form");
var elSearchInput = document.querySelector(".name-input");
var elWeightFrom = document.querySelector(".weight-from");
var elWeightTo = document.querySelector(".weight-to");

function renderPokemons(array) {
	elPokemonsList.innerHTML = "";

	for (var pokemon of array) {
		var newPokemonItem = document.createElement("li");
		var newPokemonNum = document.createElement("span");
		var newPokemonTitle = document.createElement("h3");
		var newPokemonImg = document.createElement("img");
		var newPokemonWeight = document.createElement("span");
		var newPokemonTime = document.createElement("time");
		var newPokemonWeak = document.createElement("p");

		elPokemonsList.appendChild(newPokemonItem);
		newPokemonItem.append(
			newPokemonNum,
			newPokemonTitle,
			newPokemonImg,
			newPokemonWeight,
			newPokemonTime,
			newPokemonWeak
		);
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
	}
}

elMainForm.addEventListener("submit", function (evt) {
	evt.preventDefault();
	var elSearchInputVal = elSearchInput.value;
	var elWeightFromVal = Number(elWeightFrom.value);
	var elWeightToVal = Number(elWeightTo.value);


	var newRegex = new RegExp(elSearchInputVal, "gi");

	var resulArr = pokemons.filter((poke) => {
		var massOfPoke = Number(poke.weight.split(" ")[0]);
		if(elWeightToVal == 0) {
			elWeightToVal = 1000;
		}
		return (poke.name.match(newRegex) && (elWeightFromVal < massOfPoke && elWeightToVal > massOfPoke));
	});

	if (resulArr.length > 0) {
		renderPokemons(resulArr);
	} else {
		elPokemonsList.innerHTML = "404 not found";
	}
});

renderPokemons(pokemons);
