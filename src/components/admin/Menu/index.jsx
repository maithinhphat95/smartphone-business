import React from "react";
import { Box } from "@mui/material";
import AccountShort from "../AccountShort";
import NavList from "../NavList";
import { useSelector } from "react-redux";
Menu.propTypes = {};
function Menu(props) {
  const showMenu = useSelector((state) => state.admin.showMenu);
  return (
    <Box
      className="menu"
      sx={{
        overflow: {
          xs: "hidden",
        },
        transform: showMenu ? "translateX(0)" : "translateX(-100%)",
        transition: "0.5s",
        position: showMenu ? "static" : "fixed",
      }}
    >
      <Box
        sx={{
          width: 250,
          backgroundColor: "#f0f0f0",
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
