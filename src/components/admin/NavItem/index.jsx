import React from "react";
import { SvgIcon, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Store,
  PieChart,
  Leaderboard,
  Paid,
  AccountBox,
  ViewList,
} from "@mui/icons-material";
import "./style.scss";
NavItem.propTypes = {};

function NavItem(props) {
  const { content, url, blank, icon } = props;
  function renderIcon() {
    switch (icon) {
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
          <AccountBox sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />
        );
      case "ViewList":
        return (
          <ViewList sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />
        );
      default:
        return;
    }
  }
  return (
    <>
      {blank ? (
        <a className="nav-link" href={url} target="_blank">
          <Store sx={{ padding: 0, marginLeft: 1 }} />
          <Typography>{content}</Typography>
        </a>
      ) : (
        <Link className="nav-link" to={url}>
          {renderIcon()}
          <Typography
            sx={{
              padding: "8px",
              width: "100%",
              "&:hover": { backgroundColor: "#A0A0A0", color: "white" },
            }}
          >
            {content}
          </Typography>
        </Link>
      )}
    </>
  );
}

export default NavItem;
