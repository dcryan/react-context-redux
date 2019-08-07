import React, { useContext } from 'react';
import { AppContext } from '../store';
import { signIn, signOut } from '../store/auth';
import { clearTodos } from '../store/todos';

export default function Header() {
  const { app, dispatch } = useContext(AppContext);

  const handleSignOut = () => {
    signOut(dispatch);
    clearTodos(dispatch);
  };

  const handleSignIn = () => {
    signIn(dispatch);
  };

  let logout;
  let login;
  if (app.auth.loggedIn) {
    logout = (
      <button type="button" onClick={handleSignOut}>
        Log Out
      </button>
    );
  } else {
    login = (
      <button type="button" onClick={handleSignIn}>
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
