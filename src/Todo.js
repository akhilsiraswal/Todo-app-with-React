import {
  ListItemText,
  List,
  ListItem,
  ListItemAvatar,
} from "@material-ui/core";
import "./Todo.css";
import React from "react";

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary="Todo... " secondary={props.text} />
      </ListItem>
    </List>
  );
}

export default Todo;
