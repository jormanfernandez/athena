export const organizationAbstractor = {
  kind: "dynamic",
  getOrganizationInfo
}

function getOrganizationInfo() {
  return new Promise((resolve, reject) => {
    reject({
      success: false,
      errorCode: "E01"
    });
  });
}
