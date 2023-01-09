import React from "react";
import { Grid } from "@material-ui/core";
import PersonalVideoIcon from "@material-ui/icons/PersonalVideo";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function VideoUpload(props) {
  return (
    <div>
      <Grid>
        <input accept="video/*, video/mp4" key={props.uploadbutton} disabled={props.uploadbutton} type="file" name="file" id="file" className="inputfile" onChange={props.uploadHandler}/>
        <label htmlFor="file">
          <PersonalVideoIcon /> Upload a Video
        </label>
       {props.uploadbutton ? (
          <Grid>
         <p>{props.uploadedfile.name} <DeleteForeverIcon onClick={props.deleteUploadHandler} color="error"/></p>
         </Grid>
				) : null}
      </Grid> 
   
    </div>
  );
}
