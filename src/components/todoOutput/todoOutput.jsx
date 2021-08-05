import React from 'react';
import s from './todoOutput.module.css';
import PropTypes from 'prop-types';

export const TodoOutput = ({
  onEditTodo,
  isComplete,
  onRemoveTodo,
  value,
  id,
  onCompleteTodo,
}) => {
  return (
    <li className={isComplete ? s.liComplete : s.li}>
      <button
        onClick={() => onCompleteTodo(id)}
        className={isComplete ? s.completeButtonActive : s.completeButton}
      ></button>
      <span onClick={() => onEditTodo(id)} className={s.span}>
        {value}
      </span>
      <button onClick={() => onRemoveTodo(id)} className={s.delete}>
        Delete
      </button>
    </li>
  );
};

TodoOutput.propTypes = {
  onEditTodo: PropTypes.func,
  isComplete: PropTypes.bool,
  onRemoveTodo: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.number,
  onCompleteTodo: PropTypes.func,
};
