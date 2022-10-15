import React from "react";
import { Box } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import { adminColorLight } from "../../../constant/admin";
import Menu from "../../../components/admin/Menu";
import DashboardPage from "../../../pages/admin/DashboardPage";
import RevenuePage from "../../../pages/admin/RevenuePage";
import SaleRatingPage from "../../../pages/admin/SaleRatingPage";

Main.propTypes = {};

function Main(props) {
  return (
    <Box
      sx={{
        position: "relative",
        top: 70,
        display: "flex",
        backgroundColor: adminColorLight.background,
      }}
    >
      <Menu />
      <Box
        className="dashboard"
        sx={{
          p: 2,
          flex: 1,
          overflow: "auto",
          backgroundColor: adminColorLight.background,
          minHeight: "calc(100vh - 70px)",
        }}
      >
        <Routes>
          <Route path="/admin" element={<DashboardPage />} />
          <Route path="/revenue" element={<RevenuePage />} />
          <Route path="/sale" element={<SaleRatingPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Main;
