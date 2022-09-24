import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
AccountShort.propTypes = {};

function AccountShort(props) {
  // Props account receive a object contain avatar url, name, phone number
  const { account } = props;
  return (
    <Box
      sx={{
        width: "100%",
        height: 150,
        backgroundColor: "text.secondary",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://mui.com/static/images/avatar/1.jpg"
        sx={{
          width: 80,
          height: 80,
          mb: 0.5,
          zIndex: 0,
        }}
      />
      <Typography
        component="h3"
        sx={{ m: 0, fontWeight: "bold", color: "white" }}
      >
        Mai Thịnh Phát
      </Typography>
      <Typography component="p" sx={{ m: 0, fontSize: "14px", color: "white" }}>
        SDT: 0964084330
      </Typography>
    </Box>
  );
}

export default AccountShort;
