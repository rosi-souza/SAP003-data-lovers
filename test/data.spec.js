require("../src/data.js");

describe("testando a função filtro", () => {
  it("é uma função", () => {
    expect(typeof data.filtro).toBe("function");
  });

  it("filtra pokemons com egg: 2 km", () => {
    expect(data.filtro([{"egg": "2 km"}, {"egg": "5 km"}, {"egg": "10 km"}], "2 km")).toEqual([{"egg": "2 km"}]);
  });

  it("filtra pokemons com egg: 5 km", () => {
    expect(data.filtro([{"egg": "2 km"}, {"egg": "5 km"}, {"egg": "10 km"}], "5 km")).toEqual([{"egg": "5 km"}]);
  });

});
