import { getPokemonDetails } from "../api";
import { Pokemon } from "../reducers/pokemon";
import { ActionType } from "./types";

export const setPokemons = (payload: Array<Pokemon>) => ({
  type: ActionType.SET_POKEMONS,
  payload,
});

export const getPokemonWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const details = await Promise.all(
      pokemons.map((elm) => getPokemonDetails(elm))
    );

    dispatch(setPokemons(details));
  };
