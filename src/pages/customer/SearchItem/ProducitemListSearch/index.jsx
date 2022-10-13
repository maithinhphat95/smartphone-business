import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import ThemeContext from "../../../../components/customer/Context/ThemeContext";
import ProductItem from "../../../../components/customer/ProductItem";
import useFetch from "../../../../components/customize/fetch";
// import "./ProducitemListSearch.scss";
function ProducitemListSearch(props) {
    //componentDidMount
    const { data: dataProductItem } =
    // // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
    useFetch("http://localhost:3006/productitem");
    const {setResultTitle,resultTitle,searchTerm} = useContext(ThemeContext);
  return (
    <div  className="container-fluid profuid">
    <Container className="title-list">
    <h2>{resultTitle}</h2>
    <Box  sx={{ flexGrow: 1 }}>
      <Grid container  spacing={5}>
      {
        dataProductItem 
              .filter((val) => {
                if(searchTerm === ""){
                  setResultTitle("No Search Result Found!");
                  
                }else if( val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                  setResultTitle("Kết quả tìm kiếm!");
                  return val;
                } 
                
              })
              .map((item) => {
                        return (
                          <Grid key={item.id} item={true} xs={12} sm={12} md={3}>
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
                 
        {/* <Grid item sm={6} md={3}>
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
        </Grid> */}
      </Grid>
    </Box>
    </Container>
    </div>
  );
}

export default ProducitemListSearch;
