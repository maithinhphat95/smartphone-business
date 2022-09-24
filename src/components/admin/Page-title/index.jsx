import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

PageTitle.propTypes = {};

function PageTitle(props) {
  const { title, description } = props;
  return (
    <Box className="page-title" sx={{ mb: 3 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </Box>
  );
}

export default PageTitle;
