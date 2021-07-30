import React from "react";
import { Todo } from "../todo/todo";
import s from "./elements.module.css";

export const Elements = React.memo(
  ({
    list,
    onRemoveTodo,
    onCompleteTodo,
    onEditTodo,
    onAgreeEdit,
    onUndoEdit,
  }) => {
    return (
      <ul className={s.ul}>
        {list.map((todo) => (
          <Todo
            key={todo.id}
            value={todo.title}
            id={todo.id}
            isComplete={todo.isComplete}
            onRemoveTodo={onRemoveTodo}
            onCompleteTodo={onCompleteTodo}
            isEdit={todo.isEdit}
            onEditTodo={onEditTodo}
            onAgreeEdit={onAgreeEdit}
            onUndoEdit={onUndoEdit}
          />
        ))}
      </ul>
    );
  }
);
