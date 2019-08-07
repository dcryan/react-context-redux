import React from 'react';

export default function TodoListItem({ todo, handleCompleteTodo }) {
  return (
    <li className={todo.completed ? 'checked' : ''}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCompleteTodo}
      />
      {todo.name}
    </li>
  );
}
