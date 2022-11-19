import React from "react";
import { Box } from "@mui/material";
import RevenueSummaryChart from "../../../components/admin/Charts/RevenueSummaryChart";
import PageTitle from "../../../components/admin/PageTitle";
import MonthlyRevenueChart from "../../../components/admin/Charts/MonthlyRevenueChart";
import OrderTable from "../../../components/admin/Tables/OrderTable";
import { tableHead, tableRows } from "../../../constant/admin";

RevenuePage.propTypes = {};

function RevenuePage(props) {
  const tableData = {
    title: "Order List",
    category: "order",
    head: tableHead.order,
    body: tableRows.order,
    extra: {
      isExtra: true,
      extraHead: tableHead.purchased,
    },

    isControl: false,
    searchBy: "id",
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
          <OrderTable data={tableData} />
        </Box>
      </Box>
    </>
  );
}

export default RevenuePage;
