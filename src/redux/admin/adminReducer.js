import { yearlyRevenue } from "../../constant/admin";

const initialState = {
  showMenu: false,
  yearlyData: yearlyRevenue,
  theme: "light",
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
export const themeSelect = (theme) => {
  return {
    type: "THEME_SELECT",
    payload: theme,
  };
};

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
    case "THEME_SELECT":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
