/**
 * Initial data for the reducer
 */
const siteDraft = {
  errors: []
}

/**
 * Reducer of the state
 * @param {object} state Redux state to be modified in a no mutation way
 * @param {object} action  {type: string, ...} It contains mostly two fields. Type, which indicates the action to be done, and the payload which will be the data modified in the store
 */
const siteReducer = (state = siteDraft, action) => {
  switch(action.type) {
    case "PUSH_ERROR":
      return { ...state, errors: [action.error, ...state.errors]}
    default:
      return {...state}
  }
}

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const siteActions = {
  pushError: (error) => ({
    type: "PUSH_ERROR",
    error
  })
}

export {
  siteReducer,
  siteActions
}
  