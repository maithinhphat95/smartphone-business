import React, { useState } from "react";
import PropTypes from "prop-types";
import Menu from "../../components/Menu";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

Main.propTypes = {};

function Main(props) {
  const [show, setShow] = useState(false);
  const handleShow = (e) => {
    setShow(!show);
  };
  return (
    <Box sx={{ position: "relative", top: 70, minHeight: "100%" }}>
      <Button onClick={(e) => handleShow(e)}>Click</Button>
      <Menu show={show} />
    </Box>
  );
}

export default Main;
