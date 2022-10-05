import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import Banner from "../../../../components/customer/Banner";

import SideBar from "../../../../components/customer/SideBar";
import TitleTogglePhone from "../../../../components/customer/TitleTogglePhone";
import TogglePhoneItem from "../../../../components/customer/TogglePhoneItem";
function DetalPhone(props) {
  return (
    <>
      <Banner />
      <div className="container-fluid profuid">
        <div className="container">
          {/* <div>Loading...{params.producer}</div> */}
          <Grid container>
            <SideBar />
            <Grid item={true} xs={12} sm={6} md={9}>
              <TitleTogglePhone />
              <TogglePhoneItem />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default DetalPhone;
