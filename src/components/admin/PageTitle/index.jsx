import React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { adminColorDark, adminColorLight } from "../../../constant/admin";

PageTitle.propTypes = {};

function PageTitle(props) {
  const { title, description } = props;
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
    <Box className="page-title" sx={{ mb: 2, height: "58px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Box>
  );
}

export default PageTitle;
