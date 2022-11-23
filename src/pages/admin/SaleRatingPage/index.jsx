import { Box } from "@mui/material";
import React from "react";
import BrandRatingChart from "../../../components/admin/Charts/BrandRatingChart";
import SaleRatingChart from "../../../components/admin/Charts/SaleRatingChart";
import PageTitle from "../../../components/admin/PageTitle";

SaleRatingPage.propTypes = {};

function SaleRatingPage(props) {
  return (
    <>
      <PageTitle
        title="Sale Rating"
        description="Phone Brand Rating and Best Selling Product"
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
          <BrandRatingChart />
          <SaleRatingChart />
        </Box>
      </Box>
    </>
  );
}

export default SaleRatingPage;
