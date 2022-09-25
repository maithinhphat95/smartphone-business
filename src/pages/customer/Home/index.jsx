import React from "react";
import Imgbackground from "../../../components/customer/bg";
import Breadcrumb from "../../../components/customer/Breadcrumb";
// import CraouselOne from "../../../components/customer/Home-Carousel/Home-CarouselOne";
import CarouselThree from "../../../components/customer/Home-Carousel/Home-CarouselThree";


function Home(props) {
  return (
    <>
      <Breadcrumb />
      <Imgbackground />
      <CarouselThree  title="Khuyến Mãi Hot"/>
      <CarouselThree title="Sản phẩm bán chạy"/>
      <CarouselThree title="Apple"/>
      {/* <CraouselOne /> */}
    </>
  );
}

export default Home;
