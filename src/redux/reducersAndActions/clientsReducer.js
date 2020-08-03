import { contain } from "redux/util/contain";

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
const clientsReducer = contain((clientsDraft, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case "SET_CLIENT_ERROR":
      clientsDraft.error = action.error;
      break;
    case "SET_CLIENTS":
      clientsDraft.clients = action.clients;
      break;
    case "SET_CURRENT_CLIENT":
      clientsDraft.currentClient = action.currentClient;
      break;
    case "SET_CURRENT_CLIENT_ADDRESS_LIST":
      clientsDraft.currentClient.addressList = action.addressList;
      break;
  }
}, clientsDraft);

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const clientsActions = {
  setError: (error) => ({
    type: "SET_CLIENT_ERROR",
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
