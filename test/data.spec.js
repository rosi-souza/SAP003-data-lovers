require("../src/data.js");

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
});
