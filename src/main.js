const result = document.getElementsByClassName('resultado');
const velocidade = 5;
const ovo = 10;
const incubadora = 1;
const tempoDiario = 15;

result[0].innerHTML = `Aproximadamente ${calculadora(velocidade, ovo, incubadora, tempoDiario)} dias `

===========================

const listapokemon = POKEMON.pokemon;

let printarpoke = document.getElementById("pokemon");

const pokemonmap = listapokemon.filter(x => x.egg === "2 km");
const banana = pokemonmap.map(y => y.name + y.egg + `<img src="${y.img}"/>`);
printarpoke.innerHTML = banana;

console.log(pokemonmap);

// for (let y of pokemonmap
// ) {
//   printarpoke.innerHTML = y;
// }

// for (let x of listapokemon) {
//   let banana = x.name;
//   // printarpoke.innerHTML += `<img src="${x.img}"/>` + x.name + x.egg + `<br>`;
//   // console.log(banana)
// }

// const pokemonmap = listapokemon.map(x =>`<img src="${x.img}"/>` + x.name + x.egg);
// pokemonmap.filter((x) => {
//   return x.egg === "2 km";
// }),
// printarpoke.innerHTML = pokemonmap;

// printarpoke.innerHTML += filterNames();
