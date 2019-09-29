require("../src/data.js");

describe("testando a função filtro", () => {
  it("é uma função", () => {
    expect(typeof data.filtro).toBe("function");
  });
  it("filtra pokemons com egg: 2 km", () => {
    expect(data.filtro([{ "egg": "2 km" }, { "egg": "5 km" }, { "egg": "10 km" }], "2 km")).toEqual([{ "egg": "2 km" }]);
  });
  it("filtra pokemons com egg: 5 km", () => {
    expect(data.filtro([{ "egg": "2 km" }, { "egg": "5 km" }, { "egg": "10 km" }], "5 km")).toEqual([{ "egg": "5 km" }]);
  });
});

const ordemPokemon = [
  { "name": "Ivysaur" },
  { "name": "Bulbasaur" },
  { "name": "Venusaur" }
];

const ordemId = [
  { "id": 1 },
  { "id": 6 },
  { "id": 4 }
];

describe("Testando a função ordem", () => {
  it("é uma função", () => {
    expect(typeof data.ordem).toBe("function");
  });
  it("Esta ordenando por name", () => {
    expect(data.ordem(ordemPokemon, "name")).toEqual([{ "name": "Bulbasaur" }, { "name": "Ivysaur" }, { "name": "Venusaur" }]);
  });
  it("Esta ordenando por id", () => {
    expect(data.ordem(ordemId, "id")).toEqual([{ "id": 1 }, { "id": 4 }, { "id": 6 }]);
  });

});

describe("Testando a calculadora", () => {
  it("é uma função", () => {
    expect(typeof data.calculadora).toBe("function");
  });
  it("cálculo para velocidade baixa, ovo de 2 km, incubadora normal e 15 minutos diários", () => {
    expect(data.calculadora(4, 2, 1, 15)).toEqual(2);
  });
  it("variando o tempo diário de caminhada", () => {
    expect(data.calculadora(4, 2, 1, 5)).toEqual(6);
  });
  it("calculo para valores menores que 1", () => {
    expect(data.calculadora(4, 5, 1, 10000)).toEqual(1);
  });
});
