import { useSelector } from "react-redux";
import { selectPokemonData, selectPokemonList } from "../../redux/slice/pokedexSlice";

const Score = () => {
  const typedPokemon = useSelector(selectPokemonData);
  const pokemonList = useSelector(selectPokemonList);

  return <p className="text-4xl">{`${typedPokemon.length}/${pokemonList.length}`}</p>;
};

export default Score;
