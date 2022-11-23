import React from "react";
import { Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";

ComponentHeader.propTypes = {};

function ComponentHeader(props) {
  const { title } = props;
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      borderBottom={"1px solid black"}
      alignItems="center"
      paddingLeft={2}
    >
      <Typography variant="h6">{title}</Typography>
    </Stack>
  );
}

export default ComponentHeader;
