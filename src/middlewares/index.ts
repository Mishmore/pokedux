import { Middleware } from "redux";
import { RootState } from "../main";

export const logger: Middleware<object, RootState> =
  () => (next) => (action) => {
    console.log(action);
    next(action);
  };

export const capitalizer: Middleware<object, RootState> =
  () => (next) => (action) => {
    const formattedPayload = action.payload.map((elm) => ({
      ...elm,
      name: `${elm.name.substring(0, 1).toUpperCase()}${elm.name.substring(1)}`,
      abilitiesList: elm.abilities
        .filter((elm) => !elm.is_hidden)
        .map((elm) => elm.ability.name),
    }));

    next({
      ...action,
      payload: formattedPayload,
    });
  };
