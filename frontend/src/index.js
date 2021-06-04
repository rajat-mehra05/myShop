import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import "./bootstrap.min.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <Provider store={store}>
    {" "}
    <App />
  </Provider>,

  document.getElementById("root")
);

serviceWorkerRegistration.register();
