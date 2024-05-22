import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import {
  StoreEnhancer,
  applyMiddleware,
  compose,
  legacy_createStore,
} from "redux";
import { pokemonsReducer } from "./reducers/pokemon.ts";

import { ChakraProvider } from "@chakra-ui/react";
import { logger, capitalizer } from "./middlewares";

const composedEnhancers: StoreEnhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, capitalizer)
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
