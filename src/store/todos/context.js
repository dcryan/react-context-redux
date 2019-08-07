import { createContext } from 'react';

const initialState = {
  todos: [],
};

export const context = createContext(initialState);
