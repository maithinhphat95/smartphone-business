import React from "react";
import "./Imgbackground.scss";
import Banner from "../Banner";
import Fade from 'react-reveal/Fade';
import { Box, Container} from "@mui/material";
function Imgbackground(props) {
  return (
    <Container maxWidth="xl" className="imgbg">
      <Box container className="fpt-sale">
        <Box className="category-container">
          <Fade top>
          <Box className="sale-cd-tit">
            <a href="">
                <img class="responsive" src="https://images.fpt.shop/unsafe/fit-in/filters:quality(80):fill(transparent)/fptshop.com.vn/Uploads/Originals/2022/9/15/637988511655314952_top-head.png" alt="" />
            </a>
          </Box>
            </Fade>
          <Banner />
        </Box>
      </Box>
    </Container>
  );
}

export default Imgbackground;
