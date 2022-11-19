import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { tableHead } from "../../../constant/admin";
import PageTitle from "../../../components/admin/PageTitle";
import {
  getProductList,
  getProductListRequest,
} from "../../../redux/common/productReducer";
import ProductTable from "../../../components/admin/Tables/ProductTable";
import { useCallback } from "react";
import axiosClient from "../../../apis/axiosClient";

InventoryPage.propTypes = {};

function InventoryPage(props) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  // Get productList from LocalStorage
  const localData = JSON.parse(localStorage.getItem("productList"));

  // Get productList from Redux State
  const productList =
    useSelector((state) => state.product.productList) || localData;
  // Init the data for table Product List
  const inventoryData = {
    title: "Product List",
    category: "product",
    head: tableHead.product,
    body: productList,
    isControl: true,
    searchBy: "name",
  };

  useEffect(() => {
    dispatch(getProductListRequest());
  }, []);

  console.log(productList);
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
          <ProductTable data={inventoryData} />
        </Box>
      </Box>
    </>
  );
}

export default InventoryPage;
