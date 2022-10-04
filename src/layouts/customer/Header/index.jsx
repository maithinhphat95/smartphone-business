import {
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import "./Header.scss";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import Flip from 'react-reveal/Flip';
function Header(props) {
  // const [open, setOpen] = useState(false);
  // const handleOpen = (e) => {

  //   setOpen(true);
  // }
  // const handleClose = () => setOpen(false);
  const history = useNavigate();
  // const onClickSearch = (e) =>{
  //   e.preventdefault();
  //   history("/search");
  // 

  // }
  return (
    <Container maxWidth="xl" className="header" sx={{ height:{xs:"320px", sm:"250px", md:"200px", lg:"150px"} }}>
      <Container className="header-container">
        <Grid container>
          <Grid item={true} sm={12} xs={12} md={2}>
            <Link to="/" className="text-link">
              <Typography className="logo" variant="h6">
                TPSmartPhone
              </Typography>
            </Link>
          </Grid>
          <Grid item={true} sm={12} xs={12} md={5}>
            <Paper component="form"
              sx={{ display: "flex", width: 300, marginTop: 2.5 }} >
              {" "}
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Nhập tên điện thoại ... cần tìm"
                inputProps={{
                  "aria-label": "Nhập tên điện thoại ... cần tìm",
                }}
                type="search"
              />
              <Link to="/search" className="text-link">
                <IconButton type="submit" aria-label="search">
                  <SearchIcon fontSize="medium" />
                </IconButton>
              </Link>
            </Paper>
          </Grid>
          <Grid item={true}  sm={12} xs={12} md={5}>
            <Box>
            <Flip cascade>
              <ul className="header-ul">
                <li>
                  <Link to="/checkorder" href="#" className="header-link">
                    <LocalShippingOutlinedIcon color="" fontSize="large" />{" "}
                    <p>Kiểm tra đơn hàng</p>
                  </Link>
                </li>

                <li>
                  <Link to="/login" className="header-link">
                    <AccountCircleOutlinedIcon color="" fontSize="large" />
                    <p>Tài khoản của tôi</p>
                  </Link>
                </li>
                {/* {open && <Login handleClose={setOpen}/>} */}
                <li>
                  <Link to="/cart"  className="header-link">
                    <ShoppingCartOutlinedIcon color="" fontSize="large" />
                    <p>Giỏ hàng</p>
                  </Link>
                </li>
              </ul>
              </Flip>
            </Box>
          </Grid>
        </Grid>
</Container>
  
    {/* <Container>
    <nav className="navbar navbar-expand-lg">
    <Grid container>
    <Grid item={true}  sm={12} xs={12} md={12}>
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
 </Grid>
 <Grid item={true} sm={12} xs={12} md={5}>
            <Paper component="form"
              sx={{ display: "flex", width: 300, marginTop: 2.5 }} >
              {" "}
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Nhập tên điện thoại ... cần tìm"
                inputProps={{
                  "aria-label": "Nhập tên điện thoại ... cần tìm",
                }}
                type="search"
              />
              <Link to="/search" className="text-link">
                <IconButton type="submit" aria-label="search">
                  <SearchIcon fontSize="medium" />
                </IconButton>
              </Link>
            </Paper>
          </Grid>
 </Grid>
</nav>
      </Container> */}

    
        {/* <div className="container">
        <Row>
          <Col md={12} sm={12} xs={12}>
            <Row>
              <Col md={2} sm={6} xs={12} >
              <Link to="/" className="text-link"><Typography className="logo" variant="h6">TPSmartPhone</Typography></Link>
              
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
                   <Link to="/search" className="text-link">
                  <IconButton type="submit" aria-label="search" >
                    <SearchIcon fontSize="medium" />
                  </IconButton>
                  </Link>
                </Paper>
              </Col>
              <Col md={5} sm={12} xs={12}>
                <ul className="header-ul">
                  <li>
                    <a href="#" className="header-link">
                      <LocalShippingOutlinedIcon color="" fontSize="large" />{" "}
                      <p>Kiểm tra đơn hàng</p>
                    </a>
                  </li>
                
                  <li>
                  <Link to="/login" className="header-link" >
                      <AccountCircleOutlinedIcon color="" fontSize="large" />
                      <p>Tài khoản của tôi</p>
                    </Link>
                  
                  </li>
                  {/* {open && <Login handleClose={setOpen}/>} */}
        {/* <li>
                    <a href="#" className="header-link">
                      <ShoppingCartOutlinedIcon color="" fontSize="large" />
                      <p>Giỏ hàng</p>
                    </a>
                  </li>
                </ul>
             
              </Col>
            </Row>
          </Col>
        </Row> */}
        {/* </div> */}
    </Container>
  );
}

export default Header;
