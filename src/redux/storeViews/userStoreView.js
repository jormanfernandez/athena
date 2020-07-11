/**
 * This receives the state from the store and reads from the proper reducer the data that should be read
 */
export const userStoreView = {
  isLoggedIn: ({ user }) => user.isLoggedIn,
  getUsername: ({ user }) => user.username,
  getName: ({ user }) => user.name,
  getError: ({ user }) => user.error,
}
