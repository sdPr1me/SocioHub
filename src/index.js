import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import uuidv4 from "uuid/v4";

if (localStorage.getItem("DEVICE_ID") === null) {
  localStorage.setItem("DEVICE_ID", uuidv4());
}
ReactDOM.render(<App />, document.getElementById("root"));
