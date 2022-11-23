import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
AccountShort.propTypes = {};

function AccountShort(props) {
  // Props account receive a object contain avatar url, name, phone number
  const { currentUser } = useSelector((state) => state.user);
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
        alt="Mai Thinh Phat"
        src={currentUser.img || "https://mui.com/static/images/avatar/1.jpg"}
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
        {currentUser.name || "No Data"}
      </Typography>
      <Typography component="p" sx={{ m: 0, fontSize: "14px", color: "white" }}>
        SDT: {currentUser.phone || "No Data"}
      </Typography>
    </Box>
  );
}

export default AccountShort;
