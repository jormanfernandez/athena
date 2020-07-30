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
const productsReducer = (state = productsDraft, action) => {
  switch(action.type) {
    case "SET_ERROR":
      return { ...state, error: action.error}
    case "SET_PRODUCTS":
        return { ...state, products: action.products}
    case "SET_PRODUCT_DETAIL":
        return { ...state, product: {...state.product, detail: action.detail}}
    case "SET_PRODUCT_IS_NEW":
        return { ...state, product: {...state.product, isNew: action.isNew}}
    case "SET_PRODUCT_PRICE_PER_UNIT":
        return { ...state, product: {...state.product, pricePerUnit: action.pricePerUnit}}
    case "SET_PRODUCT_PRICE_PER_MEASURE":
        return { ...state, product: {...state.product, pricePerMeasure: action.pricePerMeasure}}
    case "SET_PRODUCT_DISCOUNTS":
        return { ...state, product: {...state.product, discounts: action.discounts}}
    default:
      return {...state}
  }
}

/**
 * Actions to be executed when dispatch is called. This ones are received in the reducer function to update the store state
 */
const productsActions = {
  setError: (error) => ({
    type: "SET_ERROR",
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
    