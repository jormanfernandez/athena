export const simulateResponse = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 500);
  });
}