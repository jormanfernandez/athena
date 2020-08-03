import { contain } from "redux/util/contain";

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
const userReducer = contain((userDraft, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case "SET_USERNAME":
      userDraft.username = action.username;
      break;
    case "SET_DNI":
      userDraft.dni = action.dni;
      break;
    case "SET_PROFILE":
      userDraft.profile = action.profile;
      break;
    case "SET_NAME":
      userDraft.name = action.name;
      break;
    case "SET_ACTIVE":
      userDraft.active = action.active;
      break;
    case "SET_IS_LOGGED_IN":
      userDraft.isLoggedIn = action.isLoggedIn;
      break;
    case "SET_USER_ERROR":
      userDraft.error = action.error;
  }
}, userDraft);

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
    type: "SET_USER_ERROR",
    error
  })
}

export {
    userReducer,
    userActions
}
