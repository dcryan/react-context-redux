import { ACTIONS } from './actions';

const initialState = {
  loggedIn: false,
};

export const reducer = (state = initialState, action) => {
  console.log('action', 'type', action.type, 'payload', action.payload);
  switch (action.type) {
    case ACTIONS.SIGN_IN:
      return { ...state, loggedIn: true };
    case ACTIONS.SIGN_OUT:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};
