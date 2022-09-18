import React from "react";
import PropTypes from "prop-types";
import Title from "../Title";
import { Box } from "@mui/material";
import NavItem from "../NavItem";
NavList.propTypes = {};

function NavList(props) {
  return (
    <Box sx={{ p: 1, pb: 3 }}>
      <Box>
        <Title content="Overview" />
        <NavItem content="Home Page" />
        <NavItem content="Admin Dashboard" />
      </Box>
      <Box>
        <Title content="Analytic" />
        <NavItem content="Annual Revenue" />
        <NavItem content="Sale Rating" />
      </Box>
      <Box>
        <Title content="Management" />
        <NavItem content="Inventory Manager" />
        <NavItem content="Customer Manager" />
      </Box>
      <Box>
        <Title content="Account" />
        <NavItem content="Profile" />
        <NavItem content="Setting" />
        <NavItem content="Log out" />
      </Box>
    </Box>
  );
}

export default NavList;
