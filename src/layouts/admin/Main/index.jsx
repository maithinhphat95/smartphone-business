import React from "react";
import { Box } from "@mui/system";
import { adminColorDark, adminColorLight } from "../../../constant/admin";
import Menu from "../../../components/admin/Menu";
import { useDispatch, useSelector } from "react-redux";
import { hideMenu } from "../../../redux/admin/adminReducer";
import { useState } from "react";
import { useEffect } from "react";

Main.propTypes = {};

function Main(props) {
  const { children } = props;
  const dispatch = useDispatch();
  // Theme
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
        position: "relative",
        top: 70,
        display: "flex",
        backgroundColor: theme.background,
      }}
    >
      <Menu />
      <Box
        className="admin-content"
        sx={{
          p: 2,
          flex: 1,
          overflow: "auto",
          backgroundColor: theme.background,
          minHeight: "calc(100vh - 70px)",
          color: theme.textColor,
        }}
        onClick={() => {
          dispatch(hideMenu());
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Main;
