import React from "react";
import { Box } from "@mui/material";
import PageTitle from "../../../components/admin/PageTitle";
import SwitchMode from "../../../components/admin/SwitchMode";

SettingPage.propTypes = {};

function SettingPage(props) {
  return (
    <>
      <PageTitle title="Setting" description="" />
      <Box sx={{ margin: "0 auto" }}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <SwitchMode />
        </Box>
      </Box>
    </>
  );
}

export default SettingPage;
