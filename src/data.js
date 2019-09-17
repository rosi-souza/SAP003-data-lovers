const calculadora = (velocidade, ovo, incubadora, tempoDiario) => { //incubadora = 1 ou super = 0,667
  let dias = ~~((ovo*incubadora/velocidade)/(tempoDiario/60));
  return dias
};

const filtro = (array, ovo) => {
  return array.filter(x => x.egg == ovo)      
}

window.data = calculadora;
window.data = filtro;

