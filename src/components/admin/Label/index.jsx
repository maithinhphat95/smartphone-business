import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

Label.propTypes = {};

function Label(props) {
  const { content, borderColor, backgroundColor, width, children } = props;
  return (
    <Box
      className="label"
      textAlign={"center"}
      sx={{
        backgroundColor: backgroundColor,
        borderColor: borderColor || backgroundColor,
        borderWidth: borderColor && "2px",
        borderRadius: 3,
        color:
          (backgroundColor != "white") & (backgroundColor != "yellow") &&
          "white",
        padding: "2px 8px ",
        minWidth: "50px",
        maxWidth: "80px",
        width: width || "auto",
        display: "flex",
        alignItems: "center",
        gap: 1,
        justifyContent: "center",
      }}
    >
      {children}
      {content}
    </Box>
  );
}

export default Label;
