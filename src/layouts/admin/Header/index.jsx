import React from "react";
import { toggleMenu } from "../../../redux/admin/adminReducer";
import { AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
Header.propTypes = {};

function Header(props) {
  const dispatch = useDispatch();

  const handleClickMenu = () => {
    dispatch(toggleMenu());
  };
  const handleClickNoti = () => {
    alert("There's no notification");
  };
  return (
    <div
      className="header"
      style={{ position: "fixed", zIndex: 100, width: "100%" }}
    >
      <Box
        sx={{
          height: 70,
          width: "100%",

          bgcolor: "text.primary",
        }}
      >
        <AppBar
          position="static"
          sx={{ bgcolor: "text.primary", height: "100%" }}
        >
          <Toolbar sx={{ height: "100%" }}>
            <IconButton
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
              sx={{ flexGrow: 1, mr: 2, textAlign: "right" }}
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
