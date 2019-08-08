import React, { useContext } from 'react';
import { context as AuthContext, signIn, signOut } from '../store/auth';

export default function Header() {
  const { auth, dispatch } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(dispatch);
  };

  const handleSignIn = () => {
    signIn(dispatch);
  };

  let logout;
  let login;
  if (auth.loggedIn) {
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
