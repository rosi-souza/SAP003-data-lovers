const result = document.getElementsByClassName('resultado');
const velocidade = 5;
const ovo = 10;
const incubadora = 1;
const tempoDiario = 15;

result[0].innerHTML = `Aproximadamente ${calculadora(velocidade, ovo, incubadora, tempoDiario)} dias `

const listapokemon = POKEMON.pokemon;

let printarpoke = document.getElementById("pokemon");

const pokemonmap = listapokemon.filter(x => x.egg === "2 km");
const banana = pokemonmap.map(y => y.name + y.egg + `<img src="${y.img}"/>`);
printarpoke.innerHTML = banana;

console.log(pokemonmap);
