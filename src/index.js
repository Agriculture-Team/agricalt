import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import configureStore from "./store/configureStore";
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  rootElement
);
