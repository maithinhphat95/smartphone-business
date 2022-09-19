import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
Header.propTypes = {};

function Header(props) {
  const handleClickMenu = () => {
    console.log("click menu");
  };
  const handleClickNoti = () => {
    console.log("click noti");
  };
  return (
    <div className="header">
      <Box sx={{ flexGrow: 1, height: 70 }}>
        <AppBar
          //   position="fixed"
          position="static"
          sx={{ bgcolor: "text.primary", height: "100%" }}
          alignItems="center"
        >
          <Toolbar sx={{ height: "100%" }}>
            <IconButton
              textAlign="center"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ p: 2, mr: 2, height: "100%" }}
              onClick={handleClickMenu}
            >
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ p: 2, height: "100%" }}
              onClick={handleClickNoti}
            >
              <NotificationsIcon sx={{ fontSize: 30 }} />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              textAlign="right"
              sx={{ flexGrow: 1, mr: 2 }}
            >
              TPSmartPhone
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;
