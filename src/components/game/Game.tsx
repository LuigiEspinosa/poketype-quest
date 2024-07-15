import { useEffect, useState } from "react";
import Input from "../input/Input";
import List from "../list/List";
import Timer from "../timer/Timer";

import { selectPokemonData, selectPokemonList } from "../../redux/slice/pokedexSlice";
import { useSelector } from "react-redux";
import Score from "../score/Score";

const Game = () => {
  const pokemonData = useSelector(selectPokemonData);
  const typedPokemon = useSelector(selectPokemonData);
  const pokemonList = useSelector(selectPokemonList);

  const [isTimerStarted, setIsTimerStarted] = useState<boolean>(false);
  const [isTimerExpired, setIsTimerExpired] = useState<boolean>(false);
  const [isWinner, setIsWinner] = useState<boolean>(false);

  const handleTimerEnd = () => {
    setIsTimerExpired(true);
  };

  useEffect(() => {
    if (pokemonData.length > 0) {
      setIsTimerStarted(true);
    }
  }, [pokemonData]);

  useEffect(() => {
    if (pokemonData.length > 0 && typedPokemon.length === pokemonList.length) {
      setIsTimerExpired(true);
      setIsTimerStarted(false);
      setIsWinner(true);
    }
  }, [pokemonData, typedPokemon, pokemonList]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mt-4 mb-14">Pokémon Typing Game</h1>

      <section className="flex flex-col items-center">
        <div className="flex justify-between w-full mb-4 min-w-[600px]">
          <Input disabled={isTimerExpired} />

          <div className="flex">
            <Score />

            <div className="ml-8">
              {isTimerStarted ? <Timer onEnd={handleTimerEnd} /> : <p className="text-4xl">5:00</p>}
            </div>
          </div>
        </div>

        {!isWinner ? <List /> : <p className="text-center text-4xl">Congratulations!!</p>}
      </section>
    </main>
  );
};

export default Game;
