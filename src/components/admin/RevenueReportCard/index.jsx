import React from "react";
import { Box, Typography } from "@mui/material";
import { adminColorDark, adminColorLight } from "../../../constant/admin";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
RevenueReportCard.propTypes = {};

function RevenueReportCard(props) {
  const { reportObj } = props;
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
        fontSize: "12px",
        borderRadius: 2,
        backgroundColor: theme.secondary,
        p: 1,
      }}
    >
      <Typography
        variant="p"
        component="p"
        sx={{
          fontStyle: "italic",
          fontWeight: "bold",
          display: "flex",
          width: "max-content",
          margin: "0 auto",
        }}
      >
        {reportObj.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 0,
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography
          component="h6"
          variant="h6"
          sx={{ fontSize: "16px", color: theme.highlight1 }}
        >
          $ {reportObj.value.toLocaleString()}
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{
            color: theme.highlight2,
            fontStyle: "italic",
            fontSize: "12px",
          }}
        >
          Previous : $ {reportObj.previous.toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );
}

export default RevenueReportCard;
