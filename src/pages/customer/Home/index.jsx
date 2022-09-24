import React from "react";
import Imgbackground from "../../../components/customer/bg";
import Breadcrumb from "../../../components/customer/Breadcrumb";
import CarouselOne from "../../../components/customer/Home-Carousel/Home-CarouselOne";
import CarouselTwo from "../../../components/customer/Home-Carousel/Home-CarouselTwo";
import CarouselThree from "../../../components/customer/Home-Carousel/Home-CarouselThree";


function Home(props) {
  return (
    <>
      <Breadcrumb />
      <Imgbackground />
      <CarouselOne />
      <CarouselTwo />
      <CarouselThree />
    </>
  );
}

export default Home;
