const calculadora = (velocidade, ovo, incubadora, tempoDiario) => { //incubadora = 1 ou super = 0,667
  let dias = ~~((ovo*incubadora/velocidade)/(tempoDiario/60));
  return dias;
};

const filtro = (array, ovo) => {
  return array.filter(x => x.egg == ovo);
};

const ordem = (array, data, order) => {
  array.sort((a, b) => {
    if (a[data] < b[data])
      return -1;    
    if (a[data] > b[data])
      return 1; 
    return 0;
  });
  return order === "decrescente" ? array.reverse(): array;

  // if (key === "crescente") {
  //   return array;
  // } else {
  //   return array.reverse()
  // };
};

window.data = {
  calculadora: calculadora,
  filtro: filtro,
  ordem: ordem, 
};
