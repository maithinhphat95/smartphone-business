import React from "react";
import { Box } from "@mui/material";

NotFoundPage.propTypes = {};

function NotFoundPage(props) {
  return (
    <Box textAlign={"center"}>
      404 Error. The requested URL [URL] was not found on this server
    </Box>
  );
}

export default NotFoundPage;
