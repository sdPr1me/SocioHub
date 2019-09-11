import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Receipt from "@material-ui/icons/Receipt";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
import Sociate from "@material-ui/icons/PeopleOutlineOutlined";
import Upload from "@material-ui/icons/ControlPoint";

const useStyles = theme => ({
  root: {
    width: "100vw"
  },
  selectedRoot: {
    "&$selected": {
      color: "#501285"
    }
  },
  selected: {}
});
class Navigation extends Component {
  state = {
    currentNav: "newsfeed"
  };
  setNavigation = value => {
    this.setState({ currentNav: value });
  };
  render() {
    const { classes } = this.props;
    return (
      <BottomNavigation
        value={this.state.currentNav}
        onChange={(event, newValue) => {
          this.setNavigation(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="News Feed"
          value="newsfeed"
          classes={{ root: classes.selectedRoot, selected: classes.selected }}
          icon={<Receipt />}
        />
        <BottomNavigationAction
          label="New Post"
          value="uploadpost"
          classes={{ root: classes.selectedRoot, selected: classes.selected }}
          icon={<Upload />}
        />
        <BottomNavigationAction
          label="Add Sociate"
          value="addsociate"
          classes={{ root: classes.selectedRoot, selected: classes.selected }}
          icon={<Sociate />}
        />
        <BottomNavigationAction
          label="Business Center"
          value="businesscenter"
          classes={{ root: classes.selectedRoot, selected: classes.selected }}
          icon={<BusinessCenter />}
        />
      </BottomNavigation>
    );
  }
}
export default withStyles(useStyles)(Navigation);
