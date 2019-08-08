import React, { useContext, useReducer } from 'react';
import { reducer, context as TodosContext } from './store/todos';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const initialState = useContext(TodosContext);
  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <TodosContext.Provider value={{ todos, dispatch }}>
        <AddTodo />
        <TodoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
