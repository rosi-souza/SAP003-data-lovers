// calculadora
// document.getElementById("calcular").;
// const velocidade = document.getElementById("egg-km").value;;
// const ovo = document.getElementById("velocidade").value;
// const incubadora = document.getElementById("incubadora").value;
// const tempoDiario = document.getElementById("minutos").value;
const resultado = document.getElementById("resultado");

// result[0].innerHTML = `Aproximadamente ${calculadora(velocidade, ovo, incubadora, tempoDiario)} dias `;

// b = document.getElementById("calculadora");
// b.addEventListener("change", () => {
//   const velocidade = document.getElementById("velocidade").value;; 
//   const ovo = document.getElementById("egg-km").value;
//   const incubadora = document.getElementById("incubadora").value;
//   const tempoDiario = document.getElementById("minutos").value;
//   console.log(ovo);
//   console.log(velocidade);
//   console.log(incubadora);
//   console.log(tempoDiario);
// }
// ); 

const banana = (velocidade, ovo, incubadora, tempoDiario) => {
  resultado.innerHTML = calculadora(velocidade, ovo, incubadora, tempoDiario);
};

const peixinho = document.getElementById("calcular").addEventListener("click", () => {
  event.preventDefault();
  const velocidade = document.querySelector('input[name ="velocidade"]:checked').value;
  const ovo = document.querySelector('input[name="ovo"]:checked').value;
  const incubadora = document.querySelector('input[name="incubadora"]:checked').value;
  const tempoDiario = document.querySelector('input[name="tempo"]').value;
  banana(velocidade, ovo, incubadora, tempoDiario);
  console.log(ovo);
  console.log(velocidade);
  console.log(incubadora);
  console.log(tempoDiario);
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
  ordemtodos = ordem(listapokemon, event.target.value);
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
