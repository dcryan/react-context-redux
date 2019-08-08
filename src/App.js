import React, { useContext, useReducer } from 'react';
import { reducer as AuthReducer, context as AuthContext } from './store/auth';
import Header from './components/Header';
import './App.css';

function App() {
  const initialState = useContext(AuthContext);
  const [auth, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <div className="App">
      <div>Stage 1</div>
      <AuthContext.Provider value={{ auth, dispatch }}>
        <Header />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
