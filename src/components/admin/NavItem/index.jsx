import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
NavItem.propTypes = {};

function NavItem(props) {
  const { content } = props;
  return (
    <>
      <Button
        sx={{
          width: "100%",
          justifyContent: "flex-start",
          backgroundColor: "#D9D9D9",
          mb: 0.5,
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            textTransform: "capitalize",
            color: "black",
            fontSize: "16px",
          }}
          to=""
        >
          {content}
        </Link>
      </Button>
    </>
  );
}

export default NavItem;
