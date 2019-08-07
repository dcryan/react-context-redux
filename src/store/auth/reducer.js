import { ACTIONS } from './actions';

const initialState = {
  loggedIn: false,
};

export const reducer = (state = initialState, { type }) => {
  switch (type) {
    case ACTIONS.SIGN_IN:
      return { ...state, loggedIn: true };
    case ACTIONS.SIGN_OUT:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};
