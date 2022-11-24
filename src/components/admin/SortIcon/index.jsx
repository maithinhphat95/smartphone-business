import React from "react";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";

SortIcon.propTypes = {};

function SortIcon(props) {
  const { sortDesc, isSort } = props;
  const size = "6px";
  return (
    <Stack direction={"column"} gap={"2px"} justifyContent="center">
      <div
        style={{
          height: 0,
          width: 0,
          borderLeft: `${size} solid transparent`,
          borderRight: `${size} solid transparent`,
          borderBottom: `${size} solid ${
            isSort & !sortDesc ? "red" : "#adb5bd"
          } `,
        }}
      ></div>
      <div
        style={{
          height: 0,
          width: 0,
          borderLeft: `${size} solid transparent`,
          borderRight: `${size} solid transparent`,
          borderTop: `${size} solid ${isSort & sortDesc ? "red" : "#adb5bd"}`,
        }}
      ></div>
    </Stack>
  );
}

export default SortIcon;
