import React from "react";
import PropTypes from "prop-types";
import Title from "../Title";
import { Box, Avatar, Typography } from "@mui/material";
import AccountShort from "../Account-short";
import NavList from "../NavList";
Menu.propTypes = {};

function Menu(props) {
  return (
    <div className="menu">
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
