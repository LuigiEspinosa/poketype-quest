import { PokemonClient } from "pokenode-ts";

const fetchAllPokemon = async () => {
  const api = new PokemonClient();

  try {
    const pokemonList = await api.listPokemons(0, 151);
    return pokemonList.results;
  } catch (error) {
    console.error("Error fetching Pokémon:", error);
    return [];
  }
};

const getAllPokemon = async () => {
  const pokemon = await fetchAllPokemon();
  const pokemonNames = pokemon.map((p) => p.name);
  return pokemonNames;
};

export default getAllPokemon;
