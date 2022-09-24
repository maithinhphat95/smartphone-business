import React from "react";
import { Box, Grid } from "@mui/material";
import RevenueSummaryChart from "../../../components/admin/Charts/RevenueSummaryChart";
import BrandRatingChart from "../../../components/admin/Charts/BrandRatingChart";
import { Inventory, Paid, Person, ShoppingBag } from "@mui/icons-material";
import NavLinkCard from "../../../components/admin/NavLinkCard";
import PageTitle from "../../../components/admin/PageTitle";
DashboardPage.propTypes = {};
function DashboardPage(props) {
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
          <RevenueSummaryChart isViewDetail={true} />
          <BrandRatingChart isViewDetail={true} />
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
    </Box>
  );
}

export default DashboardPage;
