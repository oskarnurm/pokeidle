/* 
   The Model keeps the state of the application (Application State). 
   It is an abstract object, i.e. it knows nothing about graphics and interaction.
*/
const model = {
  game: "PokeIdle",
  url: "https://pokeapi.co/api/v2/pokemon/pikachu",
  data: "",

  async getData() {
    const response = await fetch(this.url);
    this.data = await response.json();
    console.log(this.data);
  },
};

export { model };
