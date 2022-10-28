import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Banner from "../../../components/customer/Banner";
import ProductItem from "../../../components/customer/ProductItem";
import SideBar from "../../../components/customer/SideBar";
import useFetch from "../../../components/customize/fetch";
function PhoneItem(props) {
  //set Choose input
  const [choose, setChoose] = useState("");

  const handleChange = (event) => {
    setChoose(event.target.value);
  };
  //API
  //componentDidMount
  const { data: dataProductItem, isLoading, isError } =
    // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
    useFetch("http://localhost:3006/phoneItem");
  return (
    <>
      <Banner />
      <div className="container-fluid profuid">
        <div className="container">
          <Grid container>
         <SideBar />
            <Grid item={true} xs={12} sm={6} md={9}>
              <Container className="title-list" sx={{ marginBottom: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Điện thoại ({dataProductItem.length} sản phẩm)
                </Typography>
              </Container>
              <Container className="title-list">
                {/* <Box sx={{ paddingBottom: 4 }}>
                  <FormControl sx={{ width: 120}}>
                    <InputLabel id="demo-simple-select-label">
                      Chosse
                    </InputLabel>
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
                </Box> */}
                <Box>
                  <Grid container spacing={3}>
                    {isError === false &&
                      isLoading === false &&
                      dataProductItem &&
                      dataProductItem.length > 0 &&
                      dataProductItem.map((item) => {
                        return (
                          <Grid key={item.id} item={true} xs={12} sm={6} md={4}>
                            <ProductItem
                              img={item.img}
                              name={item.name}
                              priceNew={item.priceNew}
                              priceOld={item.priceOld}
                              id= {item.id}
                            />
                          </Grid>
                        );
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
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default PhoneItem;
