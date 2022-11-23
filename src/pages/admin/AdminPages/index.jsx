import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import DashboardPage from "../DashboardPage";
import RevenuePage from "../RevenuePage";
import SaleRatingPage from "../SaleRatingPage";
import InventoryPage from "../InventoryPage";
import NotFoundPage from "../NotFoundPage";
import CustomerManager from "../CustomerManager";
import Profile from "../Profile";
import SettingPage from "../SettingPage";

AdminPages.propTypes = {};

export const renderPage = (page) => {
  switch (page) {
    case "dashboard":
      return <DashboardPage />;
    case "revenue":
      return <RevenuePage />;
    case "sale":
      return <SaleRatingPage />;
    case "inventory":
      return <InventoryPage />;
    case "customers":
      return <CustomerManager />;
    case "profile":
      return <Profile />;
    case "setting":
      return <SettingPage />;
    default:
      return <NotFoundPage />;
  }
};

function AdminPages(props) {
  const params = useParams();
  return renderPage(params.page);
}

export default AdminPages;
