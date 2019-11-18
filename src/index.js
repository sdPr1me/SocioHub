import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import uuidv4 from "uuid/v4";
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
if (localStorage.getItem("DEVICE_ID") === null) {
  localStorage.setItem("DEVICE_ID", uuidv4());
}
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);
