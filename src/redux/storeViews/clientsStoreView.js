/**
 * This receives the state from the store and reads from the proper reducer the data that should be read
 */
export const clientsStoreView = {
  getError: ({ clients }) => clients.error,
  getClients: ({ clients }) => clients.clients,
  getCurrentClient: ({ clients }) => clients.currentClient,
}
