// calculadora

const resultado = document.getElementById("resultado");

  const calculo = (velocidade, ovo, incubadora, tempoDiario) => {
    resultado.innerHTML = `<p>Você irá caminhar por aproximadamente:  ${calculadora(velocidade, ovo, incubadora, tempoDiario)} dias`;
  }

document.getElementById("calcular").addEventListener("click", () => {
  event.preventDefault();
  const velocidade = document.querySelector("input[name =\"velocidade\"]:checked").value;
  const ovo = document.querySelector("input[name=\"ovo\"]:checked").value;
  const incubadora = document.querySelector("input[name=\"incubadora\"]:checked").value;
  const tempoDiario = document.getElementById('tempo-diario').value;
    if (+tempoDiario <= 0) {
    alert('Insira um tempo válido')
  } else {
    };
    calculo(velocidade, ovo, incubadora, tempoDiario);
});

// filtro de ovos
const printarpoke = document.getElementById("pokemon");
const showpokemons = document.getElementById("showpokemons");
const listapokemon = POKEMON.pokemon;

radio = document.getElementById("radio");
radio.addEventListener("change", () => {
  filtrado = filtro(listapokemon, event.target.value);
  printar(filtrado, printarpoke);
});

// ordenação 150 pokemons

select = document.getElementById("select-section");
select.addEventListener("change", () => {
  let cresc = select[select.selectedIndex].getAttribute("sort");
  ordemtodos = ordem(listapokemon, event.target.value, cresc);
  printar(ordemtodos, showpokemons);
});

// printar na tela

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

// menu

openMenu = document.getElementById("openMenu").addEventListener("click", () => {
  event.preventDefault();
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
});

window.onload = printar(listapokemon, showpokemons);
