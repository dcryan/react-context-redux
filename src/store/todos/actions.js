export const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  COMPLETE_TODO: 'COMPLETE_TODO',
  CLEAR_TODOS: 'CLEAR_TODOS',
};

export function addTodo(dispatch, todo) {
  dispatch({ type: ACTIONS.ADD_TODO, payload: todo });
}

export function completeTodo(dispatch, index) {
  dispatch({ type: ACTIONS.COMPLETE_TODO, payload: index });
}

export function clearTodos(dispatch) {
  dispatch({ type: ACTIONS.CLEAR_TODOS });
}
