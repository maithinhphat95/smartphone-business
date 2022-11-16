import React from "react";
import { Box } from "@mui/system";
import { adminColorLight } from "../../../constant/admin";
import Menu from "../../../components/admin/Menu";

Main.propTypes = {};

function Main(props) {
  const { children } = props;
  return (
    <Box
      sx={{
        position: "relative",
        top: 70,
        display: "flex",
        backgroundColor: adminColorLight.background,
      }}
    >
      <Menu />
      <Box
        className="dashboard"
        sx={{
          p: 2,
          flex: 1,
          overflow: "auto",
          backgroundColor: adminColorLight.background,
          minHeight: "calc(100vh - 70px)",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Main;
