import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../customize/fetch";
import ProductItem from "../ProductItem";



function TogglePhoneItem(props) {
  let params = useParams();
  //set Choose input
  const [choose, setChoose] = useState("");

  const handleChange = (event) => {
    setChoose(event.target.value);
  };
  //API
  //componentDidMount
  const { data: dataProductItem, isLoading, isError } =
    // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
    useFetch("http://localhost:3006/productitem/");
  console.log(params.producer);
  // const sortList = ["samsung" a
  // sortList.each(item)
  // if  productList.bran === item,
  // displayList.push
  // link = sortList .tostring()
  return (
    <Container className="title-list">
      <Box sx={{ paddingBottom: 4 }}>
        <FormControl sx={{ width: 120 }}>
          <InputLabel id="demo-simple-select-label">Chosse</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={choose}
            label="Chosse"
            onChange={handleChange}
          >
            <MenuItem value={10}>Bán chạy</MenuItem>
            <MenuItem value={20}>Giá thấp</MenuItem>
            <MenuItem value={30}>Giá cao</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <Grid container spacing={3}>
          {isError === false &&
            isLoading === false &&
            dataProductItem &&
            dataProductItem.length > 0 &&
            dataProductItem.map((item) => {
              if (item.producer === params.producer) {
                console.log(dataProductItem.producer);
                console.log(params.producer);
                return (
                  <Grid key={item.id} item={true} xs={12} sm={6} md={4}>
                    <ProductItem
                      img={item.img}
                      name={item.name}
                      priceNew={item.priceNew}
                      priceOld={item.priceOld}
                    />
                  </Grid>
                );
              }
              if (item.descriptionPrice === params.producer) {
                console.log(dataProductItem.producer);
                console.log(params.descriptionPrice);
                return (
                  <Grid key={item.id} item={true} xs={12} sm={6} md={4}>
                    <ProductItem
                      img={item.img}
                      name={item.name}
                      priceNew={item.priceNew}
                      priceOld={item.priceOld}
                    />
                  </Grid>
                );
              }
            })}
          {/* loading */}
          {isLoading === true && (
            <p className="p-style" style={{ textAlign: "center" }}>
              {" "}
              Loading...
            </p>
          )}
          {/* ko có dữ liệu */}
          {isError === true && (
            <p className="p-style" style={{ textAlign: "center" }}>
              {" "}
              Something wrong state 404...{" "}
            </p>
          )}
        </Grid>
      </Box>
    </Container>
  );
}

export default TogglePhoneItem;
