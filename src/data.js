const calculadora = (velocidade, ovo, incubadora, tempoDiario) => { //incubadora = 1 ou super = 0,667
  let dias = ~~((ovo*incubadora/velocidade)/(tempoDiario/60));
  return dias
};

const filtro = (array, ovo) => {
  return array.filter(x => x.egg == ovo)      
}

const ordem = (array) => {
  array.sort((a,b) => {
  if (a.name < b.name)
      return -1;    
  if (a.name > b.name)
     return 1; 
  return 0;
  })
}

window.data = calculadora;
window.data = filtro;
window.data = ordem;
