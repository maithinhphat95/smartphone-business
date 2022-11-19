import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../../../components/customer/Nav";
import Footer from "../../../layouts/customer/Footer";
import Header from "../../../layouts/customer/Header";
CustomerSite.propTypes = {};
function CustomerSite(props) {
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
