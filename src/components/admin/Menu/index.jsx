import React from "react";
import { Box } from "@mui/material";
import AccountShort from "../AccountShort";
import NavList from "../NavList";
Menu.propTypes = {};
function Menu(props) {
  const { showMenu } = props;
  return (
    <Box
      className="menu"
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
      }}
      // style={{
      //   transform: "translateX(-100%)",
      //   transition: "transform 0.5s",
      //   width: !show && "0",
      //   overflow: !show && "hidden",
      // }}
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
    </Box>
  );
}

export default Menu;
