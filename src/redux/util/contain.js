/**
 * Contains a reducer, passing to the callback the state with a the default value being the draftState received.
 * Returns the callback with the actual reducer for redux. The object received in the callback can/should be mutated, because its cloned from the state.
 * @param {function} callback 
 * @param {object} draftState
 * @returns {function} 
 */
export const contain = (callback, draftState) => {
  return (state = draftState, action) => {
    let innerState = {...state};
    callback(innerState, action);
    return innerState;
  }
}
