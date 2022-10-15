import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
NavItem.propTypes = {};

function NavItem(props) {
  const { content, url } = props;
  return (
    <Link
      style={{
        color: "black",
        fontSize: "16px",
        width: "100%",
        height: "32px",
        display: "flex",
        marginBottom: "2px",
        textDecoration: "none",
        textTransform: "capitalize",
        alignItems: "center",
        backgroundColor: "#D9D9D9",
        borderRadius: "8px",
        overflow: "hidden",
      }}
      to={url}
    >
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
  );
}

export default NavItem;
