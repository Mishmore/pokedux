import { Middleware } from "redux";
import { RootState } from "../main";

export const logger: Middleware<object, RootState> =
  () => (next) => (action) => {
    console.log(action);
    next(action);
  };

export const capitalizer: Middleware<object, RootState> =
  () => (next) => (action) => {
    const formattedPayload = action.action.payload.map((elm) => ({
      ...elm,
      name: `${elm.name.substring(0, 1).toUpperCase()}${elm.name.substring(1)}`,
    }));
    next({
      ...action,
      action: { ...action.action, payload: formattedPayload },
    });
  };
