import {
  ListItemText,
  List,
  ListItem,
  ListItemAvatar,
  Button,
} from "@material-ui/core";
import "./Todo.css";
import React from "react";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary="Todo... " secondary={props.todo.todo} />
      </ListItem>
      <DeleteForeverIcon
        onClick={(event) => db.collection("todos").doc(props.todo.id).delete()}
      />
    </List>
  );
}

export default Todo;
