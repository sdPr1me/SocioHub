import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import logo from "../../assets/logo.png";
import nameWhite from "../../assets/name-white.png";
import SimpleButton from "../../components/SimpleButton";
import "./home.css";
import { KeyboardDatePicker } from "@material-ui/pickers";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles, fade } from "@material-ui/core/styles";
import dateFormat from "dateformat";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
const useStyles = theme => ({
  radioRoot: {
    "&:hover": {
      backgroundColor: fade("#76229E", 0.08)
    },
    "&$checked": {
      color: "#501285",
      "&:hover": {
        backgroundColor: fade("#501285", 0.08),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  },
  checked: {}
});
class Home extends Component {
  state = {
    isSignUp: false,
    selectedDOB: null,
    selectedGender: null,
    emailId: "",
    password: "",
    name: ""
  };
  toggleSignUp = () => {
    if (this.state.isSignUp === false) {
      this.setState({ isSignUp: true, password: "" });
    } else {
      this.setState({ isSignUp: false, password: "" });
    }
  };
  handleSignIn = () => {
    console.log(this.state.emailId + "  " + this.state.password);
  };
  handleSignUp = () => {
    console.log(
      this.state.name +
        " " +
        this.state.emailId +
        "  " +
        this.state.password +
        " " +
        this.state.selectedDOB +
        " " +
        this.state.selectedGender
    );
  };
  render() {
    const { classes } = this.props;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="App">
          <Grid container className="container-div">
            <Grid item md={6} sm={12} xs={12} className="main-div">
              <div>
                <img src={logo} width="100em" height="100em"></img>
              </div>
              <div>
                <img src={nameWhite} width="100%"></img>
              </div>
              <div>
                <Typography
                  variant="overline"
                  style={{ fontWeight: "bolder", color: "white" }}
                >
                  The Society Of New Age
                </Typography>
              </div>
            </Grid>
            <Grid item md={6} sm={12} xs={12} className="main-div">
              {this.state.isSignUp === false ? (
                <React.Fragment>
                  <Card>
                    <CardContent>
                      <TextField
                        required
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        value={this.state.emailId}
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        className="form-text-fields"
                        onChange={e => {
                          this.setState({ emailId: e.target.value });
                        }}
                      />
                      <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        className="form-text-fields"
                        type="password"
                        value={this.state.password}
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={e => {
                          this.setState({ password: e.target.value });
                        }}
                      />
                      <SimpleButton
                        title="Sign In"
                        size="large"
                        onClick={this.handleSignIn}
                      ></SimpleButton>
                    </CardContent>
                  </Card>
                  <Typography
                    variant="h5"
                    style={{ color: "white", margin: "10px 0px" }}
                  >
                    OR
                  </Typography>
                  <Card>
                    <CardContent>
                      <SimpleButton
                        title="Sign Up for Sociohub"
                        size="large"
                        onClick={this.toggleSignUp}
                      ></SimpleButton>
                    </CardContent>
                  </Card>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Card>
                    <CardContent>
                      <TextField
                        required
                        id="outlined-name-input"
                        label="Name"
                        name="name"
                        value={this.state.name}
                        autoComplete="name"
                        margin="normal"
                        variant="outlined"
                        className="form-text-fields"
                        onChange={e => {
                          this.setState({ name: e.target.value });
                        }}
                      />
                      <TextField
                        required
                        id="outlined-email-input-signup"
                        label="Email"
                        type="email"
                        name="email"
                        value={this.state.emailId}
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        className="form-text-fields"
                        onChange={e => {
                          this.setState({ emailId: e.target.value });
                        }}
                      />
                      <TextField
                        required
                        id="outlined-password-input-signup"
                        label="Password"
                        className="form-text-fields"
                        autoComplete="new-password"
                        value={this.state.password}
                        type="password"
                        name="password"
                        margin="normal"
                        variant="outlined"
                        onChange={e => {
                          this.setState({ password: e.target.value });
                        }}
                      />
                      <KeyboardDatePicker
                        required
                        autoOk
                        variant="inline"
                        inputVariant="outlined"
                        label="Date Of Birth"
                        format="dd/MM/yyyy"
                        value={this.state.selectedDOB}
                        InputAdornmentProps={{ position: "end" }}
                        onChange={selDate => {
                          let d = dateFormat(selDate, "dd-mmm-yyyy");
                          this.setState({ selectedDOB: d });
                        }}
                        style={{
                          marginTop: "15px"
                        }}
                        className="form-text-fields"
                      />
                      <FormControl
                        style={{
                          textAlign: "left",
                          marginTop: "15px"
                        }}
                        className="form-text-fields"
                        required
                      >
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup
                          aria-label="position"
                          name="gender"
                          onChange={e => {
                            this.setState({ selectedGender: e.target.value });
                          }}
                          row
                        >
                          <FormControlLabel
                            control={
                              <Radio
                                value="Male"
                                classes={{
                                  root: classes.radioRoot,
                                  checked: classes.checked
                                }}
                              />
                            }
                            label="Male"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            control={
                              <Radio
                                value="Female"
                                classes={{
                                  root: classes.radioRoot,
                                  checked: classes.checked
                                }}
                              />
                            }
                            label="Female"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            control={
                              <Radio
                                value="Other"
                                classes={{
                                  root: classes.radioRoot,
                                  checked: classes.checked
                                }}
                              />
                            }
                            label="Other"
                            labelPlacement="end"
                          />
                        </RadioGroup>
                      </FormControl>
                      <SimpleButton
                        title="Sign Up for Sociohub"
                        size="large"
                        onClick={this.handleSignUp}
                      ></SimpleButton>
                    </CardContent>
                  </Card>
                  <Typography
                    variant="h5"
                    style={{ color: "white", margin: "10px 0px" }}
                  >
                    OR
                  </Typography>
                  <Card>
                    <CardContent>
                      <SimpleButton
                        title="Sign In"
                        onClick={this.toggleSignUp}
                        size="large"
                      ></SimpleButton>
                    </CardContent>
                  </Card>
                </React.Fragment>
              )}
            </Grid>
          </Grid>
        </div>
      </MuiPickersUtilsProvider>
    );
  }
}
export default withStyles(useStyles)(Home);
