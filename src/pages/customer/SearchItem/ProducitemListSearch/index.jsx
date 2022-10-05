import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductItem from "../../../../components/customer/ProductItem";
// import "./ProducitemListSearch.scss";
function ProducitemListSearch(props) {
  return (
    <div  className="container-fluid profuid">
    <Container className="title-list">
    <h2>KHUYẾN MÃI HOT</h2>
    <Box  sx={{ flexGrow: 1 }}>
      <Grid container  spacing={5}>
        <Grid item sm={6} md={3}>
          <ProductItem />
        </Grid>
        <Grid item sm={6} md={3}>
          <ProductItem />
        </Grid>
        <Grid item sm={6} md={3}>
          <ProductItem />
        </Grid>
        <Grid item sm={6} md={3}>
          <ProductItem />
        </Grid>
      </Grid>
    </Box>
    </Container>
    </div>
  );
}

export default ProducitemListSearch;
