import { resolvePromise } from "./resolvePromise";
import { getPokemon } from "./api";

/* 
   The Model keeps the state of the application (Application State). 
   It is an abstract object, i.e. it knows nothing about graphics and interaction.
*/
const model = {
  game: "PokeIdle",
  url: "https://pokeapi.co/api/v2/pokemon/pikachu",
  data: "",
  pokemonPromiseState: {},

  getData(name) {
    resolvePromise(getPokemon(name), this.pokemonPromiseState);
  },
};

export { model };
