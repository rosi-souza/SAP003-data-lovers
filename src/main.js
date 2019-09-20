// calculadora
const result = document.getElementsByClassName("resultado");
const velocidade = 5;
const ovo = 10;
const incubadora = 1;
const tempoDiario = 15;

result[0].innerHTML = `Aproximadamente ${calculadora(velocidade, ovo, incubadora, tempoDiario)} dias `;

// filtro e ordenação
const printarpoke = document.getElementById("pokemon");
const listapokemon = POKEMON.pokemon;

radio = document.getElementById("radio");
radio.addEventListener("change", () => {
  filtrado = filtro(listapokemon, event.target.value);
  printar(filtrado);
});
select = document.getElementById("select");
select.addEventListener("change", () => {
  ordenado = ordem(filtrado, event.target.value);
  printar(ordenado);
});

const printar = array => {
  let layout = "";
  printarpoke.innerHTML = "";
  array.forEach(element => {layout += `
    <div class="card">
      <div class="card-pokemon">
        <img src = "${element.img}">
        <span class="name"> ${element.id}.${element.name} Tipo:${element.type}</span>
      </div>
    </div>`})
  printarpoke.innerHTML = layout;
}
