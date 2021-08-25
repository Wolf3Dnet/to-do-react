import React, { useState } from 'react';
import s from './Todoform.module.css';
import { func } from 'prop-types';
import { useCallback } from 'react';

const TodoForm = React.memo(({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState('');

  const handleChange = useCallback(
    (e) => {
      setTodoTitle(e.target.value);
    },
    [todoTitle]
  );

  const handleAdd = useCallback(() => {
    onAddTodo(todoTitle);
    setTodoTitle('');
  }, [todoTitle]);

  console.log('TodoForm render');
  return (
    <div>
      <form>
        <input
          placeholder="Введите текст"
          type="text"
          value={todoTitle}
          className={s.input}
          onChange={handleChange}
        />
        <input
          className={s.button}
          value="Add"
          onClick={handleAdd}
          type="button"
        />
      </form>
    </div>
  );
});

TodoForm.propTypes = { onAddTodo: func };
export { TodoForm };
