import React from "react";
import { Box, Grid } from "@mui/material";
import RevenueSummaryChart from "../../../components/admin/Charts/RevenueSummaryChart";
import BrandRatingChart from "../../../components/admin/Charts/BrandRatingChart";
import { Inventory, Paid, Person, ShoppingBag } from "@mui/icons-material";
import NavLinkCard from "../../../components/admin/SummaryCard";
import PageTitle from "../../../components/admin/PageTitle";
import MonthlyRevenueChart from "../../../components/admin/Charts/MonthlyRevenueChart";

RevenuePage.propTypes = {};

function RevenuePage(props) {
  return (
    <Box
      className=""
      sx={{
        p: 2,
        flex: 1,
        overflow: "auto",
      }}
    >
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
    </Box>
  );
}

export default RevenuePage;
