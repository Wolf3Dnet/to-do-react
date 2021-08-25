import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import s from './App.module.css';
import { Elements } from './components/elements/elements';
import { TodoForm } from './components/todoForm/Todoform';
import { todoList } from './store/TodoListStore';

export const App = observer(() => {
  return (
    <div className={s.wrapper}>
      <h1>To do list</h1>
      <TodoForm onAddTodo={todoList.addTodo} />
      <Elements
        onCompleteTodo={todoList.setComplete}
        onRemoveTodo={todoList.removeTodo}
        List={todoList.todoItems}
        onEditTodo={todoList.setEdit}
        onAgreeEdit={todoList.setAgreeEdit}
        onUndoEdit={todoList.setEdit}
      />
    </div>
  );
});
