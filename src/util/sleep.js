/**
 * Promise function that resolves after certain amount of time
 * @param {number} ms 
 */
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));