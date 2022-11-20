import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

Label.propTypes = {};

function Label(props) {
  const { content, textColor, backgroundColor } = props;
  return (
    <Box
      className="label"
      textAlign={"center"}
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: 3,
        color: textColor,
        padding: "2px 8px ",
      }}
    >
      {content}
    </Box>
  );
}

export default Label;
