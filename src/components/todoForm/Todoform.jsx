import React, { useState } from "react";
import s from "./Todoform.module.css";

const TodoForm = React.memo(({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");

  return (
    <div>
      <form>
        <input
          placeholder="Введите текст"
          type="text"
          value={todoTitle}
          className={s.input}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <input
          className={s.button}
          value="Add"
          onClick={() => {
            onAddTodo(todoTitle);
            setTodoTitle("");
          }}
          type="button"
        />
      </form>
    </div>
  );
});
export { TodoForm };
