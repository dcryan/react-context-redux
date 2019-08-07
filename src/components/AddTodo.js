import React, { useState, useContext } from 'react';
import { context as AppContext } from '../store';
import { addTodo } from '../store/todos';

export default function AddTodo() {
  const [todoName, setTodoName] = useState('');
  const { dispatch } = useContext(AppContext);

  const handleOnChange = e => {
    const name = e.target.value;
    setTodoName(name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(dispatch, { name: todoName, completed: false });
    setTodoName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={todoName} onChange={handleOnChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
