import { combineReducers } from "redux";

import pokemonsReducer from "../slices/pokemons";

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});

export default rootReducer;
