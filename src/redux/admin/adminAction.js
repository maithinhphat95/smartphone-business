import * as adminAction from "./adminType";
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
