import React from "react";
import Home from "./screens/home/Home";
import Dashboard from "./screens/dashboard/Dashboard";
import "./App.css";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
function App() {
  return (
    // <MuiPickersUtilsProvider utils={DateFnsUtils}>
    //   <div className="App">
    //     <Home></Home>
    //   </div>
    // </MuiPickersUtilsProvider>
    <Dashboard></Dashboard>
  );
}

export default App;
