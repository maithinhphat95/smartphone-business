import React from "react";
import PropTypes from "prop-types";
import Menu from "../../components/Menu";
import { Box } from "@mui/system";

Main.propTypes = {};

function Main(props) {
  return (
    <Box sx={{ position: "relative", top: 70, minHeight: "100%" }}>
      <Menu />
    </Box>
  );
}

export default Main;
