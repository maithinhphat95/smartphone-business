import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../../../components/customer/Nav";
import Footer from "../../../layouts/customer/Footer";
import Header from "../../../layouts/customer/Header";
import {
  getUserList,
  getUserListRequest,
} from "../../../redux/common/userReducer";
import { getProductList } from "../../../redux/common/productReducer";
CustomerSite.propTypes = {};
function CustomerSite(props) {
  const dispatch = useDispatch();
  // fetch user list
  useEffect(() => {
    dispatch(getUserListRequest());
    dispatch(getProductList());
    // dispatch(getOrderRequest());
  }, []);

  return (
    <>
      <Header />
      <Nav />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default CustomerSite;
