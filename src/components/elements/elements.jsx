import React from 'react';
import { func, number, string } from 'prop-types';
import { Todo } from '../todo/todo';
import s from './elements.module.css';

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

Elements.propTypes = {
  list: arrayOf(PropTypes.shape({ id: number, title: string })),
  onRemoveTodo: func,
  onCompleteTodo: func,
  onEditTodo: func,
  onAgreeEdit: func,
  onUndoEdit: func,
};
