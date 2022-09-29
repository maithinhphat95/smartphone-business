import React from "react";
import { Box, Typography } from "@mui/material";

ComponentHeader.propTypes = {};

function ComponentHeader(props) {
  const { chartName, goalData } = props;
  return (
    <Box
      sx={{
        display: "flex",
        padding: "8px 10px",
        borderBottom: "1px solid black",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        component="h3"
        sx={{ textAlign: { xs: "center", sm: "left" }, flex: 1 }}
      >
        {chartName}
      </Typography>
      {goalData && (
        <Typography
          variant="p"
          component="p"
          sx={{
            textAlign: "right",
            fontStyle: "italic",
            display: { xs: "none", sm: "inline" },
          }}
        >
          Goal this year:{" "}
          <Typography
            component="span"
            sx={{ color: "red", fontWeight: "bold", fontStyle: "normal" }}
          >
            {goalData}%
          </Typography>
        </Typography>
      )}
    </Box>
  );
}

export default ComponentHeader;
