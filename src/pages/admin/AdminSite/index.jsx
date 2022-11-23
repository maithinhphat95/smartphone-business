import React from "react";
import PropTypes from "prop-types";
import Header from "../../../layouts/admin/Header";
import Main from "../../../layouts/admin/Main";
import { Box } from "@mui/material";
import { adminColorLight } from "../../../constant/admin";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "../../../redux/common/userReducer";
AdminSite.propTypes = {};

function AdminSite(props) {
  // Hook
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Init variable
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  // check login
  useEffect(() => {
    if (
      (userData === {}) |
      !userData?.isLogin |
      !userData?.currentUser?.isAdmin
    ) {
      alert("You don't have permission to access this page");
      navigate("/");
    } else {
      dispatch(login(userData.currentUser));
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: adminColorLight.background,
          color: adminColorLight.text,
          minHeight: "100%",
        }}
      >
        <Header />
        <Main>
          <Outlet />
        </Main>
      </Box>
    </>
  );
}

export default AdminSite;
