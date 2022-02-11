import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./app/app";
import store from "./app/store"


ReactDom.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
