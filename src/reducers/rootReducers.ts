import { combineReducers } from "redux";
import { pokemonsReducer } from "./pokemon";

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
});

export default rootReducer;
