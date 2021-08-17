import React, { useCallback, useState } from 'react';
import s from './App.module.css';
import { Elements } from './components/elements/elements';
import { TodoForm } from './components/todoForm/Todoform';

function App() {
  const [list, setList] = useState([]);

  const handleAddTodo = useCallback(
    (title) => {
      if (title !== '') {
        setList([
          ...list,
          {
            id: Math.random(),
            title: title,
            isComplete: false,
            isEdit: false,
          },
        ]);

        console.log('handleAddTodo сработала');
      }
    },
    [list]
  );

  const handleRemoveTodo = useCallback(
    (id) => {
      setList([...list].filter((todo) => todo.id !== id));
      console.log('handleRemoveTodo сработала');
    },
    [list]
  );

  const handleCompleteTodo = useCallback(
    (id) => {
      setList(
        [...list].map((todo) => {
          if (todo.id === id) {
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        })
      );
      console.log('handleCompleteTodo сработала');
    },
    [list]
  );

  const handleEditTodo = useCallback(
    (id) => {
      setList(
        [...list].map((todo) => {
          if (todo.id === id) {
            todo.isEdit = !todo.isEdit;
          }
          return todo;
        })
      );
      console.log('handleEditTodo сработала');
    },
    [list]
  );

  const handleAgreeEdit = useCallback(
    (title, id) => {
      setList(
        [...list].map((todo) => {
          if (todo.id === id) {
            todo.title = title;
            todo.isEdit = !todo.isEdit;
          }
          return todo;
        })
      );
      console.log('handleAgreeEdit сработала');
    },
    [list]
  );

  const handleUndoEdit = useCallback(
    (id) => {
      setList(
        [...list].map((todo) => {
          if (todo.id === id) {
            todo.isEdit = !todo.isEdit;
          }
          return todo;
        })
      );
      console.log('handleUndoEdit сработала');
    },
    [list]
  );

  console.log('list =>', list);
  console.log('App render');
  return (
    <div className={s.wrapper}>
      <h1>To do list</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <Elements
        onCompleteTodo={handleCompleteTodo}
        onRemoveTodo={handleRemoveTodo}
        list={list}
        onEditTodo={handleEditTodo}
        onAgreeEdit={handleAgreeEdit}
        onUndoEdit={handleUndoEdit}
      />
    </div>
  );
}
export { App };
