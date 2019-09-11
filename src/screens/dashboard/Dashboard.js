import React, { Component } from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <div style={{ height: "90vh" }}></div>
        <Navigation></Navigation>
      </React.Fragment>
    );
  }
}
export default Dashboard;
