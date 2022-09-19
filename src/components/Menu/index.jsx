import React from "react";
import { Box } from "@mui/material";
import AccountShort from "../Account-short";
import NavList from "../NavList";
Menu.propTypes = {};

function Menu(props) {
  const { show } = props;
  return (
    <div
      className="menu"
      style={{
        transform: !show && "translateX(-100%)",
        transition: "transform 0.5s",
      }}
    >
      <Box
        sx={{
          width: 250,
          backgroundColor: "inherit",
          border: 1,
          borderColor: "text.disabled",
        }}
      >
        <AccountShort />
        <NavList />
      </Box>
    </div>
  );
}

export default Menu;
