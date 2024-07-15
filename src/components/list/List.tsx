import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPokemonData,
  selectPokemonList,
  setPokemonList,
} from "../../redux/slice/pokedexSlice";
import getAllPokemon from "../../lib/pokedex";

const List = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(selectPokemonList);
  const typedPokemon = useSelector(selectPokemonData);
  const hasPokemon = (pokemon: string) => typedPokemon.includes(pokemon);

  useEffect(() => {
    const fetchPokemon = async () => {
      const list = await getAllPokemon();
      dispatch(setPokemonList(list));
    };

    fetchPokemon();
  }, [dispatch]);

  return (
    <>
      {pokemonList.length <= 0 ? <p className="text-center text-4xl">Loading...</p> : null}

      <div className="grid grid-cols-12 gap-4">
        {pokemonList.map((pokemon, index) => (
          <div
            key={index}
            className={`
              rounded border min-h-11 min-w-28 p-2 capitalize
              ${hasPokemon(pokemon) ? "bg-blue-950" : "bg-gray-300"}
          `}
          >
            {hasPokemon(pokemon) ? pokemon : ""}
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
