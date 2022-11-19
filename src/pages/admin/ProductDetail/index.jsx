import React from "react";
import PageTitle from "../../../components/admin/PageTitle";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

ProductDetail.propTypes = {};

function ProductDetail(props) {
  let { brand, productId } = useParams();
  console.log(productId);
  return (
    <>
      <PageTitle
        title="Product Information"
        // description="Inventory And Product Manager"
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
          <Typography>{brand + productId}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default ProductDetail;
