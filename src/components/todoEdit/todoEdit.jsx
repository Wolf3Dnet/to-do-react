import React from 'react';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import { useState } from 'react';
import s from './todoEdit.module.css';
import { string, bool, number, func } from 'prop-types';

export const TodoEdit = React.memo(
  ({ onUndoEdit, isComplete, onAgreeEdit, value, id, onCompleteTodo }) => {
    const [newTodo, setNewTodo] = useState(value);
    console.log('TodoEdit render');
    return (
      <li className={s.li}>
        <button
          disabled={true}
          onClick={() => onCompleteTodo(id)}
          className={isComplete ? s.completeButtonActive : s.completeButton}
        ></button>
        <div className={s.div}>
          {value}
          <textarea
            onChange={(e) => setNewTodo(e.target.value)}
            defaultValue={value}
            className={s.textarea}
          ></textarea>
        </div>
        <button
          onClick={() => {
            console.log('new Todo =>', { newTodo });
            onAgreeEdit(newTodo, id);
          }}
          className={s.textareaAdd}
        >
          {<DoneOutlinedIcon style={{ fontSize: 20 }}></DoneOutlinedIcon>}
        </button>
        <button
          onClick={() => {
            onUndoEdit(id);
          }}
          className={s.textareaUndo}
        >
          {<UndoOutlinedIcon style={{ fontSize: 20 }}></UndoOutlinedIcon>}
        </button>
      </li>
    );
  }
);

TodoEdit.propTypes = {
  onUndoEdit: func,
  isComplete: bool,
  onAgreeEdit: func,
  value: string,
  id: number,
  onCompleteTodo: func,
};
