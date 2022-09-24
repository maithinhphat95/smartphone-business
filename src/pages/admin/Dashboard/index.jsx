import React from "react";
import { Box, Card, Typography } from "@mui/material";
import PageTitle from "../../../components/admin/Page-title";
import RevenueSummaryChart from "../../../components/admin/Charts/RevenueSummaryChart";
import BrandRatingChart from "../../../components/admin/Charts/BrandRatingChart";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
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
          gap: 2,
          // justifyItems: "center",
          // justifyContent: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          // flexWrap: "wrap",
          margin: "0 auto",
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
      {/* Nav link list */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Card
          sx={{
            width: "250px",
            borderLeft: 4,
            borderRadius: 1,
            borderColor: "blue",
            p: 2,
          }}
        >
          <Typography variant="p" component="h3">
            1465
          </Typography>
          <Typography variant="p" component="p">
            Orders
          </Typography>
          <Typography variant="p" component="p">
            + 12% from last month
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}

export default Dashboard;
