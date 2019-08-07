export const ACTIONS = {
  INIT_STORE: 'INIT_STORE',
};

/**
 * Set the store with all the default set from the reducers.
 * @param {*} dispatch
 */
export function initStore(dispatch) {
  dispatch({ type: ACTIONS.INIT_STORE });
}
