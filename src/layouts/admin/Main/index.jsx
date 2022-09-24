import React, { useState } from "react";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import Menu from "../../../components/admin/Menu";
import Dashboard from "../../../pages/admin/Dashboard";
import PageTitle from "../../../components/admin/Page-title";
Main.propTypes = {};

function Main(props) {
  return (
    <Box
      sx={{
        position: "relative",
        top: 70,
        display: "flex",
      }}
    >
      <Menu />
      <Box
        className="dashboard"
        sx={{
          p: 2,
          flex: 1,
          overflow: "auto",
        }}
      >
        <PageTitle
          title="Admin Dashboard Overview"
          description="Sale overview and summary"
        />
        <Dashboard />
      </Box>
    </Box>
  );
}

export default Main;
