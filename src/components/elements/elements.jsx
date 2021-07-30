import React from "react";
import { Todo } from "../todo/todo";
import s from "./elements.module.css";

const Elements = React.memo(
  ({ list, removeTodo, completeTodo, editTodo, agreeEdit, undoEdit }) => {
    const todoElements = list.map((todo) => (
      <Todo
        key={todo.id}
        value={todo.title}
        id={todo.id}
        isComplete={todo.isComplete}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        isEdit={todo.isEdit}
        editTodo={editTodo}
        agreeEdit={agreeEdit}
        undoEdit={undoEdit}
      />
    ));

    console.log("todoElements =>", todoElements);

    return <ul className={s.ul}>{todoElements}</ul>;
  }
);

export { Elements };
