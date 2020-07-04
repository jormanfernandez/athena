/**
 * This combines the views from the state received when connect is used
 * @param {object} views {key: function} the view receives the state of the store to read the usefull data
 * @returns {function} Function that reads from the state the requested values
 */
export const combineStoreViews = (views) => {
  return (state) => {
    let selectedViews = {};
    for (let key in views) {
      selectedViews[key] = views[key](state);
    }
    return {state: selectedViews};
  }
}
