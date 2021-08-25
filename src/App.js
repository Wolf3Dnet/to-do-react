import { observer } from 'mobx-react-lite';
import React, { useCallback, useState } from 'react';
import s from './App.module.css';
import { Elements } from './components/elements/elements';
import { TodoForm } from './components/todoForm/Todoform';
import { todoList } from './store/TodoListStore';

export const App = observer(() => {
  const [list, setList] = useState([]);

  const handleAddTodo = useCallback(
    (title) => {
      if (title !== '') {
        todoList.addTodo({
          id: Math.random(),
          title: title,
          isComplete: false,
          isEdit: false,
        });

        console.log('handleAddTodo сработала');
      }
    },
    [todoList]
  );

  const handleRemoveTodo = useCallback(
    (id) => {
      todoList.removeTodo(id);
      console.log('handleRemoveTodo сработала');
    },
    [list]
  );

  const handleCompleteTodo = useCallback(
    (id) => {
      todoList.setComplete(id);
      console.log('handleCompleteTodo сработала');
    },
    [todoList]
  );

  const handleEditTodo = useCallback(
    (id) => {
      todoList.setEdit(id);
      console.log('handleEditTodo сработала');
    },
    [todoList]
  );

  const handleAgreeEdit = useCallback(
    (title, id) => {
      todoList.setAgreeEdit(title, id);
      console.log('handleAgreeEdit сработала');
    },
    [list]
  );

  const handleUndoEdit = useCallback(
    (id) => {
      todoList.setEdit(id);
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
        List={todoList.todoItems}
        onEditTodo={handleEditTodo}
        onAgreeEdit={handleAgreeEdit}
        onUndoEdit={handleUndoEdit}
      />
    </div>
  );
});
