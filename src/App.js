import React, { Component } from "react";
import Home from "./screens/home/Home";
import Dashboard from "./screens/dashboard/Dashboard";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./App.css";
import { withStyles, fade } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import store from "./store/store";
import { userAuthenticationStarted } from "./actions/authenticationActions";
import { Redirect } from "react-router-dom";
import Routes from "./Routes";
const useStyles = (theme) => ({
  svg: {
    color: "#ffffff",
  },
});
class App extends Component {
  componentDidMount() {
    this.props.getAuthentication();
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        {this.props.isLoading === true ? (
          <div className="loader">
            <CircularProgress classes={{ svg: classes.svg }} size={100} />
          </div>
        ) : (
          <Routes></Routes>
        )}
        {this.props.isLoading === false ? (
          this.props.isAuthenticated === false ? (
            <Redirect to="/" />
          ) : (
            <Redirect to="/dashboard" />
          )
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    isAuthenticated: state.appState.isAuthenticated,
    isLoading: state.appState.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAuthentication: () => {
      console.log("Dispatching");
      dispatch(userAuthenticationStarted());
    },
  };
};
export default withWidth()(
  connect(mapStatetoProps, mapDispatchToProps)(withStyles(useStyles)(App))
);
