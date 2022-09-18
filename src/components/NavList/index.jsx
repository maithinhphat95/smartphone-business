import React from "react";
import PropTypes from "prop-types";
import Title from "../Title";
import { Box } from "@mui/material";
import NavItem from "../NavItem";
NavList.propTypes = {};

function NavList(props) {
  return (
    <Box sx={{ p: 1 }}>
      <Box>
        <Title content="Overview" />
        <NavItem content="Home Page" />
        <NavItem content="Admin Dashboard" />
      </Box>
      <Box>
        <Title content="Overview" />
        <NavItem content="Home Page" />
        <NavItem content="Admin Dashboard" />
      </Box>
    </Box>
  );
}

export default NavList;
