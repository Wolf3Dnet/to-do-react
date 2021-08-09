import React from 'react';
import { TodoOutput } from '../todoOutput/todoOutput';
import { TodoEdit } from '../todoEdit/todoEdit';
import { string, bool, number, func } from 'prop-types';

export const Todo = ({
  value,
  id,
  onRemoveTodo,
  onCompleteTodo,
  isComplete,
  isEdit,
  onEditTodo,
  onAgreeEdit,
  onUndoEdit,
}) => {
  if (isEdit === false) {
    return (
      <TodoOutput
        onEditTodo={onEditTodo}
        isComplete={isComplete}
        onRemoveTodo={onRemoveTodo}
        value={value}
        id={id}
        onCompleteTodo={onCompleteTodo}
      />
    );
  } else {
    return (
      <TodoEdit
        onUndoEdit={onUndoEdit}
        isComplete={isComplete}
        onAgreeEdit={onAgreeEdit}
        value={value}
        id={id}
        onCompleteTodo={onCompleteTodo}
      />
    );
  }
};

Todo.propTypes = {
  value: string,
  id: number,
  onRemoveTodo: func,
  onCompleteTodo: func,
  isComplete: bool,
  isEdit: bool,
  onEditTodo: func,
  onAgreeEdit: func,
  onUndoEdit: func,
};
