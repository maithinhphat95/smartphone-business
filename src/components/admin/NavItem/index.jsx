import React from "react";
import { Stack, SvgIcon, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
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
import { useState } from "react";
import { useEffect } from "react";
import { Box } from "@mui/system";
NavItem.propTypes = {};
// Render Icon
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
      return <PieChart sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />;
    case "AccountBox":
      return <PersonAdd sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />;
    case "ViewList":
      return <ViewList sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />;
    case "Personal":
      return (
        <AccountCircle sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />
      );
    case "Setting":
      return <Settings sx={{ padding: 0, marginLeft: 1, fontSize: "20px" }} />;
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
// Render Nav Item
function NavItem(props) {
  const { content, url, blank, icon } = props;
  const params = useParams();
  const [active, setActive] = useState(false);
  // isActive
  useEffect(() => {
    if (url) {
      setActive(url?.toLocaleLowerCase().includes(params?.page));
    } else console.log(false);
  }, [params]);

  return (
    <>
      <Link className="nav-link" to={url} target={blank && "_blank"}>
        <Box
          className="nav-link-item"
          sx={{
            backgroundColor: active && "#A0A0A0",
            color: active && "white",
          }}
        >
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
        </Box>
      </Link>
    </>
  );
}

export default NavItem;
