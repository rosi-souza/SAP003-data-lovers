// calculadora
const result = document.getElementsByClassName('resultado');
const velocidade = 5;
const ovo = 10;
const incubadora = 1;
const tempoDiario = 15;

result[0].innerHTML = `Aproximadamente ${calculadora(velocidade, ovo, incubadora, tempoDiario)} dias `

// filtro
const printarpoke = document.getElementById("pokemon");
const listapokemon = POKEMON.pokemon;

const filtrado = filtro(listapokemon, 2)
console.log();


filtrado.forEach(element => {
    printarpoke.innerHTML += `${element.name} <img src = "${element.img}">`
});

// const pokemonmap = listapokemon.filter(x => x.egg === "2 km");
// const banana = pokemonmap.map(y => y.name + y.egg + `<img src="${y.img}"/>`);
// printarpoke.innerHTML = banana;

// console.log(pokemonmap);
