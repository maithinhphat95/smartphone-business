import React from "react";
import { Box } from "@mui/system";
import { adminColorLight } from "../../../constant/admin";
import Menu from "../../../components/admin/Menu";
import { useDispatch } from "react-redux";
import { hideMenu } from "../../../redux/admin/adminReducer";

Main.propTypes = {};

function Main(props) {
  const { children } = props;
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        position: "relative",
        top: 70,
        display: "flex",
        backgroundColor: adminColorLight.background,
      }}
    >
      <Menu />
      <Box
        className="admin-content"
        sx={{
          p: 2,
          flex: 1,
          overflow: "auto",
          backgroundColor: adminColorLight.background,
          minHeight: "calc(100vh - 70px)",
        }}
        onClick={() => {
          dispatch(hideMenu());
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Main;
