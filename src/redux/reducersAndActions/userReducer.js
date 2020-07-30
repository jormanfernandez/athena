/**
 * Initial data for the reducer
 */
const userDraft = {
  username: undefined,
  dni: undefined,
  profile: undefined,
  name: undefined,
  active: undefined,
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
    case "SET_DNI":
      return { ...state, dni: action.dni}
    case "SET_PROFILE":
      return {...state, profile: action.profile}
    case "SET_NAME":
      return {...state, name: action.name}
    case "SET_ACTIVE":
      return {...state, active: action.active}
    case "SET_IS_LOGGED_IN":
      return { ...state, isLoggedIn: action.isLoggedIn}
    case "SET_ERROR":
      return {...state, error: action.error}
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
  setDni: (dni) => ({
    type: "SET_DNI",
    dni
  }),
  setProfile: (profile) => ({
    type: "SET_PROFILE",
    profile
  }),
  setName: (name) => ({
    type: "SET_NAME",
    name
  }),
  setActive: (active) => ({
    type: "SET_ACTIVE",
    active
  }),
  setIsLoggedIn: (isLoggedIn) => ({
    type: "SET_IS_LOGGED_IN",
    isLoggedIn
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
