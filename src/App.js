import React, { useState } from "react";
import s from "./App.module.css";
import { Elements } from "./components/elements/elements";
import { TodoForm } from "./components/todoForm/Todoform";

function App() {
  const [list, setList] = useState([
    { id: 0, title: "First try", isComplete: false },
    { id: 1, title: "Second try", isComplete: false },
  ]);

  const addTodo = (title) => {
    if (title !== "") {
      setList([
        ...list,
        { id: list.length + 1, title: title, isComplete: false },
      ]);
    }
  };

  const removeTodo = (id) => {
    setList([...list].filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setList(
      [...list].map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
    );
  };

  console.log("list =>", list);
  return (
    <div className={s.wrapper}>
      <h1>To do list</h1>
      <TodoForm addTodo={addTodo} />
      <Elements
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        list={list}
      />
    </div>
  );
}
export { App };
