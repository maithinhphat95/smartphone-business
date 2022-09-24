import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
ChartCover.propTypes = {};

function ChartCover(props) {
  const { children } = props;
  return (
    <Box
      sx={{
        padding: "8px 10px",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: 0, md: 2 },
        justifyContent: "Center",
      }}
    >
      {children}
    </Box>
  );
}

export default ChartCover;
