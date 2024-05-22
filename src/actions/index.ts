import { ActionType } from "./types";

export const setPokemons = (payload: Array<{ name: string; url: string }>) => ({
  type: ActionType.SET_POKEMONS,
  payload,
});
