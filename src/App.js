import React, { useState } from "react";
import s from "./App.module.css";
import { Elements } from "./components/elements/elements";
import { TodoForm } from "./components/todoForm/Todoform";

function App() {
  const [list, setList] = useState([
    { id: 0, title: "First try", isComplete: false, isEdit: false },
    { id: 1, title: "Second try", isComplete: false, isEdit: false },
  ]);

  const addTodo = (title) => {
    if (title !== "") {
      setList([
        ...list,
        { id: list.length + 1, title: title, isComplete: false, isEdit: false },
      ]);
    }
  };

  const removeTodo = (id) => {
    setList([...list].filter((todo) => todo.id !== id));
  };

  const completeTodo = (id) => {
    setList(
      [...list].map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      })
    );
  };

  const editTodo = (id) => {
    setList(
      [...list].map((todo) => {
        if (todo.id === id) {
          todo.isEdit = !todo.isEdit;
        }
        return todo;
      })
    );
  };

  const agreeEdit = (title, id) => {
    setList(
      [...list].map((todo) => {
        if (todo.id === id) {
          todo.title = title;
          todo.isEdit = !todo.isEdit;
        }
        return todo;
      })
    );
  };

  const undoEdit = (id) => {
    setList(
      [...list].map((todo) => {
        if (todo.id === id) {
          todo.isEdit = !todo.isEdit;
        }
        return todo;
      })
    );
  };

  console.log("list =>", list);
  return (
    <div className={s.wrapper}>
      <h1>To do list</h1>
      <TodoForm addTodo={addTodo} />
      <Elements
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        list={list}
        editTodo={editTodo}
        agreeEdit={agreeEdit}
        undoEdit={undoEdit}
      />
    </div>
  );
}
export { App };
