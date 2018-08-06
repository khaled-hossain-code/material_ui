import React, { Fragment } from "react";
import { Grid, Paper, Typography, List } from "material-ui";
import { ListItem, ListItemText } from "material-ui/List";
import RightPane from "./RightPane";
import LeftPane from "./LeftPane";

const style = {
  paperRight: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'auto'
  }
};

style.paperLeft = {
  ...style.paperRight,
  marginRight: 10
};

export default ({ excercises }) => (
  <Grid container>
    <Grid item sm>
      <Paper style={style.paperLeft}>
        {excercises.map(([muscle, excercise]) => (
          <Fragment>
            <Typography
              variant="headline"
              style={{ textTransform: "capitalize" }}
            >
              {muscle}
            </Typography>
            <List component="ul">
              {excercise.map(({ title }) => (
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={style.paperRight}>
      <Typography variant="display1">Welcome!</Typography>
      <Typography variant="subheading" style={{marginTop: 20}}>
        Please select an excercise from the list on the left.
      </Typography>
      </Paper>
    </Grid>
  </Grid>
);
