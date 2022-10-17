import React from "react";
import PropTypes from "prop-types";
import PageTitle from "../../../components/admin/PageTitle";
import { Box } from "@mui/material";
import DataTable from "../../../components/admin/Tables/DataTable";
import { cellHead, rows } from "../../../constant/admin";

InventoryPage.propTypes = {};

function InventoryPage(props) {
  const inventoryData = {
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
        title="Inventory Manager"
        description="Inventory And Product Manager"
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
          <DataTable data={inventoryData} />
        </Box>
      </Box>
    </>
  );
}

export default InventoryPage;
