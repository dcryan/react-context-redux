import { createContext } from 'react';

const initialState = {
  loggedIn: false,
};

export const context = createContext(initialState);
