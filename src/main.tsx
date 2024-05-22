import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { StoreEnhancer, applyMiddleware, legacy_createStore } from "redux";
import { pokemonsReducer } from "./reducers/pokemon.ts";

import { ChakraProvider } from "@chakra-ui/react";
import { logger, capitalizer } from "./middlewares";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

// TODO: Another way of doing it ⬇️
// const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composedEnhancers: StoreEnhancer = composeAlt(
//   applyMiddleware(thunk, logger, capitalizer)
// );

const composedEnhancers: StoreEnhancer = composeWithDevTools(
  applyMiddleware(thunk, capitalizer, logger)
);

const store = legacy_createStore(pokemonsReducer, composedEnhancers);
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
