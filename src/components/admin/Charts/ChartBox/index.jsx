import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
ChartBox.propTypes = {};

function ChartBox(props) {
  const { children } = props;
  return (
    <Box
      sx={{
        flex: 1,
        overflow: "auto",
        // minWidth: "300px"
      }}
    >
      {children}
    </Box>
  );
}

export default ChartBox;
