import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserListRequest } from "../src/redux/common/userReducer";
import { getProductListRequest } from "../src/redux/common/productReducer";
import { getOrderListRequest } from "../src/redux/common/orderReducer";
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
import CustomerManager from "./pages/admin/CustomerManager";
import ProductDetail from "./pages/admin/ProductDetail";
import Profile from "./pages/admin/Profile";
import SettingPage from "./pages/admin/SettingPage";
import AdminPages from "./pages/admin/AdminPages";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  // Fetch Data
  useEffect(() => {
    dispatch(getUserListRequest());
    dispatch(getProductListRequest());
    dispatch(getOrderListRequest());
  }, []);

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

        <Route path="/admin" element={<AdminSite />}>
          <Route path="/admin/:page" element={<AdminPages />} />
          <Route
            path="/admin/product/:brand/:productId"
            element={<ProductDetail />}
          />
        </Route>
      </Routes>
    </>
  );
}
export default App;
