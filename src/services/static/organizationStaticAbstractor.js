import { simulateResponse } from "services/static/simulateResponse";

export const organizationAbstractor = {
  kind: "static",
  getOrganizationInfo
}

function getOrganizationInfo() {
  const mockInfo = {
    success: true,
    data: {
      locals: [
        {
          name: "Local Principal",
          address: "Una direccion re linda",
          active: true,
          id: 1
        },
        {
          name: "Cuchurrumial",
          address: "Otra direccion tremenda",
          active: false,
          id: 2
        }
      ],
      paymentMethods: [{
        id: 1,
        description: "Efectivo",
        active: true
      }, {
        id: 2,
        description: "Transferencia",
        active: true
      }],
      companyTypes: [{
        id: 1,
        description: "Almacen",
        active: true
      }],
      logos: [{
        id: 1,
        data: "base64Data",
        contentType: "image/png",
        active: true
      }]
    }
  };
  // FIXME: We should parse the logos here or in the operator to create a rawData property which will display the logos in the list
  return simulateResponse(mockInfo);
}
