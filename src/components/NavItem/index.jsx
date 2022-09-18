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
          backgroundColor: "text.secondary",
          mb: 0.5,
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            textTransform: "uppercase",
            color: "white",
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
