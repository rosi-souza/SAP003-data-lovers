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
radio.addEventListener("change", filtrado => {
    filtrado = filtro(listapokemon, event.target.value)
    filtrado.sort((a,b) => {
        if (a.name < b.name)
            return -1;    
        if (a.name > b.name)
           return 1; 
        return 0;
    })

    printarpoke.innerHTML = ""
    filtrado.forEach(element => {printarpoke.innerHTML += `${element.name} <img src = "${element.img}">`});

})

let a = filtro(listapokemon, "2 km");
console.log(a); //
a.sort((a,b) => {
    if (a.name < b.name)
        return -1;    
    if (a.name > b.name)
       return 1; 
    return 0;
})

console.log(a);

// radio = document.getElementById("radio")
// radio.addEventListener("change", filtrado => {
//     filtrado = filtro(listapokemon, event.target.value)
//     printarpoke.innerHTML = ""
//     filtrado.forEach(element => {printarpoke.innerHTML += `${element.name} <img src = "${element.img}">`});
// })