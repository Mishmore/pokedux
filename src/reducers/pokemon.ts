import { ActionType } from "../actions/types";

export interface Pokemon {
  name: string;
  url: string;
  abilitiesList?: Array<string>;
  sprites: {
    front_default: string;
  };
}

export interface PokemonState {
  pokemons: Pokemon[];
}

const initialState: PokemonState = {
  pokemons: [],
};

interface SetPokemonsAction {
  type: typeof ActionType.SET_POKEMONS;
  payload: Pokemon[];
}

export type PokemonAction = SetPokemonsAction;

export const pokemonsReducer = (
  state = initialState,
  action: PokemonAction
) => {
  switch (action.type) {
    case ActionType.SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
};
