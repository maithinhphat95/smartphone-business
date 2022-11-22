import React from "react";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { adminColorDark, adminColorLight } from "../../../../constant/admin";
import { useSelector } from "react-redux";
import { useState } from "react";

ChartContainer.propTypes = {};
function ChartContainer(props) {
  const { children, maxWidth } = props;
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
        width: "100%",
        // maxHeight: "410px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.itemBackground,
        borderRadius: 2,
        boxShadow: `4px 4px 4px ${theme.shadow}`,
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
