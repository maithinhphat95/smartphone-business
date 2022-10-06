import {React, Component } from 'react';
import Slider from "react-slick";
import { Container } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useFetch from '../../../../components/customize/fetch';
// import "./ProductItem.scss";


function ProductItemSearch(props) {
  //API
  //componentDidMount
  const { data: dataProductItem, isLoading, isError }
  // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
  = useFetch('http://localhost:3006/productitem')
  return(
    <>
   
  
    {/* {console.log("checkData>>>", dataProductItem)} */}
    
  {isError === false &&
    isLoading === false &&
    dataProductItem &&
    dataProductItem.length > 0 &&
    dataProductItem.map((item) => {
      return (
        <Card key={item.id} className='titleitem' sx={{ maxWidth: 345}}>
        <CardActionArea >
          <CardMedia className='imgmedia'
            component="img"
            height="280px"
            width="100%"
            image={item.img}
            alt="green iguana"
          />
          <CardContent>
          
            <Typography gutterBottom variant="h6" component="div">	
            <a href="" className='name-product'>{item.name}</a>
            </Typography>
            <Typography className='price' variant="body2" color="text.secondary">
            {item.priceNew} đ 
            </Typography>
            <div className="strike-price"><strike>{item.priceOld} đ</strike></div>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Button variant="contained" color="success">Mua ngay</Button>
        </CardActions>
      </Card>
    );
  })}
    {/* loading */}
    {isLoading === true && (
           
              <p  className='p-style' style={{ textAlign: "center" }}>
                {" "}
                Loading...
              </p>
          )}
{/* ko có dữ liệu */}
          {isError === true && (
           
              <p className='p-style' style={{ textAlign: "center" }}>
                {" "}
                Something wrong state 404...{" "}
              </p>
        
          )}
    
        
          
    </>
    )
}

export default ProductItemSearch;