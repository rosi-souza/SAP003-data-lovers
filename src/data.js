const calculadora = (velocidade, ovo, incubadora, tempoDiario) => { //incubadora = 1 ou super = 0,667
  let dias = ~~((ovo*incubadora/velocidade)/(tempoDiario/60));
  return dias;
};

const filtro = (array, ovo) => {
  return array.filter(x => x.egg == ovo);
};

const ordem = (array, data) => {
  array.sort((a,b) => {
    if (a[data] < b[data])
      return -1;    
    if (a[data] > b[data])
      return 1; 
    return 0;
  });
  return array;
};

window.data = calculadora;
window.data = filtro;
window.data = ordem;
