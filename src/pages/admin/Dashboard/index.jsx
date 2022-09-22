import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import PageTitle from "../../../components/admin/Page-title";
import RevenueSummary from "../../../components/admin/Charts/RevenueSummaryChart";
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
      }}
    >
      <PageTitle
        title="Admin Dashboard Overview"
        description="Sale overview and summary"
      />
      <Box display="flex" gap="20px">
        <RevenueSummary />
        <BrandRatingChart />
      </Box>
    </Box>
  );
}

export default Dashboard;
