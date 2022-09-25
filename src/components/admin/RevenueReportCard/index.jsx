import React from "react";
import { Box, Typography } from "@mui/material";
import { adminColorDark, adminColorLight } from "../../../constant/admin";
RevenueReportCard.propTypes = {};

function RevenueReportCard(props) {
  const { reportObj } = props;
  return (
    <Box
      sx={{
        fontSize: "12px",
        borderRadius: 2,
        backgroundColor: adminColorLight.primary,
        p: 1,
      }}
    >
      <Typography
        variant="p"
        component="p"
        sx={{
          fontStyle: "italic",
          fontWeight: "bold",
          display: "flex",
          width: "max-content",
          margin: "0 auto",
        }}
      >
        {reportObj.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: 4, md: 0 },
          flexDirection: { xs: "row", md: "column" },
          textAlign: "center",
        }}
      >
        <Typography
          component="h6"
          variant="h6"
          sx={{ fontSize: "16px", color: "red" }}
        >
          $ {reportObj.value.toLocaleString()}
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{ color: "inherit", fontStyle: "italic", fontSize: "12px" }}
        >
          Previous {reportObj.type}: $ {reportObj.previous.toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );
}

export default RevenueReportCard;
