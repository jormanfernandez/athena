/**
 * Initial data for the reducer
 */
const userDraft = {
  username: undefined,
  profile: {},
  name: undefined,
  isLoggedIn: false,
  error: undefined
}

/**
 * Reducer of the state
 * @param {object} state Redux state to be modified in a no mutation way
 * @param {object} action  {type: string, ...} It contains mostly two fields. Type, which indicates the action to be done, and the payload which will be the data modified in the store
 */
const userReducer = (state = userDraft, action) => {
  switch(action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.username}
    case "SET_IS_LOGGED_IN":
      return { ...state, isLoggedIn: action.isLoggedIn}
    case "SET_ERROR":
      return {...state, error: action.error}
    case "SET_NAME":
      return {...state, name: action.name}
    case "SET_PROFILE":
      return {...state, profile: action.profile}
    default:
      return {...state}
  }
}

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const userActions = {
  setUsername: (username) => ({
    type: "SET_USERNAME",
    username
  }),
  setName: (name) => ({
    type: "SET_NAME",
    name
  }),
  setIsLoggedIn: (isLoggedIn) => ({
    type: "SET_IS_LOGGED_IN",
    isLoggedIn
  }),
  setProfile: (profile) => ({
    type: "SET_PROFILE",
    profile
  }),
  setError: (error) => ({
    type: "SET_ERROR",
    error
  })
}

export {
    userReducer,
    userActions
}
