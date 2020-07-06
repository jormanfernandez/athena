/**
 * 
 * @param {object} props Props for the react component.
 *                        Conditions<array> Array of booleans detecting if any of its values are false
 *                        Else<React.Component> JSX Component to be rendered when a false value is in the conditions
 *                        children<function> React.Component enclosed in a function. This to prevent previous rendering from the component calling it
 */
export function If({ Conditions, Else, children }) {
  return Conditions.includes(false) ? Else : children();
}
