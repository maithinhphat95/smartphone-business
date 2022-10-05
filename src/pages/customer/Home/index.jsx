import React from "react";
import Imgbackground from "../../../components/customer/bg";
import Breadcrumb from "../../../components/customer/Breadcrumb";
import HomeListItem from "../../../components/customer/Home-ListItem/Home-ListItemOne";
import HomeListItemThree from "../../../components/customer/Home-ListItem/Home-ListItemThree";
import HomeListItemTwo from "../../../components/customer/Home-ListItem/Home-ListItemTwo";

function Home(props) {
  return (
    <>
      <Breadcrumb />
      <Imgbackground />
      <HomeListItem title="Khuyến Mãi Hot" />
      <HomeListItemTwo title="Sản phẩm bán chạy" />
      <HomeListItemThree title="Apple" />
      {/* <CraouselOne /> */}
    </>
  );
}

export default Home;
