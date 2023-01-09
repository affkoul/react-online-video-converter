import React from "react";
import { Button } from "@material-ui/core";
import SwitchVideoIcon from '@material-ui/icons/SwitchVideo';

export default function ConvertButton(props) {
let button = props.convertbtn;
if (props.formatvalue !== "" && props.uploadbtn === true) {
  button = false;
}
  return (
    <div>
      <Button
        onClick={props.convert}
        style={{ width: "20%", margin: 20 }}
        disabled={button}
        variant="contained"
        color="primary"
        startIcon={<SwitchVideoIcon/>}
      >
        {props.converttext}
      </Button>
    </div>
  );
}
