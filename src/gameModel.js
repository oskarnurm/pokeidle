import { resolvePromise } from "./resolvePromise";
import { fetchPokemonData, fetchPokemonList } from "./api";

/* 
   The Model keeps the state of the application (Application State). 
   It is an abstract object, i.e. it knows nothing about graphics and interaction.
*/
export const model = {
  data: "",
  pokemonPromiseState: {},
  listPromiseState: {},
  name: "",

  loadData(name) {
    const promise = fetchPokemonData(name);
    resolvePromise(promise, this.pokemonPromiseState);
  },

  getName() {
    return this.pokemonPromiseState.data?.name || "";
  },

  loadPokemonList() {
    resolvePromise(fetchPokemonList(), this.listPromiseState);
  },

  getList() {
    return this.listPromiseState.data || [];
  },
};
