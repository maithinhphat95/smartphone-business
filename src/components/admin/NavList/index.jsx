import React from "react";
import Title from "../Title";
import { Box } from "@mui/material";
import NavItem from "../NavItem";
import "./style.css";
NavList.propTypes = {};

function NavList(props) {
  return (
    <Box
      sx={{
        p: 1,
        pt: 0,
        overflowY: "scroll",
        height: "calc(100vh - 220px",
      }}
      className="nav-list"
    >
      <Box>
        <Title content="Overview" />
        <NavItem
          content="Shopping Page"
          blank={true}
          icon="Store"
          url="https://fptshop.com.vn/"
        />
        <NavItem content="Dashboard" icon="LeaderBoard" url="" />
      </Box>
      <Box>
        <Title content="Analytic" />
        <NavItem content="Revenue Summary" icon="Paid" url="/revenue" />
        <NavItem content="Sale Percent" icon="PieChart" url="/sale" />
      </Box>
      <Box>
        <Title content="Management" />
        <NavItem content="Inventory Manager" icon="ViewList" url="/inventory" />
        <NavItem content="Customer Manager" icon="AccountBox" />
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
