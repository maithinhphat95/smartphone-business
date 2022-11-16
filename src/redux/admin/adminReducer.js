import { yearlyRevenue } from "../../constant/admin";
import * as adminAction from "./adminType";

const initialState = {
  showMenu: false,
  yearlyData: yearlyRevenue,
  productList: [],
  // sortCategory: "date",
  // sortOrder: "desc",
};
// Admin action
export const showMenu = () => {
  return {
    type: adminAction.SHOWMENU,
  };
};
export const toggleMenu = () => {
  return {
    type: adminAction.TOGGLEMENU,
  };
};

// Acmin Reducer
export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case adminAction.SHOWMENU:
      return {
        ...state,
        showMenu: true,
      };

    case adminAction.TOGGLEMENU:
      return {
        ...state,
        showMenu: !state.showMenu,
      };

    default:
      return state;
  }
};
