export async function fetchPokemonData(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const body = await response.json();
  // NOTE: debugging
  console.log(body);
  return body;
}

export async function fetchPokemonList() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
  );
  if (!response.ok) {
    throw new Error("HTTP error! status: ${response.status}");
  }
  const body = await response.json();
  // data.results is an array of objects { name, url }
  console.log(body.results);
  return body.results;
}
