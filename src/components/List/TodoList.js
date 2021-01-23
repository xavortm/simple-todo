import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";

const TodoList = ({ list, handleClick, handleDelete }) => {
  // We don't want an empty list.
  if (undefined === list || null === list) {
    return null;
  }

  // console.log(list);
  const listItems = list.map((element, index) => {
    const labelId = `checkbox-list-label-${element.date}`;

    return (
      <ListItem
        dense
        button
        key={element.date}
        onClick={() => handleClick(element, index)}
        style={{ opacity: element.completed ? 0.5 : 1 }}
      >
        <ListItemIcon>
          <Checkbox
            checked={element.completed}
            edge="start"
            disableRipple
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText primary={element.value} />

        <ListItemSecondaryAction onClick={() => handleDelete(index)}>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return <List>{listItems}</List>;
};
export default TodoList;
