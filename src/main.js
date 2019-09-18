// calculadora
const result = document.getElementsByClassName('resultado');
const velocidade = 5;
const ovo = 10;
const incubadora = 1;
const tempoDiario = 15;

result[0].innerHTML = `Aproximadamente ${calculadora(velocidade, ovo, incubadora, tempoDiario)} dias `

// filtro e ordenação
const printarpoke = document.getElementById("pokemon");
const listapokemon = POKEMON.pokemon;

radio = document.getElementById("radio")
radio.addEventListener("change", () => {
    filtrado = filtro(listapokemon, event.target.value);
    ordem(filtrado, "name");   
    let layout = "";
    printarpoke.innerHTML = ""
    filtrado.forEach(element => {layout += `<span class="pokemon-card">${element.name} <img src = "${element.img}"></span>`})
    printarpoke.innerHTML = layout;
})
