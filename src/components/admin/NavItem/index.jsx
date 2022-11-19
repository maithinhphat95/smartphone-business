import React from "react";
import { SvgIcon, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Store,
  PieChart,
  Leaderboard,
  Paid,
  ViewList,
  PersonAdd,
  AccountCircle,
  Settings,
  Logout,
  OpenInNew,
} from "@mui/icons-material";
import "./style.scss";
NavItem.propTypes = {};

function NavItem(props) {
  const { content, url, blank, icon } = props;
  function renderIcon(data) {
    switch (data) {
      case "Store":
        return <Store sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />;
      case "LeaderBoard":
        return (
          <Leaderboard sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />
        );
      case "Paid":
        return <Paid sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />;
      case "PieChart":
        return (
          <PieChart sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />
        );
      case "AccountBox":
        return (
          <PersonAdd sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />
        );
      case "ViewList":
        return (
          <ViewList sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />
        );
      case "Personal":
        return (
          <AccountCircle sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />
        );
      case "Setting":
        return (
          <Settings sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />
        );
      case "Logout":
        return <Logout sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />;
      case "NewTab":
        return (
          <OpenInNew
            sx={{
              padding: 0,
              marginLeft: "auto",
              marginRight: 1,
              fontSize: "14px",
            }}
          />
        );
      default:
        return;
    }
  }
  return (
    <>
      <Link className="nav-link" to={url} target={blank && "_blank"}>
        {renderIcon(icon)}
        <Typography
          sx={{
            padding: "8px",
            width: "100%",
            "&:hover": { backgroundColor: "#A0A0A0", color: "white" },
          }}
        >
          {content}
        </Typography>
        {blank && renderIcon("NewTab")}
      </Link>
    </>
  );
}

export default NavItem;
