const calculadora = (velocidade, ovo, incubadora, tempoDiario) => { //incubadora = 1 ou super = 0,667
  let dias = ~~((ovo*incubadora/velocidade)/(tempoDiario/60));
  return dias
};

const filtro = (array, ovo) => {
    let resp = array.filter(x => x.egg == ovo + " km")      
    return resp
}

window.data = calculadora;
window.data = filtro;

