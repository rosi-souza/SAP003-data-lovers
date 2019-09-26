// calculadora

const resultado = document.getElementById("resultado");

const banana = (velocidade, ovo, incubadora, tempoDiario) => {
  resultado.innerHTML = `<p>Você irá caminhar por aproximadamente:  ${calculadora(velocidade, ovo, incubadora, tempoDiario)} dias`;
};

const peixinho = document.getElementById("calcular").addEventListener("click", () => {
  event.preventDefault();
  const velocidade = document.querySelector('input[name ="velocidade"]:checked').value;
  const ovo = document.querySelector('input[name="ovo"]:checked').value;
  const incubadora = document.querySelector('input[name="incubadora"]:checked').value;
  const tempoDiario = document.querySelector('input[name="tempo"]:checked').value;
  banana(velocidade, ovo, incubadora, tempoDiario);
});

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
  array.forEach(element => {
    layout += `
    <div class="card">
      <div class="card-pokemon">
        <img src = "${element.img}">
        <span class="name"> ${element.id}.${element.name}</span>
        <p class="type"> Tipo:${element.type}</p>
      </div>
    </div>`;
  });
  element.innerHTML = layout;
};

window.onload = printar(listapokemon, showpokemons);
