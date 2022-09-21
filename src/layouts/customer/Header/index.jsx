import {
  Button,
  Grid,
  IconButton,
  InputBase,
  Paper,
  
} from "@mui/material";
import React from "react";
import "./Header.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Login from "../../pages/Login";
import {
  Link
} from "react-router-dom";
function Header(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    
    setOpen(true);
  }
  // const handleClose = () => setOpen(false);
  
  return (
    <div className="container-fluid header">
      <div className="container">
        <Row>
          <Col md={12} sm={12} xs={12}>
            <Row>
              <Col md={2} sm={6} xs={12} >
              <Link to="/"><img  src="https://img.freepik.com/premium-vector/smart-phone-logo-design-template_18099-3279.jpg?w=2000" alt="" /></Link>
                {/* <Typography sx={{paddingTop:3}}>Logo</Typography> */}
              </Col>
              <Col md={5} sm={6} xs={12}>
                {" "}
                <Paper component="form" sx={{ display: "flex", width: 350,marginTop: 2.5  }}>
                  {" "}
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Nhập tên điện thoại ... cần tìm"
                    inputProps={{
                      "aria-label": "Nhập tên điện thoại ... cần tìm",
                    }}
                  />
                  <IconButton type="button" aria-label="search" >
                    <SearchIcon fontSize="medium" />
                  </IconButton>
                </Paper>
              </Col>
              <Col md={5} sm={12} xs={12}>
                <ul className="header-ul">
                  <li>
                    <a href="" className="header-link">
                      <LocalShippingOutlinedIcon color="" fontSize="large" />{" "}
                      <p>Kiểm tra đơn hàng</p>
                    </a>
                  </li>
                  
                  <li>
                    <a href="" className="header-link" onClick={(e)=>{e.preventDefault(); handleOpen()} }>
                      <AccountCircleOutlinedIcon color="" fontSize="large" />{" "}
                     <p> Tài khoản của tôi</p>
                    </a>
                    {/* <p><AccountCircleOutlinedIcon color="" fontSize="large" />{" "}</p>
                    <Button variant="text" onClick={()=> handleOpen()}>Tài khoản của tôi</Button> */}
                    
                  </li>
                  {open && <Login handleClose={setOpen}/>}
                  <li>
                    <a href="" className="header-link">
                      <ShoppingCartOutlinedIcon color="" fontSize="large" />
                      <p>Giỏ hàng</p>
                    </a>
                  </li>
                </ul>
                {/* <a href=""><i class="bi-alarm"></i></a>
        <a href=""><LocalShippingOutlinedIcon color="" fontSize="large" /> Giỏ hàng</a>
        <a href=""><i class="bi-alarm"></i>Tài khoản của tôi</a> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
