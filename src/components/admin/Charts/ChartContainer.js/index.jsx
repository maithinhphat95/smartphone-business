import React, { Children } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

ChartContainer.propTypes = {};
function ChartContainer(props) {
  const { children, maxWidth } = props;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: 2,
        boxShadow: "4px 4px 4px #ccc",
        maxWidth: { maxWidth },
      }}
    >
      {children}
    </Box>
  );
}

export default ChartContainer;
