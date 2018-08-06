import React from "react";
import { AppBar, Toolbar, Typography } from "material-ui";

export default prop => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        Excercise Database
      </Typography>
    </Toolbar>
  </AppBar>
);