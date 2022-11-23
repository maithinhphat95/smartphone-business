import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { logout } from "../../../redux/common/userReducer";
import NavItem from "../NavItem";
import Title from "../Title";
import "./style.css";
NavList.propTypes = {};

function NavList(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
    localStorage.clear();
    dispatch(logout());
    return new Promise((resolve) => {
      setTimeout(() => {
        navigate("/");
        resolve(true);
      }, 0);
    });
  };
  return (
    <Box
      sx={{
        p: 1,
        pt: 0,
        overflowY: "scroll",
      }}
      className="nav-list"
    >
      <Box>
        <Title content="Overview" />
        <NavItem content="Shopping Page" blank={true} icon="Store" url="/" />
        <NavItem
          content="Dashboard"
          icon="LeaderBoard"
          url="/admin/dashboard"
        />
      </Box>
      <Box>
        <Title content="Analytic" />
        <NavItem content="Revenue Summary" icon="Paid" url="/admin/revenue" />
        <NavItem content="Sale Percent" icon="PieChart" url="/admin/sale" />
      </Box>
      <Box>
        <Title content="Management" />
        <NavItem
          content="Inventory Manager"
          icon="ViewList"
          url="/admin/inventory"
        />
        <NavItem
          content="Customer Manager"
          icon="AccountBox"
          url="/admin/customers"
        />
      </Box>
      <Box>
        <Title content="Account" />
        <NavItem content="Profile" icon="Personal" url="/admin/profile" />
        <NavItem content="Setting" icon="Setting" url="/admin/setting" />
        <div onClick={handleLogout}>
          <NavItem content="Logout" icon="Logout" url="/admin/logout" />
        </div>
      </Box>
    </Box>
  );
}

export default NavList;
