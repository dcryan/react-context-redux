import React, { useContext, useReducer, useEffect } from 'react';
import { reducers, context as AppContext, initStore } from './store';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const initialState = useContext(AppContext);
  const [app, dispatch] = useReducer(reducers, initialState);

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
      <AppContext.Provider value={{ app, dispatch }}>
        <Header />
        {todos}
      </AppContext.Provider>
    </div>
  );
}

export default App;
