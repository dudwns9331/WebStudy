import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";

ReactDOM.render(
  /**
   * Provider
   * Makes the Redux store available to the connect() calls in the component hierarchy below.
   */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
