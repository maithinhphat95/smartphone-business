import React, { useState } from "react";
import { Box } from "@mui/system";
import Menu from "../../../components/admin/Menu";
import DashboardPage from "../../../pages/admin/DashboardPage";
import { Route, Routes } from "react-router-dom";
import RevenuePage from "../../../pages/admin/RevenuePage";
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
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/revenue" element={<RevenuePage />} />
      </Routes>
    </Box>
  );
}

export default Main;
