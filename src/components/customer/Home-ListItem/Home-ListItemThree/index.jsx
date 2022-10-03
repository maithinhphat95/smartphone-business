import {React, Component } from 'react';
import Slider from "react-slick";
import { Container } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import useFetch from '../../../customize/fetch';
import ProductItem from '../../ProductItem';


var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
function HomeListItemThree(props) {
  //API
  //componentDidMount
  const { data: dataProductItem, isLoading, isError }
  // = useFetch('https://api.covid19api.com/country/vietnam?from=2021-10-01T00:00:00Z&to=2021-10-20T00:00:00Z')
  = useFetch('http://localhost:3006/productitem')
  return(
    <>
    <div  className="container-fluid profuid">
    <Container className="title-list">
    <h2>{props.title}</h2>
     <div className="container carousel-list">
        <Slider {...settings}>
    {/* {console.log("checkData>>>", dataProductItem)} */}
    
  {isError === false &&
    isLoading === false &&
    dataProductItem &&
    dataProductItem.length > 0 &&
    dataProductItem.map((item) => {
     if( item["producer"] === "Apple"){
      return (
        <ProductItem  key={item.id}   
      img={item.img}
      name={item.name}
      priceNew={item.priceNew}
      priceOld={item.priceOld}
      id={item.id} />
    );
     }
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
    
         </Slider>
     </div>
     </Container>
     </div>
          
    </>
    )
}

export default HomeListItemThree;