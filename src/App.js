import React, { useContext, useReducer, useEffect } from 'react';
import { combineReducers, AppContext, initStore } from './store';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [app, dispatch] = useReducer(combineReducers);

  useEffect(() => {
    initStore(dispatch);
  }, []);

  if (!app) {
    return <div />;
  }

  let todos;
  if (app.auth.loggedIn) {
    todos = (
      <div>
        <AddTodo />
        <TodoList />
      </div>
    );
  }

  return (
    <div className="App">
      <div>Stage 3</div>
      <AppContext.Provider value={{ app, dispatch }}>
        <Header />
        {todos}
      </AppContext.Provider>
    </div>
  );
}

export default App;
