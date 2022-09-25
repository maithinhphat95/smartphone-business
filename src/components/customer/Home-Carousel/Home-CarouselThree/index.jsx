import { Box, Grid } from '@mui/material';
import { Container } from '@mui/system';
import {React, Component } from 'react';
import Slider from "react-slick";
import ProductItem from '../../ProductItem';
// import ProductItem from '../../ProductItem';
import "./CarouselThree.scss";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

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
function CarouselThree(props) {
    return (
        <div  className="container-fluid profuid">
    <Container className="title-list">
    <h2>{props.title}</h2>
        <div className="container carousel-list">
        <Slider {...settings}>
        <ProductItem/>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        </Slider>
    </div>
    </Container>
    </div>
    );
}

export default CarouselThree;