import React from "react";
import Home from "./screens/home/Home";
import "./App.css";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="App">
        <Home></Home>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
