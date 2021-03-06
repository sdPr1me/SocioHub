import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./index.css";
export default function SimpleButton(props) {
  const { ...rest } = props;
  return (
    <Button
      variant="contained"
      className="simple-button"
      style={{ width: "98%", marginTop: "10px" }}
      {...rest}
    >
      <Typography variant="button" style={{ color: "white", padding: "0.5em" }}>
        {props.title}
      </Typography>
    </Button>
  );
}
