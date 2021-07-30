import React from "react";
import s from "./todo.module.css";
import DoneOutlinedIcon from "@material-ui/icons/DoneOutlined";
import UndoOutlinedIcon from "@material-ui/icons/UndoOutlined";
import { useState } from "react";

export const Todo = ({
  value,
  id,
  removeTodo,
  completeTodo,
  isComplete,
  isEdit,
  editTodo,
  agreeEdit,
  undoEdit,
}) => {
  // console.log("value =>", value);
  // console.log("id =>", id);
  // console.log("isEdit =>", isEdit);

  const [newTodo, setNewTodo] = useState(value);

  if (isEdit === false) {
    return (
      <li className={isComplete ? s.liComplete : s.li}>
        <button
          onClick={() => completeTodo(id)}
          className={isComplete ? s.completeButtonActive : s.completeButton}
        ></button>
        <span onClick={() => editTodo(id)} className={s.span}>
          {value}
        </span>
        <button onClick={() => removeTodo(id)} className={s.delete}>
          Delete
        </button>
      </li>
    );
  } else {
    return (
      <li className={isComplete ? s.liComplete : s.li}>
        <button
          disabled={true}
          onClick={() => completeTodo(id)}
          className={isComplete ? s.completeButtonActive : s.completeButton}
        ></button>
        <textarea
          onChange={(e) => setNewTodo(e.target.value)}
          defaultValue={value}
          className={s.textarea}
        ></textarea>
        <button
          onClick={() => {
            console.log("new Todo =>", { newTodo });
            agreeEdit(newTodo, id);
          }}
          className={s.textareaAdd}
        >
          {<DoneOutlinedIcon style={{ fontSize: 20 }}></DoneOutlinedIcon>}
        </button>
        <button
          onClick={() => {
            undoEdit(id);
          }}
          className={s.textareaUndo}
        >
          {<UndoOutlinedIcon style={{ fontSize: 20 }}></UndoOutlinedIcon>}
        </button>
      </li>
    );
  }
};
