import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import {
  StoreEnhancer,
  UnknownAction,
  applyMiddleware,
  legacy_createStore,
} from "redux";

import { ChakraProvider } from "@chakra-ui/react";
import { logger, capitalizer } from "./middlewares";
import { ThunkAction, ThunkDispatch, thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducers.ts";

const composedEnhancers: StoreEnhancer = composeWithDevTools(
  applyMiddleware(thunk, capitalizer, logger)
);

const store = legacy_createStore(rootReducer, composedEnhancers);
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export type AppThunkDispatch = ThunkDispatch<RootState, unknown, UnknownAction>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
