import React from "react";
import { Box } from "@mui/material";
import AccountShort from "../AccountShort";
import NavList from "../NavList";
import { useSelector } from "react-redux";
import { adminColorDark, adminColorLight } from "../../../constant/admin";
import { useState } from "react";
import { useEffect } from "react";
Menu.propTypes = {};
function Menu(props) {
  const showMenu = useSelector((state) => state.admin.showMenu);
  // Theme
  const [theme, setTheme] = useState(adminColorLight);
  const themeSeleted = useSelector((state) => state.admin.theme);
  // Update themse color
  useEffect(() => {
    switch (themeSeleted) {
      case "light":
        setTheme(adminColorLight);
        break;
      case "dark":
        setTheme(adminColorDark);
        break;
      default:
        setTheme(theme);
        break;
    }
  }, [themeSeleted]);
  return (
    <Box
      className="menu"
      sx={{
        transform: {
          xs: showMenu ? "translateX(0)" : "translateX(-100%)",
          lg: "translateX(0)",
        },

        transition: "0.5s",
        position: { xs: "fixed", lg: "static" },
        zIndex: "10",

        // backgroundColor: adminColorLight.background,
      }}
    >
      <Box
        sx={{
          width: 220,
          backgroundColor: theme.itemBackground,
          border: 1,
          borderColor: "text.disabled",
        }}
      >
        <AccountShort />
        <NavList />
      </Box>
    </Box>
  );
}

export default Menu;
