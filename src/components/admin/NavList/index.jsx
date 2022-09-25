import React from "react";
import Title from "../Title";
import { Box } from "@mui/material";
import NavItem from "../NavItem";
NavList.propTypes = {};

function NavList(props) {
  return (
    <Box sx={{ p: 1, pt: 0 }}>
      <Box>
        <Title content="Overview" />
        <NavItem content="Home Page" url="/" />
        <NavItem content="Admin Dashboard" url="/admin" />
      </Box>
      <Box>
        <Title content="Analytic" />
        <NavItem content="Annual Revenue" url="/revenue" />
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
