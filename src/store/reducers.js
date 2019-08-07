import { reducer as AuthReducer } from './auth/reducer';
import { reducer as TodosReducer } from './todos/reducer';

const initialState = {};

export const reducers = (state = initialState, action) => {
  console.log('type', action.type, 'payload', action.payload);
  const auth = AuthReducer(state.auth, action);
  const todos = TodosReducer(state.todos, action);

  const newState = { auth, todos };

  console.log('New State', newState);

  return newState;
};
