import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

export type PokemonState = {
  pokemonData: string[];
  pokemonList: string[];
};

const initialState: PokemonState = {
  pokemonData: [],
  pokemonList: [],
};

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    setPokemonData: (state, action: PayloadAction<string>) => {
      state.pokemonData.push(action.payload);
    },
    setPokemonList(state, action: PayloadAction<string[]>) {
      state.pokemonList = action.payload;
    },
  },
});

export const { setPokemonData, setPokemonList } = pokedexSlice.actions;

export const selectPokemonData = (state: RootState) => state.pokedex.pokemonData;
export const selectPokemonList = (state: RootState) => state.pokedex.pokemonList;

export default pokedexSlice.reducer;
