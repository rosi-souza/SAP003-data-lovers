const calculadora = (velocidade, ovo, incubadora, tempoDiario) => { //incubadora = 1 ou super = 0,667
  let distancia = ovo*incubadora;  // distancia em Km
  let t = distancia/velocidade; // tempo t em hora
  let dias = ~~(t/(tempoDiario/60));  // transforma tempo em hora
  return dias
};

window.data = calculadora;
