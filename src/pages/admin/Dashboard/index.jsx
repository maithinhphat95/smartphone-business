import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import PageTitle from "../../../components/admin/Page-title";
import RevenueSummaryChart from "../../../components/admin/Charts/RevenueSummaryChart";
import BrandRatingChart from "../../../components/admin/Charts/BrandRatingChart";
import {
  ArrowDownward,
  ArrowUpward,
  Inventory,
  Paid,
  Person,
  ShoppingBag,
} from "@mui/icons-material";
import NavLinkCard from "../../../components/admin/NavLinkCard";
Dashboard.propTypes = {};
function Dashboard(props) {
  return (
    <Box sx={{ margin: "0 auto" }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "stretch",
          justifyContent: "center",
          flexDirection: "row",

          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        <RevenueSummaryChart />
        <BrandRatingChart />
      </Box>
      {/* Nav link list */}
      <Grid container spacing={3} sx={{ mt: 0.5 }}>
        <NavLinkCard
          icon={
            <ShoppingBag
              sx={{
                color: "white",
                width: 30,
                height: 30,
              }}
            />
          }
          color="blue"
          item={{ name: "Orders", value: 1420 }}
        />
        <NavLinkCard
          icon={
            <Person
              sx={{
                color: "white",
                width: 30,
                height: 30,
              }}
            />
          }
          color="orange"
          item={{ name: "Customers", value: 120 }}
        />
        <NavLinkCard
          icon={
            <Inventory
              sx={{
                color: "white",
                width: 30,
                height: 30,
              }}
            />
          }
          color="green"
          item={{ name: "Stock", value: 12420 }}
        />
        <NavLinkCard
          icon={
            <Paid
              sx={{
                color: "white",
                width: 30,
                height: 30,
              }}
            />
          }
          color="purple"
          item={{ name: "Income", value: 14220 }}
        />
      </Grid>
    </Box>
  );
}

export default Dashboard;
