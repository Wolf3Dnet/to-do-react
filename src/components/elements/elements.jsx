import React from 'react';
import { func, array } from 'prop-types';
import { Todo } from '../todo/todo';
import s from './elements.module.css';
import { observer } from 'mobx-react-lite';

export const Elements = observer(
  ({
    List,
    onRemoveTodo,
    onCompleteTodo,
    onEditTodo,
    onAgreeEdit,
    onUndoEdit,
  }) => {
    return (
      <ul className={s.ul}>
        {List.map((todo) => (
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

Elements.propTypes = {
  List: array,
  onRemoveTodo: func,
  onCompleteTodo: func,
  onEditTodo: func,
  onAgreeEdit: func,
  onUndoEdit: func,
};
