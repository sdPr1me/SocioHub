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
class Home extends Component {
  state = {
    isSignUp: false,
    selectedDOB: null,
    selectedGender: null
  };
  toggleSignUp = () => {
    if (this.state.isSignUp === false) {
      this.setState({ isSignUp: true });
    } else {
      this.setState({ isSignUp: false });
    }
  };
  render() {
    return (
      <Grid container>
        <Grid item md={6} className="main-div">
          <div>
            <img src={logo} width={150} height={150}></img>
          </div>
          <div>
            <img src={nameWhite} width={400} height={75}></img>
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
        <Grid item md={6} className="main-div">
          {this.state.isSignUp === false ? (
            <React.Fragment>
              <Card>
                <CardContent>
                  <form>
                    <TextField
                      required
                      id="outlined-email-input"
                      label="Email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      margin="normal"
                      variant="outlined"
                      style={{ minWidth: "25em" }}
                    />
                    <TextField
                      required
                      id="outlined-password-input"
                      label="Password"
                      style={{ minWidth: "25em" }}
                      type="password"
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
                    />
                    <SimpleButton title="Sign In" size="large"></SimpleButton>
                  </form>
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
                  <form>
                    <TextField
                      required
                      id="outlined-name-input"
                      label="Name"
                      name="name"
                      autoComplete="email"
                      margin="normal"
                      variant="outlined"
                      style={{ minWidth: "25em" }}
                    />
                    <TextField
                      required
                      id="outlined-email-input"
                      label="Email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      margin="normal"
                      variant="outlined"
                      style={{ minWidth: "25em" }}
                    />
                    <TextField
                      required
                      id="outlined-password-input"
                      label="Password"
                      style={{ minWidth: "25em" }}
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
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
                      onChange={selDate =>
                        this.setState({ selectedDOB: selDate })
                      }
                      style={{ minWidth: "25em", marginTop: "15px" }}
                    />
                    <FormControl
                      style={{
                        textAlign: "left",
                        minWidth: "25em",
                        marginTop: "15px"
                      }}
                      required
                    >
                      <FormLabel>Gender</FormLabel>
                      <RadioGroup
                        aria-label="position"
                        name="gender"
                        value={this.state.selectedGender}
                        onChange={e => {
                          this.setState({ selectedGender: e.target.value });
                        }}
                        row
                      >
                        <FormControlLabel
                          value="Male"
                          control={<Radio />}
                          label="Male"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="Female"
                          control={<Radio />}
                          label="Female"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="Others"
                          control={<Radio />}
                          label="Others"
                          labelPlacement="end"
                        />
                      </RadioGroup>
                    </FormControl>
                    <SimpleButton
                      title="Sign Up for Sociohub"
                      size="large"
                    ></SimpleButton>
                  </form>
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
    );
  }
}
export default Home;
