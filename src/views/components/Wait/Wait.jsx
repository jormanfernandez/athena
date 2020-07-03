import { useState } from "react";

/**
 * 
 * @param {object} props Props for the react component.
 *                        waitFor<array> value is the variables that will be detected to render the component or not. (if undefined it will render the fallback instead)
 *                        fallback<React.Component> JSX Component to be rendered when the isWaiting state is true
 *                        fallbackDelay<int> time for the timeout to detect if it should pass the wait of waitFor
 *                        children<function> React.Component enclosed in a function. This to prevent previous rendering from the component calling Wait
 */
export function Wait({ waitFor, fallback, fallbackDelay = 200, children }) {
  const [isWaiting, setIsWaiting] = useState(waitFor.includes(undefined));
  const [isfallbackDelay, setIsFallbackDelay] = useState(true);
  
  setTimeout(() => setIsFallbackDelay(false), fallbackDelay);

  if (isWaiting && !waitFor.includes(undefined)) {
    setIsWaiting(false);
  }

  return isWaiting ? (isfallbackDelay ? null : fallback) : children();
}
