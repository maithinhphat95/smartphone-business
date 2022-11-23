import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Stack } from "@mui/material";
import PageTitle from "../../../components/admin/PageTitle";
import ProductTable from "../../../components/admin/Tables/ProductTable";

InventoryPage.propTypes = {};

function InventoryPage(props) {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    return clearTimeout();
  }, []);

  return (
    <>
      <PageTitle
        title="Inventory Manager"
        description="Inventory And Product Manager"
      />
      {isLoading ? (
        <Stack
          sx={{
            width: "100%",
            justifyContent: "center",
            alignItem: "center",
          }}
          spacing={2}
          direction="row"
        >
          <CircularProgress color="primary" />
          <CircularProgress color="primary" />
          <CircularProgress color="primary" />
        </Stack>
      ) : (
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
            <ProductTable />
          </Box>
        </Box>
      )}
    </>
  );
}

export default InventoryPage;
