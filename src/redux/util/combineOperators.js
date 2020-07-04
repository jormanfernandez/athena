/**
 * 
 * @param {object} operators {key<string>: value<function>} Merge the operators into a big object of operators
 * @returns {object} Operators called
 */
export const combineOperators = (operators) => {
  return (dispatch) => {
    let selectedOperators = {}
    for(let operator in operators) {
        selectedOperators[operator] = operators[operator](dispatch);
    }
    return {operators: selectedOperators};
  }
}
