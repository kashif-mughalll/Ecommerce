var initialState = [];

var cartReducer = (state = initialState, action) => {
  var { type, payload } = action;

  switch (type) {
    case "ADD_PRODUCT_TO_CART":
      return payload;
    case "REMOVE_PRODUCT_FROM_CART":
      return null;
    case "DELETE_PRODUCT_FROM_CART":
      return null;
    default:
      return state;
  }
};

export default cartReducer;
