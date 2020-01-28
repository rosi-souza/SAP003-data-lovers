const calculationResult = document.getElementById("resultado");
const error = document.getElementById("error");

const calculo = (speed, eggType, incubator, walkInMinutes) => {
  calculationResult.innerHTML = `<p>Você irá caminhar por aproximadamente:  ${calculadora(speed, eggType, incubator, walkInMinutes)} dias`;
};

document.getElementById("calcular").addEventListener("click", (event) => {
  event.preventDefault();
  const speed = document.querySelector("input[name =\"speed\"]:checked").value;
  const eggType = document.querySelector("input[name=\"ovo\"]:checked").value;
  const incubator = document.querySelector("input[name=\"incubator\"]:checked").value;
  const walkInMinutes = document.getElementById("diario-time").value;
  if (walkInMinutes <= 0) {
    error.innerHTML = "Insira um numero válido. Ex: 2";
    calculationResult.innerHTML= "";
  } else {
    calculo(speed, eggType, incubator, walkInMinutes);
    error.innerHTML= "";
  };
});

const printarPokemons = document.getElementById("pokemon");
const showPokemons = document.getElementById("showpokemons");
const listPokemon = POKEMON.pokemon;

eggPicker = document.getElementById("radio");
eggPicker.addEventListener("change", () => {
  filteredPokemons = filterPokemon(listPokemon, event.target.value);
  printar(filteredPokemons, printarPokemons);
});

select = document.getElementById("select-section");
select.addEventListener("change", () => {
  let cresc = select[select.selectedIndex].getAttribute("sort");
  orderedPokemons = orderPokemon(listPokemon, event.target.value, cresc);
  printar(orderedPokemons, showPokemons);
});

const printar = (array, element) => {
  let layout = "";
  element.innerHTML = "";
  array.forEach(element => {
    layout += `
    <div class="card">
      <div class="card-pokemon">
        <img src = "${element.img}">
        <span class="name"> ${element.id}. ${element.name}</span>
        <p class="type"> Tipo: ${element.type.join(" e ")}</p>
      </div>
    </div>`;
  });
  element.innerHTML = layout;
};

openMenu = document.getElementById("openMenu").addEventListener("click", () => {
  event.preventDefault();
  var menu = document.getElementById("myTopnav");
  if (menu.className === "topnav") {
    menu.className += " responsive";
  } else {
    menu.className = "topnav";
  }
});

window.onload = printar(listPokemon, showPokemons);
