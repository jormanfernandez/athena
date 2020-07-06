/**
 * It returns the path to the component for the router
 * @param {object} Page {path: string, exact: boolean} Page to route
 * @returns {object}
 */
export const getRoute = ({path, exact}) => ({
  path,
  exact
});

/**
 * The idea is to call it when a Page is being mounted in the root page
 * @param {object} param {dataFetch} Function to be executed 
 */
export const onMounted = ({dataFetch}) => {
  if (dataFetch) {
    dataFetch();
  }
}

/**
 * Page routing for react-router
 * If exact is true, it will match the path exactly. 
 * This is usefull for home/root page, so it  does not match other pages
 */
export const PAGES = {
  login: {
    path: "/",
    exact: true,
    dataFetch: async () => {
      console.log("Login Mounted");
    } 
  },
}