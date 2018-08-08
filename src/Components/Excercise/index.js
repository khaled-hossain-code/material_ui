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
    overflowY: "auto"
  }
};

style.paperLeft = {
  ...style.paperRight,
  marginRight: 10
};

export default ({
  excercises,
  category,
  excercise: {
    id,
    title = "Welcome!",
    description = "Please select an excercise from the list on the left."
  },
  onSelect
}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={style.paperLeft}>
        {excercises.map(
          ([muscle, excercise]) =>
            category === "all" || muscle === category ? (
              <Fragment>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {muscle}
                </Typography>
                <List component="ul">
                  {excercise.map(({ title, id }) => (
                    <ListItem button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={style.paperRight}>
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
