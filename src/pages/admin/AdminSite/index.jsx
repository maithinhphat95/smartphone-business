import React from "react";
import PropTypes from "prop-types";
import Header from "../../../layouts/admin/Header";
import Main from "../../../layouts/admin/Main";
import { Box } from "@mui/material";
import { adminColorLight } from "../../../constant/admin";
import { Outlet } from "react-router-dom";
AdminSite.propTypes = {};

function AdminSite(props) {
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
