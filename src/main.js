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

radio = document.getElementById("radio")

// try3
radio.addEventListener("change", filtrado = () => {
    const filtrado = filtro(listapokemon, event.target.value)
    printarpoke.innerHTML = ""
    filtrado.forEach(element => {
    printarpoke.innerHTML += `${element.name} <img src = "${element.img}">`;
    });
})

//try2
// const filtrado = filtro(listapokemon, 2)
// filtrado.forEach(element => {
// printarpoke.innerHTML += `${element.name} <img src = "${element.img}">`;
// })
