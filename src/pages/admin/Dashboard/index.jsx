import React from "react";
import PropTypes from "prop-types";
import RevenueSummary from "../../../components/admin/RevenueSummary";
import { Box, Typography } from "@mui/material";
import PageTitle from "../../../components/admin/Page-title";

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
      <RevenueSummary />
    </Box>
  );
}

export default Dashboard;
