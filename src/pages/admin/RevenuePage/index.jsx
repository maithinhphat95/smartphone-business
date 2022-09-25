import React from "react";
import { Box } from "@mui/material";
import RevenueSummaryChart from "../../../components/admin/Charts/RevenueSummaryChart";
import PageTitle from "../../../components/admin/PageTitle";
import MonthlyRevenueChart from "../../../components/admin/Charts/MonthlyRevenueChart";
import { adminColorLight, adminColorDark } from "../../../constant/admin";

RevenuePage.propTypes = {};

function RevenuePage(props) {
  return (
    <>
      <PageTitle
        title="Revenue Summary"
        description="Revenue Overview and Summary"
      />

      <Box
        sx={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <RevenueSummaryChart />
          <MonthlyRevenueChart />
        </Box>
      </Box>
    </>
  );
}

export default RevenuePage;
