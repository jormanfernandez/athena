import { contain } from "redux/util/contain";

/**
 * Initial data for the reducer
 */
const productsDraft = {
  error: undefined,
  products: [],
  product: {
    isNew: false,
    pricePerUnit: undefined,
    pricePerMeasure: undefined,
    discounts: undefined,
    detail: undefined,
  },
}

/**
 * Reducer of the state
 * @param {object} state Redux state to be modified in a no mutation way
 * @param {object} action  {type: string, ...} It contains mostly two fields. Type, which indicates the action to be done, and the payload which will be the data modified in the store
 */
const productsReducer = contain((productsDraft, action) => {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case "SET_PRODUCT_ERROR":
      productsDraft.error = action.error;
      break;
    case "SET_PRODUCTS":
      productsDraft.products = action.product;
      break;
    case "SET_PRODUCT_DETAIL":
      productsDraft.product.detail = action.detail;
      break;
    case "SET_PRODUCT_IS_NEW":
      productsDraft.isNew = action.isNew;
      break;
    case "SET_PRODUCT_PRICE_PER_UNIT":
      productsDraft.product.pricePerUnit = action.pricePerUnit;
      break;
    case "SET_PRODUCT_PRICE_PER_MEASURE":
      productsDraft.product.pricePerMeasure = action.pricePerMeasure;
      break;
    case "SET_PRODUCT_DISCOUNTS":
      productsDraft.product.discounts = action.discounts;
      break;
  }
}, productsDraft);

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const productsActions = {
  setError: (error) => ({
    type: "SET_PRODUCT_ERROR",
    error
  }),
  setProducts: (products) => ({
    type: "SET_PRODUCTS",
    products
  }),
  setProductDetail: (detail) => ({
    type: "SET_PRODUCT_DETAIL",
    detail
  }),
  setProductIsNew: (isNew) => ({
    type: "SET_PRODUCT_IS_NEW",
    isNew
  }),
  setProductsPricePerUnit: (pricePerUnit) => ({
    type: "SET_PRODUCT_PRICE_PER_UNIT",
    pricePerUnit
  }),
  setProductsPricePerMeasure: (pricePerMeasure) => ({
    type: "SET_PRODUCT_PRICE_PER_MEASURE",
    pricePerMeasure
  }),
  setDiscounts: (discounts) => ({
    type: "SET_PRODUCT_DISCOUNTS",
    discounts
  })
}

export {
  productsReducer,
  productsActions
}
    