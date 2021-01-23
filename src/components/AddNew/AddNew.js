import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Grid from "@material-ui/core/Grid";

const AddNew = ({ inputValue, handleSubmit, handleInput }) => {
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Grid
          spacing={2}
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
        >
          <Grid item xs>
            <TextField
              fullWidth
              onChange={handleInput}
              value={inputValue}
              label="Add new item"
            />
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit} color="primary" variant="contained">
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddNew;
