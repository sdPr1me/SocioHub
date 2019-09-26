import React, { Component } from "react";
import Home from "./screens/home/Home";
import Dashboard from "./screens/dashboard/Dashboard";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./App.css";
import axios from "axios";
import { withStyles, fade } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
const useStyles = theme => ({
  svg: {
    color: "#ffffff"
  }
});
class App extends Component {
  state = {
    isLoading: true,
    isAuthenticated: false
  };
  componentDidMount() {
    let deviceId = localStorage.getItem("DEVICE_ID");
    axios
      .post(
        "https://asia-northeast1-sociohub-project.cloudfunctions.net/getAuthentication",
        { deviceId: deviceId }
      )
      .then(response => {
        let authenticatedState = response.data;
        if (authenticatedState === true) {
          this.setState({ isLoading: false, isAuthenticated: true });
        } else {
          this.setState({ isLoading: false, isAuthenticated: false });
        }
      });
  }
  render() {
    const { classes } = this.props;
    return this.state.isLoading === true ? (
      <div className="loader">
        <CircularProgress classes={{ svg: classes.svg }} size={100} />
      </div>
    ) : this.state.isAuthenticated === false ? (
      <Home></Home>
    ) : (
      <Dashboard></Dashboard>
    );
  }
}

export default withWidth()(withStyles(useStyles)(App));
