import { ACTIONS } from './actions';

const initialState = {
  todos: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    case ACTIONS.COMPLETE_TODO: {
      const todoId = payload;

      // Don't mutate the original
      const newTodos = [...state.todos];
      newTodos[todoId] = { ...state.todos[todoId] };
      newTodos[todoId].completed = !newTodos[todoId].completed;

      return { ...state, todos: newTodos };
    }
    case ACTIONS.CLEAR_TODOS:
      return { ...state, todos: [] };
    default:
      return state;
  }
};
