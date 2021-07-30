import React from "react";
import s from "./todoOutput.module.css";

export const TodoOutput = ({
  onEditTodo,
  isComplete,
  onRemoveTodo,
  value,
  id,
  onCompleteTodo,
}) => {
  return (
    <li className={isComplete ? s.liComplete : s.li}>
      <button
        onClick={() => onCompleteTodo(id)}
        className={isComplete ? s.completeButtonActive : s.completeButton}
      ></button>
      <span onClick={() => onEditTodo(id)} className={s.span}>
        {value}
      </span>
      <button onClick={() => onRemoveTodo(id)} className={s.delete}>
        Delete
      </button>
    </li>
  );
};
