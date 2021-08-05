import React, { useState } from 'react';
import s from './Todoform.module.css';
import PropTypes from 'prop-types';

const TodoForm = React.memo(({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');

  return (
    <div>
      <form>
        <input
          placeholder="Введите текст"
          type="text"
          value={todoTitle}
          className={s.input}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <input
          className={s.button}
          value="Add"
          onClick={() => {
            onAddTodo(todoTitle);
            setTodoTitle('');
          }}
          type="button"
        />
      </form>
    </div>
  );
});

TodoForm.propTypes = { onAddTodo: PropTypes.func };
export { TodoForm };
