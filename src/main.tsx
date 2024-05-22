import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import { pokemonsReducer } from "./reducers/pokemon.ts";

import { ChakraProvider } from "@chakra-ui/react";

const store = legacy_createStore(pokemonsReducer);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
