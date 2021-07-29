import React, { useState } from "react";
import s from "./App.module.css";
import { Elements } from "./components/elements/elements";
import { TodoForm } from "./components/todoForm/Todoform";

function App() {
  const [list, setList] = useState([{ id: 0, title: "First try" }]);

  const addTodo = (title) => {
    if (title !== "") {
      setList([...list, { id: list.length + 1, title: title }]);
    }
  };

  console.log("list =>", list);
  return (
    <div className={s.wrapper}>
      <h1>To do list</h1>
      <TodoForm addTodo={addTodo} />
      <Elements />
    </div>
  );
}
export { App };
