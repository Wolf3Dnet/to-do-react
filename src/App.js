import React from "react";
import s from "./App.module.css";
import { Elements } from "./components/elements/elements";
import { TodoForm } from "./components/todoForm/Todoform";

export function App() {
  return (
    <div className={s.wrapper}>
      <h1>To do list</h1>
      <TodoForm />
      <Elements />
    </div>
  );
}
