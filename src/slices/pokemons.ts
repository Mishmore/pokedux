import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemonList } from "../api";

export interface Pokemon {
  name: string;
  url: string;
  abilitiesList?: Array<string>;
  sprites: {
    front_default: string;
  };
  id: string;
  favorite: boolean;
}

export interface PokemonState {
  pokemons: Pokemon[];
}

const initialState: PokemonState = {
  pokemons: [],
};

export const fetchPokemonWithDetails = createAsyncThunk(
  "pokemons/fetchPokemonWithDetails",
  async (_, { dispatch }) => {
    const pokemons = await getPokemonList();
    const details = await Promise.all(
      pokemons.results.map((elm) => getPokemonDetails(elm.url))
    );
    dispatch(setPokemons(details));
  }
);

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      );

      if (currentPokemonIndex != -1) {
        state.pokemons[currentPokemonIndex].favorite =
          !state.pokemons[currentPokemonIndex].favorite;
      }
    },
  },
});

export const { setPokemons, setFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
