import React from "react";
import { Box } from "@mui/material";
import AccountShort from "../AccountShort";
import NavList from "../NavList";
import { useSelector } from "react-redux";
import { adminColorLight } from "../../../constant/admin";
Menu.propTypes = {};
function Menu(props) {
  const showMenu = useSelector((state) => state.admin.showMenu);

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
          backgroundColor: adminColorLight.secondary,
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
