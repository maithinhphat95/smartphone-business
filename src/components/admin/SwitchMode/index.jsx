import React from "react";
import { FormGroup, Switch, Typography, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { themeSelect } from "../../../redux/admin/adminReducer";

SwitchMode.propTypes = {};

function SwitchMode(props) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.admin.theme);

  // Handle change mode
  const handleChangeMode = (e) => {
    const mode = e.target.checked ? "dark" : "light";
    dispatch(themeSelect(mode));
  };

  return (
    <FormGroup>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={1}
      >
        <Typography>Dark Mode:</Typography>
        <Switch
          value={""}
          checked={theme === "dark"}
          onChange={(e) => {
            handleChangeMode(e);
          }}
        />
      </Stack>
    </FormGroup>
  );
}

export default SwitchMode;
