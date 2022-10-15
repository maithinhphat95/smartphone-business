import React from "react";
import { Box, Grid } from "@mui/material";
import RevenueSummaryChart from "../../../components/admin/Charts/RevenueSummaryChart";
import BrandRatingChart from "../../../components/admin/Charts/BrandRatingChart";
import { Inventory, Paid, Person, ShoppingBag } from "@mui/icons-material";
import SummaryCard from "../../../components/admin/SummaryCard";
import PageTitle from "../../../components/admin/PageTitle";

DashboardPage.propTypes = {};
function DashboardPage(props) {
  return (
    <>
      <PageTitle
        title="Admin Dashboard Overview"
        description="Sale overview and summary"
      />

      <Box sx={{ margin: "0 auto" }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <RevenueSummaryChart isViewDetail={true} />
          <BrandRatingChart isViewDetail={true} />
        </Box>
        {/* Nav link list */}
        <Grid container spacing={3} sx={{ mt: 0.5 }}>
          <SummaryCard
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
          <SummaryCard
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
          <SummaryCard
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
          <SummaryCard
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
    </>
  );
}

export default DashboardPage;
