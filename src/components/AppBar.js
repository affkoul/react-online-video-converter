import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography, AppBar, Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    flexGrow: 1,
    opacity: 0.9,
  },
  title: {
    flexGrow: 1,
    padding: 20,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div align="center">
      <Grid item xs={6} className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" className={classes.title}>
              GAC Video Conversion Tool
            </Typography>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}
