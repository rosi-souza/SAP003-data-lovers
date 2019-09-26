// calculadora
const result = document.getElementsByClassName("resultado");
const velocidade = 5;
const ovo = 10;
const incubadora = 1;
const tempoDiario = 15;

result[0].innerHTML = `Aproximadamente ${calculadora(velocidade, ovo, incubadora, tempoDiario)} dias `;

// filtro e ordenação
const printarpoke = document.getElementById("pokemon");
const showpokemons = document.getElementById("showpokemons");
const listapokemon = POKEMON.pokemon;

radio = document.getElementById("radio");
radio.addEventListener("change", () => {
  filtrado = filtro(listapokemon, event.target.value);
  printar(filtrado, printarpoke);
});

select = document.getElementById("select-section");
select.addEventListener("change", () => {
  let cresc = event.target.class;
  console.log(cresc);
  
  ordemtodos = ordem(listapokemon, event.target.value, cresc);
  printar(ordemtodos, showpokemons);

});

const printar = (array, element) => {
  let layout = "";
  element.innerHTML = "";
  array.forEach(element => {layout += `
    <div class="card">
      <div class="card-pokemon">
        <img src = "${element.img}">
        <span class="name"> ${element.id}.${element.name}</span>
        <p class="type"> Tipo:${element.type}</p>
      </div>
    </div>`;});
  element.innerHTML = layout;
};

window.onload = printar(listapokemon, showpokemons);
