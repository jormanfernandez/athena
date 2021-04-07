import { useHistory } from "react-router-dom";

let _history = null;

/**
 * Sets the history with react-router-dom router to use in other non-react component
 */
export const useSetHistory = () => {
  _history = useHistory();
}

/**
 * Returns the history object
 * @returns {object} useHistory from react-router-dom
 */
export const getHistory = () => _history;
