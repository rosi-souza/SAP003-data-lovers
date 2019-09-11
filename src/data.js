const calculadora = (velocidade, ovo, incubadora, tempo) => { //incubadora = 1 ou super = 0,664
  let distancia = ovo*incubadora;  // distancia em Km
  let t = distancia/velocidade; // tempo t em hora
  let dias = t/(tempo/60);  // transforma tempo em hora
  return dias

  console.log(dias);
};

window.data = calculadora;
