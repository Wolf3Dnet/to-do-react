import React from "react";
import s from "./Todoform.module.css";

export const TodoForm = React.memo((props) => {
  return (
    <div>
      <form>
        <input
          placeholder="Введите текст"
          type="text"
          value={props.todoTitle}
          className={s.input}
          onChange={(e) => props.setTodoTitle(e.target.value)}
        />
        <input
          className={s.button}
          value="Add"
          onClick={props.addTodo}
          type="button"
        />
      </form>
    </div>
  );
});
