export const ACTIONS = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
};

export function signIn(dispatch) {
  dispatch({ type: ACTIONS.SIGN_IN, payload: true });
}

export function signOut(dispatch) {
  dispatch({ type: ACTIONS.SIGN_OUT, payload: false });
}
