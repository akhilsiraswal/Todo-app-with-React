import React, { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

import { Button, Input, InputLabel, FormControl } from "@material-ui/core";

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState([]);

  // when the app loads, we need to listen to the database and fetch new todos as they git added/removed.

  useEffect(() => {
    //this code here... fires when the app.js loads..
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    //this will fire of when wwe click the button

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    setInput(""); // clear up the input after hitting enter..
  };
  return (
    <div className="App">
      <h1>Hello </h1>
      <form>
        <FormControl>
          <InputLabel> Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={addTodo}
        >
          Add todo
        </Button>

        <ul>
          {todos.map((todo) => (
            <Todo todo={todo} />

            // <li>{todo}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
