import { useState } from "react";

/**
 * 
 * @param {object} props Props for the react component.
 *                        Conditions<array> Array of booleans detecting if any of its values are false
 *                        Else<React.Component> JSX Component to be rendered when a false value is in the conditions
 *                        delay<int> time for the timeout to detect if it should pass
 *                        children<function> React.Component enclosed in a function. This to prevent previous rendering from the component calling it
 */
export function If({ Conditions, Else, delay = 200, children }) {
  const [isChecking, setIsChecking] = useState(Conditions.includes(false));
  const [isDelay, setIsDelay] = useState(true);
  
  setTimeout(() => setIsDelay(false), delay);

  if (isChecking && !Conditions.includes(false)) {
    setIsChecking(false);
  }

  return isChecking ? (isDelay ? null : Else) : children();
}
