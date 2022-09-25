import "./App.css";
import React from "react";
import AdminHome from "./pages/admin/AdminHome";
import { Box } from "@mui/material";
import { adminColorDark, adminColorLight } from "./constant/admin";

function App() {
  return (
    <Box
      className="App"
      sx={{
        backgroundColor: adminColorLight.background,
        // color: adminColorLight.text,
      }}
    >
      <AdminHome />
    </Box>
  );
}
export default App;
