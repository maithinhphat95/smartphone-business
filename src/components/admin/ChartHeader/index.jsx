import React from "react";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { adminColorDark, adminColorLight } from "../../../constant/admin";

ChartHeader.propTypes = {};

function ChartHeader(props) {
  const { chartName, goalData } = props;
  const [theme, setTheme] = useState(adminColorLight);
  const themeSeleted = useSelector((state) => state.admin.theme);
  // Update themse color
  useEffect(() => {
    switch (themeSeleted) {
      case "light":
        setTheme(adminColorLight);
        break;
      case "dark":
        setTheme(adminColorDark);
        break;
      default:
        setTheme(theme);
        break;
    }
  }, [themeSeleted]);
  return (
    <Box
      sx={{
        display: "flex",
        padding: "8px 10px",
        borderBottom: `1px solid ${theme.textColor}`,
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
      {/* {goalData && (
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
      )} */}
    </Box>
  );
}

export default ChartHeader;
