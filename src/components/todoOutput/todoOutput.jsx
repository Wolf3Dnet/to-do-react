import React from 'react';
import s from './todoOutput.module.css';
import { string, bool, number, func } from 'prop-types';

export const TodoOutput = React.memo(
  ({ onEditTodo, isComplete, onRemoveTodo, value, id, onCompleteTodo }) => {
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
  }
);

TodoOutput.propTypes = {
  onEditTodo: func,
  isComplete: bool,
  onRemoveTodo: func,
  value: string,
  id: number,
  onCompleteTodo: func,
};
