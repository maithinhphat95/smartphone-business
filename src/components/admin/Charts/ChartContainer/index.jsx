import React from "react";
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
        overflow: "auto",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Box>
  );
}

export default ChartContainer;
