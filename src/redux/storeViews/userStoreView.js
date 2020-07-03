/**
 * This receives the state from the store and reads from the proper reducer the data that should be read
 */
export const userStoreView = {
  username: ({user}) => user.username,
  isLoggedIn: ({user}) => user.isLoggedIn
}
