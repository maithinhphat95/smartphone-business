import orderApi from "../../apis/orderApi";
import userApi from "../../apis/userApi";
// initial state
const initialState = {
  showCart: false,
  cartList: [],
};

// Customer Action--------------------------------------------------
export const showCart = () => {
  return {
    type: "SHOW_CART",
  };
};
export const hideCart = () => {
  return {
    type: "HIDE_CART",
  };
};
export const toggleCart = () => {
  return {
    type: "TOGGLE_CART",
  };
};

// customer Reducer
export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_CART":
      return {
        ...state,
        showCart: true,
      };
    case "HIDE_CART":
      return {
        ...state,
        showCart: false,
      };
    case "TOGGLE_CART":
      return {
        ...state,
        showCart: !state.showCart,
      };
    default:
      return { ...state };
  }
};
