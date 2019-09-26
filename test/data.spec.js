require("../src/data.js");

describe("testando a função filtro", () => {
  it("é uma função", () => {
    expect(typeof data.filtro).toBe("function");
  });

  it("filtra pokemons com egg: 2 km", () => {
    expect(data.filtro([{"egg": "2 km"}, {"egg": "5 km"}, {"egg": "10 km"}], "2 km")).toEqual([{"egg": "2 km"}]);
  });
});

const ordemPokemon = [
  {"name": "Ivysaur"}, 
  {"name": "Bulbasaur"}, 
  {"name": "Venusaur" }
];

const ordemId = [
  {"id": 1}, 
  {"id": 6}, 
  {"id": 4}
];

describe("Testando a função ordem", () => {
  it("is a function", () => {
    expect(typeof data.ordem).toBe("function");
  });
  it("Esta ordenando por name", () => {
    expect(data.ordem(ordemPokemon, "name")).toEqual([{"name": "Bulbasaur"}, {"name": "Ivysaur"}, {"name": "Venusaur" }]);
  }); 
  it("Esta ordenando por id", () => {
    expect(data.ordem(ordemId, "id")).toEqual([{ "id": 1}, {"id": 4}, {"id": 6}]);
  });

  it("filtra pokemons com egg: 5 km", () => {
    expect(data.filtro([{"egg": "2 km"}, {"egg": "5 km"}, {"egg": "10 km"}], "5 km")).toEqual([{"egg": "5 km"}]);
  });

});
