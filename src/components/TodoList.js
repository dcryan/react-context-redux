import React, { useContext } from 'react';
import { context } from '../store';
import { completeTodo } from '../store/todos';
import TodoListItem from './TodoListItem';

export default function TodoList() {
  const { app, dispatch } = useContext(context);

  const handleCompleteTodo = todoId => () => {
    completeTodo(dispatch, todoId);
  };

  return (
    <ul>
      {app.todos.todos.map((todo, index) => (
        <TodoListItem
          key={`${todo.name}${index}`}
          todo={todo}
          handleCompleteTodo={handleCompleteTodo(index)}
        />
      ))}
    </ul>
  );
}
