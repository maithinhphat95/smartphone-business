import React from "react";
import PropTypes from "prop-types";
import PageTitle from "../../../components/admin/PageTitle";
import { Box } from "@mui/material";
import DataTable from "../../../components/admin/Tables/DataTable";
import { tableHead, tableRows } from "../../../constant/admin";
import ProductList from "../../../components/admin/ProductList";

InventoryPage.propTypes = {};

function InventoryPage(props) {
  const inventoryData = {
    title: "Product List",
    category: "product",
    head: tableHead.product,
    body: tableRows.product,
    extra: {
      isExtra: false,
    },
    isControl: true,
    searchBy: "name",
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
            flexDirection: "column",
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <DataTable data={inventoryData} />
          <ProductList />
        </Box>
      </Box>
    </>
  );
}

export default InventoryPage;
