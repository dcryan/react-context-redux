import React, { useContext } from 'react';
import { context as TodosContext, completeTodo } from '../store/todos';
import TodoListItem from './TodoListItem';

export default function TodoList() {
  const { todos, dispatch } = useContext(TodosContext);

  const handleCompleteTodo = todoId => () => {
    completeTodo(dispatch, todoId);
  };

  return (
    <ul>
      {todos.todos.map((todo, index) => (
        <TodoListItem
          key={`${todo.name}${index}`}
          todo={todo}
          handleCompleteTodo={handleCompleteTodo(index)}
        />
      ))}
    </ul>
  );
}
