import React from "react";
import s from "./todo.module.css";

export const Todo = ({ value, id, removeTodo, completeTodo, isComplete }) => {
  console.log("value =>", value);
  console.log("id =>", id);
  return (
    <li className={isComplete ? s.liComplete : s.li}>
      <button
        onClick={() => completeTodo(id)}
        className={isComplete ? s.completeButtonActive : s.completeButton}
      ></button>
      <span className={s.span}>{value}</span>
      <button onClick={() => removeTodo(id)} className={s.delete}>
        Delete
      </button>
    </li>
  );
};
