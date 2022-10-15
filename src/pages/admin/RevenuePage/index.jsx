import React from "react";
import { Box } from "@mui/material";
import RevenueSummaryChart from "../../../components/admin/Charts/RevenueSummaryChart";
import PageTitle from "../../../components/admin/PageTitle";
import MonthlyRevenueChart from "../../../components/admin/Charts/MonthlyRevenueChart";
import DataTable from "../../../components/admin/Tables/DataTable";
import { cellHead, rows } from "../../../constant/admin";

RevenuePage.propTypes = {};

function RevenuePage(props) {
  const tableData = {
    title: "Order List",
    category: "order",
    head: cellHead.order,
    body: rows,
    extra: {
      isExtra: true,
      extraHead: cellHead.purchased,
    },
  };
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
        <Box>
          <DataTable data={tableData} />
        </Box>
      </Box>
    </>
  );
}

export default RevenuePage;
