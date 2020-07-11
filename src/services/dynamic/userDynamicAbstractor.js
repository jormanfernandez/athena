export const userAbstractor = {
  kind: "dynamic",
  authenticate
}

function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    reject({
      success: false,
      errorCode: "E01"
    })
  })
}