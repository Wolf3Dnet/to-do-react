import React from 'react';
import { TodoOutput } from '../todoOutput/todoOutput';
import { TodoEdit } from '../todoEdit/todoEdit';
import PropTypes from 'prop-types';

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
  value: PropTypes.string,
  id: PropTypes.number,
  onRemoveTodo: PropTypes.func,
  onCompleteTodo: PropTypes.func,
  isComplete: PropTypes.bool,
  isEdit: PropTypes.bool,
  onEditTodo: PropTypes.func,
  onAgreeEdit: PropTypes.func,
  onUndoEdit: PropTypes.func,
};
