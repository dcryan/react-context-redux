import React, { useState, useContext } from 'react';
import { context as TodosContext, addTodo } from '../store/todos';

export default function AddTodo() {
  const [todoName, setTodoName] = useState('');
  const { dispatch } = useContext(TodosContext);

  const handleOnChange = e => {
    const name = e.target.value;
    setTodoName(name);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(dispatch, { name: todoName, completed: false });

    // Reset textfield
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
