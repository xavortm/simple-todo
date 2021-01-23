import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Todo from "./components/Todo/Todo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
  paper: {
    width: "100%",
    padding: theme.spacing(5),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="sm">
      <Paper className={classes.paper}>
        <Todo />
      </Paper>
    </Container>
  );
};

export default App;
