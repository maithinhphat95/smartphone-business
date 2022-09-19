import React from "react";
import PropTypes from "prop-types";
import Title from "../../components/Title";
import { Box, Avatar, Typography } from "@mui/material";
import AccountShort from "../../components/Account-short";
import NavList from "../../components/NavList";
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
