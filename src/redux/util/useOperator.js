import { store } from "redux/store";

/**
 * 
 * @param {object} operator {key<string>: value<function>} Operator to be used passing the store
 * @returns {object} Operators called
 */
export const useOperator = (operator) => {
  return operator(store);
}
