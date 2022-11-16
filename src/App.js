import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/customer/Home";
import Register from "./pages/customer/Register";
import Login from "./pages/customer/Login";
import Question from "./pages/customer/Question";
import Security from "./pages/customer/AboutSecurity";
import PhoneItem from "./pages/customer/PhoneItem";
import CarouselPhone from "./pages/customer/Carousel-PhoneItem";
import NotFound from "./pages/customer/NotFound";
import DetalPhone from "./pages/customer/PhoneItem/DetalPhone";
import CheckDefault from "./pages/customer/CheckOder/CheckDefault";
import Cart from "./pages/customer/Cart";
import ProductitemListSearch from "./pages/customer/SearchItem/ProductitemListSearch";
import CustomerSite from "./pages/customer/CustomerSite";
import AdminSite from "./pages/admin/AdminSite";
import DashboardPage from "./pages/admin/DashboardPage";
import RevenuePage from "./pages/admin/RevenuePage";
import SaleRatingPage from "./pages/admin/SaleRatingPage";
import InventoryPage from "./pages/admin/InventoryPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<CustomerSite />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/question" element={<Question />} />
          <Route path="/aboutSecurity" element={<Security />} />
          <Route path="/search" element={<ProductitemListSearch />} />
          <Route exact path="/phone" element={<PhoneItem />} />
          <Route path={`/phones/:producer`} element={<DetalPhone />} />
          <Route path={`/phone/:id`} element={<CarouselPhone />} />
          <Route path="/checkorder" element={<CheckDefault />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<AdminSite />}>
          <Route path="/admin" element={<DashboardPage />} />
          <Route path="/revenue" element={<RevenuePage />} />
          <Route path="/sale" element={<SaleRatingPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
