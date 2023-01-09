import React from "react";
import {
  Grid,
  FormControl,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
const flexContainer = {
  display: "flex",
  flexDirection: "row",
  marginTop: 5,
};

export default function ConvertOptions(props) {
  return (
    <Grid>
      <FormControl component="fieldset">
        <FormLabel component="legend">Format Options</FormLabel>
        <RadioGroup
          style={flexContainer}
          aria-label="Format Options"
          value={props.formatvalue}
          onClick={props.changeHandler}
        >
          <FormControlLabel value="mp4" control={<Radio />} label="mp4" />
          <FormControlLabel value="flv" control={<Radio />} label="flv" />
          <FormControlLabel value="avi" control={<Radio />} label="avi" />
          <FormControlLabel value="webm" control={<Radio />} label="webm" />
          <FormControlLabel value="mov" control={<Radio />} label="mov" />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}
