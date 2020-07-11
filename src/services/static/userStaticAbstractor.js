import { simulateResponse } from "services/static/simulateResponse";
export const userAbstractor = {
  kind: "static",
  authenticate
}

function authenticate(username, password) {
  const mockUsers = [
    {
      username: "jfernandez",
      password: "123@Jota",
      details: {
        name: "Jorman",
        lastname: "Fernandez",
        email: "tuviejaentanga@hotmail.com",
        subscriptions: []
      }
    }
  ];
  let user = undefined;
  for (let mock of mockUsers) {
    if (mock.username !== username || mock.password !== password) {
      continue;
    }
    user = mock;
    break;
  }
  let response;
  if (!user) {
    response = {
      success: false,
      errorCode: "UE01"
    };
  } else {
    response = {
      success: true,
      user
    };
  }
  return simulateResponse(response);
}