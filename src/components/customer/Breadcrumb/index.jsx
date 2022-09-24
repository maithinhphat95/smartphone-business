import React from "react";
import PropTypes from "prop-types";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import "./Breadcrumb.scss";
function Breadcrumb(props) {
  return (
    <div className="container-fluid breadcrumb">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Trang chủ
          </Link>
          {/* <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link> */}
          <Typography color="text.primary">Điện thoại</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default Breadcrumb;
