import React from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../../../components/customer/Nav";
import Footer from "../../../layouts/customer/Footer";
import Header from "../../../layouts/customer/Header";
import { getUserListRequest } from "../../../redux/common/userReducer";
import { getProductListRequest } from "../../../redux/common/productReducer";
import { getOrderListRequest } from "../../../redux/common/orderReducer";
CustomerSite.propTypes = {};
function CustomerSite(props) {
  const dispatch = useDispatch();
  // Fetch Data
  useEffect(() => {
    dispatch(getUserListRequest());
    dispatch(getProductListRequest());
    dispatch(getOrderListRequest);
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
