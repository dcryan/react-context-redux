import React, { useContext } from 'react';
import { context as AppContext } from '../store';
import { signIn, signOut } from '../store/auth';
import { clearTodos } from '../store/todos';

export default function Header() {
  const { app, dispatch } = useContext(AppContext);

  let logout;
  let login;
  if (app.auth.loggedIn) {
    logout = (
      <button
        type="button"
        onClick={() => {
          signOut(dispatch);
          clearTodos(dispatch);
        }}
      >
        Log Out
      </button>
    );
  } else {
    login = (
      <button type="button" onClick={() => signIn(dispatch)}>
        Log In
      </button>
    );
  }

  return (
    <div>
      {logout}
      {login}
    </div>
  );
}
