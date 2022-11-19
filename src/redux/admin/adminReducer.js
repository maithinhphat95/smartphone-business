import { yearlyRevenue } from "../../constant/admin";

const initialState = {
  showMenu: false,
  yearlyData: yearlyRevenue,
  // showEditProduct: false,
  // showAddProduct: false,
};
// Admin action
export const showMenu = () => {
  return {
    type: "SHOW_MENU",
  };
};
export const hideMenu = () => {
  return {
    type: "HIDE_MENU",
  };
};
export const toggleMenu = () => {
  return {
    type: "TOGGLE_MENU",
  };
};
// export const showEditProduct = () => {
//   return {
//     type: "SHOW_EDIT_PRODUCT",
//   };
// };
// export const hideEditProduct = () => {
//   return {
//     type: "HIDE_EDIT_PRODUCT",
//   };
// };
// Acmin Reducer
export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MENU":
      return {
        ...state,
        showMenu: true,
      };
    case "HIDE_MENU":
      return {
        ...state,
        showMenu: false,
      };
    case "TOGGLE_MENU":
      return {
        ...state,
        showMenu: !state.showMenu,
      };

    default:
      return state;
  }
};
