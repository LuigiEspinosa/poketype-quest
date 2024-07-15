import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPokemonData,
  selectPokemonList,
  setPokemonData,
} from "../../redux/slice/pokedexSlice";

interface InputProps {
  disabled: boolean;
}

const Input: FC<InputProps> = ({ disabled }) => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();
  const typedPokemon = useSelector(selectPokemonData);
  const pokemonList = useSelector(selectPokemonList);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const pokemon = e.target.value.toLowerCase();
    setInput(pokemon);

    if (pokemonList.includes(pokemon) && !typedPokemon.includes(pokemon)) {
      dispatch(setPokemonData(pokemon));
      setInput("");
    }
  };

  const handleInputSubmit = (e: FormEvent) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <form onSubmit={handleInputSubmit} className="mb-4">
      <input
        type="text"
        disabled={disabled}
        value={input}
        onChange={handleInputChange}
        placeholder="Type a Pokémon name"
        className="border border-gray-300 p-2 rounded"
      />

      <button type="submit" className="ml-2 px-4 py-2 bg-red-500 text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default Input;
