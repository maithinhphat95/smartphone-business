import React, { useState } from "react";
import PropTypes from "prop-types";
import Menu from "../../../components/admin/Menu";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import Dashboard from "../../../pages/admin/Dashboard";
import { useSelector } from "react-redux";
import BrandRatingChart from "../../../components/admin/BrandRatingChart";

Main.propTypes = {};

function Main(props) {
  return (
    <Box
      sx={{
        position: "relative",
        top: 70,
        minHeight: "100%",
      }}
    >
      <Box sx={{ display: { xs: "block", md: "flex" } }}>
        <Menu />
        <Dashboard />
        <BrandRatingChart />
      </Box>
    </Box>
  );
}

export default Main;
