/**
 * Initial data for the reducer
 */
const clientsDraft = {
  error: undefined,
  clients: [],
  currentClient: undefined
}

/**
 * Reducer of the state
 * @param {object} state Redux state to be modified in a no mutation way
 * @param {object} action  {type: string, ...} It contains mostly two fields. Type, which indicates the action to be done, and the payload which will be the data modified in the store
 */
const clientsReducer = (state = clientsDraft, action) => {
  switch(action.type) {
    case "SET_ERROR":
      return { ...state, error: action.error}
    case "SET_CLIENTS":
        return { ...state, clients: action.clients}
    case "SET_CURRENT_CLIENT":
        return { ...state, currentClient: action.currentClient}
    case "SET_CURRENT_CLIENT_ADDRESS_LIST":
        return { ...state, currentClient: {...state.currentClient, addressList: action.addressList}}
    default:
      return {...state}
  }
}

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const clientsActions = {
  setError: (error) => ({
    type: "SET_ERROR",
    error
  }),
  setClients: (clients) => ({
    type: "SET_CLIENTS",
    clients
  }),
  setCurrentClient: (currentClient) => ({
    type: "SET_CURRENT_CLIENT",
    currentClient
  }),
  setCurrentClientAddressList: (addressList) => ({
    type: "SET_CURRENT_CLIENT_ADDRESS_LIST",
    addressList
  })
}

export {
  clientsReducer,
  clientsActions
}
