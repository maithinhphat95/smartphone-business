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
        transform: showMenu ? "translateX(0)" : "translateX(-100%)",
        transition: "0.5s",
        position: { xs: "fixed", lg: showMenu ? "static" : "fixed" },
        zIndex: "10",
        height: "max-content",
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
