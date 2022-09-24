import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import PageTitle from "../../../components/admin/Page-title";
import RevenueSummaryChart from "../../../components/admin/Charts/RevenueSummaryChart";
import BrandRatingChart from "../../../components/admin/Charts/BrandRatingChart";
Dashboard.propTypes = {};

function Dashboard(props) {
  return (
    <Box
      className="dashboard"
      sx={{
        p: 2,
        flex: 1,
        overflow: "auto",
        maxWidth: "100%",
        minHeight: "min-content",
        overflow: "auto",
      }}
    >
      <PageTitle
        title="Admin Dashboard Overview"
        description="Sale overview and summary"
      />
      <Box
        sx={{
          display: "flex",
          gap: 5,
          flexDirection: { xs: "column", md: "row", justifyItems: "center" },
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            flex: 2,
            display: "flex",
            justifyContent: "center",
            overflow: "auto",
          }}
        >
          <RevenueSummaryChart />
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <BrandRatingChart />
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
