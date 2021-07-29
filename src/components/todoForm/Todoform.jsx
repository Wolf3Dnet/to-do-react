import React, { useState } from "react";
import s from "./Todoform.module.css";

export const TodoForm = () => {
  const [list, setList] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  const addTodo = () => {
    if (todoTitle !== "") {
      setList([...list, { title: todoTitle, id: list.length + 1 }]);
      setTodoTitle("");
    }
  };

  console.log("list =>", list);

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
          onClick={addTodo}
          type="button"
        />
      </form>
    </div>
  );
};
