import React, { useState } from "react";
import s from "./App.module.css";
import { Elements } from "./components/elements/elements";
import { TodoForm } from "./components/todoForm/Todoform";

export function App() {
  const [list, setList] = useState([{ id: 0, title: "First try" }]);
  const [todoTitle, setTodoTitle] = useState("");

  const addTodo = () => {
    if (todoTitle !== "") {
      setList([...list, { id: list.length + 1, title: todoTitle }]);
      setTodoTitle("");
    }
  };

  console.log("list =>", list);
  return (
    <div className={s.wrapper}>
      <h1>To do list</h1>
      <TodoForm
        list={list}
        todoTitle={todoTitle}
        setList={setList}
        setTodoTitle={setTodoTitle}
        addTodo={addTodo}
      />
      <Elements />
    </div>
  );
}
