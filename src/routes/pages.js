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
 * For the <Link> tag, it returns the path that React Router will load
 * If any keys are passed using a dynamic path, this would be rewritten in the path returned by the function
 * @param {object} page PAGES[route] object
 * @param {object} keys Can be null. It will rewrite the elements from the path with the values of the keys
 * @returns {object}
 */
export const getLink = (page, keys) => {
  let { path } = page;
  if (keys) {
    Object.entries(keys).map(value => path = path.replace(value[0], value[1]));
  }
  return {to: path};
}

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
  styleguide: {
    path: "/styleguide",
    exact: true
  }
}
