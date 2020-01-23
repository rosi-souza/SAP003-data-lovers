const calculadora = (speed, eggType, incubator, walkInMinutes) => { //incubator = 1 ou super = 0,667
  let dias = ~~((eggType * incubator / speed) / (walkInMinutes / 60));
  if (dias <= 1) {
    return 1;
  }
  else {
    return dias;
  }
};

const filterPokemon = (array, egg) => {
  return array.filter(element => element.egg == egg);
};

const orderPokemon = (array, data, order) => {
  array.sort((a, b) => {
    if (a[data] < b[data])
      return -1;
    if (a[data] > b[data])
      return 1;
    return 0;
  });
  return order === "decrescente" ? array.reverse() : array;
};

window.data = {
  calculadora: calculadora,
  filterPokemon: filterPokemon,
  orderPokemon: orderPokemon,
};
